class UserChangeNotifier {
    handlers = []

    constructor() {
        let port = window.location.port;
        const protocol = window.location.protocol === "http:" ? "ws" : "wss";
        this.socket = new WebSocket(`${protocol}://${window.location.hostname}:${port}/ws`)

        this.socket.onmessage = async (message) => {
            try {
                const content = await JSON.parse(message.data);
                this.receiveMessage(content);
            } catch {}
        };
    }

    addHandler(handler) {
        this.handlers.push(handler);
    }

    removeHandler(handler) {
        this.handlers = this.handlers.filter((h) => h !== handler);
    }

    receiveMessage(content) {
        this.handlers.forEach((handler) => {
            handler(content);
        });
    }
}

const UserNotifier = new UserChangeNotifier();
export { UserNotifier };