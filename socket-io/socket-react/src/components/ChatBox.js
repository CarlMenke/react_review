import React, { useEffect, useState } from "react";
import { io } from "socket.io-client"

const socket = io.connect("http://localhost:3001")
console.log('reloaded')

export const ChatBox = () =>{

  const [message, setMessage] = useState() 
  const [messageArray, setMessageArray] = useState([])


  const sendMessage = () =>{
    socket.emit("send message", {message:"good message"})

  }

  // const sendMessage = () =>{
  //   setMessageArray([...messageArray,"good message"])

  // }

  useEffect(()=>{
    socket.on("recieve message", (data)=>{
      setMessageArray((currentMessages)=>[...currentMessages,data.message])
    })
  },[socket])

  useEffect(()=>{
    console.log(messageArray)
  },[messageArray])
  
  return(
      <div>
          <div>Quick Talk</div>
          {
            messageArray.map((message,index)=>{
              console.log(message)
              return(
                <div key = {index}>{message}</div>
              )
            })
          }
          <input placeholder="Message..."></input>
          <button onClick = {sendMessage}>Send</button>
      </div>
  )
}