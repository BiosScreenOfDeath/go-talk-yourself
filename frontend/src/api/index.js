export default (address) => {
    return {
        socket: undefined,
        onMessageHandler: undefined,
        onConnectHandler: undefined,

        // explicit setters
        onMessage(handler) {
            this.onMessageHandler = handler
        },

        onConnect(handler) {
            this.onConnectHandler = handler
        },

        connect() {
            this.socket = new WebSocket(address)
        
            // onopen will be called by WebSocket once the connection is established.
            // Use arrow function to pass wsAPI context (this)
            this.socket.onopen = () => {

                console.log(this.socket)
                console.log("Connection established!")
        
                if (this.onConnectHandler) {
                    this.onConnectHandler()
                }
            }
        
            this.socket.onclose = () => {
                console.log("Connection closed.")
            }
        
            this.socket.onmessage = (msg) => {
                // console.log("Message received. ", messageEvent);
                if (this.onMessageHandler) {
                    this.onMessageHandler(msg)
                }
            }
        
            this.socket.onerror = (errorEvent) => {
                console.log("Connection error! ", errorEvent)
            }
        },

        sendMessage(msg) {
            if (this.socket) {
                this.socket.send(msg);
            }
        }
    }
}