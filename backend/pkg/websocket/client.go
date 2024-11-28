package websocket

import (
	"fmt"
	"log"
	"math/rand/v2"

	"github.com/gorilla/websocket"
)

type Client struct {
	ID       string
	Class_ID int
	Conn     *websocket.Conn
	Pool     *Pool
	//mu   sync.Mutex
}

type Message struct {
	Type       int    `json:"type"`
	Body       string `json:"body"`
	User_ID    string `json:"user_ID"`
	User_Class int    `json:"user_class_id"`
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
			Type:       messageType,
			Body:       string(p),
			User_ID:    c.ID,
			User_Class: c.Class_ID,
		}
		c.Pool.Broadcast <- message
		fmt.Printf("Message received: %+v\n", message)
	}
}

func (c *Client) GenerateClientID() {

	nameList := []string{
		"arpen", "titor", "buzz", "kromer", "bogus", "alto", "dazzle",
		"motor", "freeman", "silent", "still", "mono", "beer", "sick"}

	c.ID = nameList[rand.IntN(len(nameList)-1)] +
		" " + nameList[rand.IntN(len(nameList)-1)]
}

func (c *Client) GenerateClientClassID() {
	c.Class_ID = rand.IntN(10)
}
