const { WebSocketServer } = require('ws');
const DB = require('./database.js');

function peerProxy(httpServer) {
    // Create a websocket object
    const socketServer = new WebSocketServer({ server: httpServer });

    async function broadcastCounts() {
        const totalOpenSockets = socketServer.clients.size;
        const totalUsers = await DB.getTotalUserCount();
        socketServer.clients.forEach((client) => {
            client.send(JSON.stringify({ totalUsers: totalUsers, activeUsers: totalOpenSockets }));
        });
    }

    socketServer.on('connection', (socket) => {
        socket.isAlive = true;

        broadcastCounts();

        // Respond to pong messages by marking the connection alive
        socket.on('pong', () => {
            socket.isAlive = true;
        });

        socket.on('close', () => {
            broadcastCounts();
        });
    });

    // Periodically send out a ping message to make sure clients are alive
    setInterval(() => {
        socketServer.clients.forEach(function each(client) {
            if (client.isAlive === false) {
                return client.terminate();
            }
            client.isAlive = false;
            client.ping();
        });
    }, 10000);
}

module.exports = { peerProxy };
