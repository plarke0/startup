const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const express = require('express');
const uuid = require('uuid');
const app = express();
const DB = require('./database.js');
const { peerProxy } = require('./peerProxy.js');

const authCookieName = 'token';

const port = process.argv.length > 2 ? process.argv[2] : 4000;

app.use(express.json());

app.use(cookieParser());

app.use(express.static('public'));

var apiRouter = express.Router();
app.use('/api', apiRouter);

//Create new user
apiRouter.post('/auth/create', async (req, res) => {
    if (await findUser('email', req.body.email)) {
        res.status(409).send({ msg: 'Existing user' })
    } else {
        const user = await createUser(req.body.email, req.body.password);

        setAuthCookie(res, user.token);
        res.send({ email: user.email });
    }
});

//Login exisiting user
apiRouter.post('/auth/login', async (req, res) => {
    const user = await findUser('email', req.body.email);
    if (user) {
        if (await bcrypt.compare(req.body.password, user.password)) {
            user.token = uuid.v4();
            await DB.updateUser(user);
            setAuthCookie(res, user.token);
            res.send({ email: user.email });
            return;
        }
    }
    res.status(401).send({ msg: 'Unauthorized' })
});

//Logout current user
apiRouter.delete('/auth/logout', async (req, res) => {
    const user = await findUser('token', req.cookies[authCookieName]);
    if (user) {
        delete user.token;
        DB.updateUser(user);
    }
    res.clearCookie(authCookieName);
    res.status(204).end();
});

//Middleware to verify that the user is authenticated
const verifyAuth = async (req, res, next) => {
    const user = await findUser('token', req.cookies[authCookieName]);
    if (user) {
        next();
    } else {
        res.status(401).send({ msg: 'Unauthorized' });
    }
};

//Initialize budget data
async function initializeBudgetData(userName) {
    let budgetEntry = {
        userName: userName,
        categoryNames: ['Savings'],
        categoryValues: { 'Savings': 0 },
        depositRatios: {
            'Even': {
                'Savings': 10000
            },
            'Custom': {
                'Savings': 10000
            }
        },
        logs: {
            'Savings': []
        },
        unusedLogs: {}
    };
    DB.addData(budgetEntry);
    return budgetEntry;
}

//Retrieve budget data
apiRouter.get('/budget/userdata', verifyAuth, async (req, res) => {
    const user = await findUser('token', req.cookies[authCookieName]);
    const userName = user.userName;
    let data = await findData(userName);
    if (!data) {
        newData = await initializeBudgetData(userName);
        res.send(newData);
    } else {
        res.send(data);
    }
});

//Update budget data
apiRouter.post('/budget/userdata', verifyAuth, async (req, res) => {
    const user = await findUser('token', req.cookies[authCookieName]);
    const userName = user.userName;
    let data = req.body.data;
    data.userName = userName;
    updateData(data);
    res.status(200).end();
});

// Default error handler
app.use(function (err, req, res, next) {
    res.status(500).send({ type: err.name, message: err.message });
});

// Return the application's default page if the path is unknown
app.use((_req, res) => {
    res.sendFile('index.html', { root: 'public' });
});

async function createUser(email, password) {
    const passwordHash = await bcrypt.hash(password, 10);

    const user = {
        userName: email,
        password: passwordHash,
        token: uuid.v4(),
    };
    await DB.addUser(user);
    await DB.incrementTotalUserCount();

    return user;
}

async function findUser(field, value) {
    if (!value) return null;

    if (field === "token") {
        return DB.getUserByToken(value);
    } else {
        return DB.getUser(value);
    }
}

async function findData(userName) {
    return await DB.getData(userName);
}

async function updateData(data) {
    await DB.updateData(data);
}

// setAuthCookie in the HTTP response
function setAuthCookie(res, authToken) {
    res.cookie(authCookieName, authToken, {
        maxAge: 1000 * 60 * 60 * 24 * 365,
        secure: true,
        httpOnly: true,
        sameSite: 'strict',
    });
}

const httpService = app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

peerProxy(httpService);
