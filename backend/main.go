package main

import (
	"fmt"
	"gotalkyourselfvue/backend/pkg/websocket"
	"net/http"
)

func serverWS(pool *websocket.Pool, w http.ResponseWriter, r *http.Request) {
	fmt.Println("hit websocket")

	conn, err := websocket.Upgrade(w, r)

	if err != nil {
		fmt.Fprint(w, "%+V\n", err)
	}

	client := &websocket.Client{
		Conn: conn,
		Pool: pool,
	}
	pool.Register <- client
	client.Read()

}

func setupRoutes() {
	pool := websocket.NewPool()
	go pool.Start()

	http.HandleFunc("/ws", func(w http.ResponseWriter, r *http.Request) {
		serverWS(pool, w, r)
	})
}

func main() {
	fmt.Println("Go talk yourself")
	setupRoutes()
	http.ListenAndServe(":9009", nil)
}
