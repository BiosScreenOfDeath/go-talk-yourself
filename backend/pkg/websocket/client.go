package websocket

import (
	"fmt"
	"log"
	"math/rand/v2"

	"github.com/gorilla/websocket"
)

type Client struct {
	ID   string
	Conn *websocket.Conn
	Pool *Pool
	//mu   sync.Mutex
}

type Message struct {
	Type    int    `json:"type"`
	Body    string `json:"body"`
	User_ID string `json:"user_ID"`
}

func (c *Client) Read() {
	defer func() {
		c.Pool.Unregister <- c
		c.Conn.Close()
	}()

	for {
		messageType, p, err := c.Conn.ReadMessage()
		if err != nil {
			log.Println(err)
			return
		}
		message := Message{
			Type:    messageType,
			Body:    string(p),
			User_ID: c.ID}
		c.Pool.Broadcast <- message
		fmt.Printf("Message received: %+v\n", message)
	}
}

func (c *Client) GenerateClientID() {

	nameList := []string{"arpen", "titor", "buzz", "kromer", "bogus", "alto", "dazzle"}

	c.ID = nameList[rand.IntN(len(nameList)-1)] + " " + nameList[rand.IntN(len(nameList)-1)]
}
