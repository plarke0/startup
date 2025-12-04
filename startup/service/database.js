const { MongoClient } = require('mongodb');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('budget-center');
const userCollection = db.collection('users');
const userCountCollection = db.collection('user-count');
const dataCollection = db.collection('data');

// Asynchronously test the connection and exit the process if it fails
(async function testConnection() {
    try {
        await db.command({ ping: 1 });
        console.log(`Connect to database`);
    } catch (exception) {
        console.log(`Unable to connect to database with ${url} because ${exception.message}`);
        process.exit(1);
    }
})();

function getUser(userName) {
    return userCollection.findOne({ userName: userName });
}

function getUserByToken(token) {
    return userCollection.findOne({ token: token });
}

async function addUser(user) {
    await userCollection.insertOne(user);
}

async function updateUser(user) {
    await userCollection.updateOne({ userName: user.userName }, { $set: user });
}

async function addData(data) {
    await dataCollection.insertOne(data)
}

async function updateData(data) {
    await dataCollection.updateOne({ userName: data.userName }, { $set: data });
}

function getData(userName) {
    return dataCollection.findOne({ userName: userName });
}

async function incrementTotalUserCount() {
    await userCountCollection.updateOne({ name: "total-user-count" }, { $inc: count });
}

async function getTotalUserCount() {
    const userCountEntry = await userCountCollection.findOne({ name: "total-user-count" });
    return userCountEntry.count;
}

module.exports = {
    getUser,
    getUserByToken,
    addUser,
    updateUser,
    addData,
    updateData,
    getData,
    incrementTotalUserCount,
    getTotalUserCount,
};