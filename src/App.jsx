import './App.css'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function App() {
  const [text1,setText1] = useState("hallo")
  const options={
    methode:"GET",
    url:"https://opentdb.com/api.php?amount=10&category=22"
  }

  const fetchDataQuest=()=>{

    axios.request(options).then(

     

   
      res=>{
        //guest about UseState after 3 tries show the correct anwer and stop the game and make with useState counter from 60 sec
           const randomint=Math.floor(Math.random() * 10)
        console.log(res.data.results)
        
        console.log(res.data.results[randomint])
                         
      }
                               )

    
    
  }

  useEffect(()=>{

    fetchDataQuest()

    
  },[])
  return (
    <main>
      <h1>{text1}</h1>
      
    </main>
  )
}
