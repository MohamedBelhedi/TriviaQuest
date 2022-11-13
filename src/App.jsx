import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Spinner from 'react-bootstrap/Spinner';
import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function App() {
  const [text1, setText1] = useState("hallo")
  const [answer, setAnswer] = useState("")
  const [vis, setVis] = useState(false)
  const [inputAnswer, setInputAnswer] = useState("")
  const randInt = Math.floor(Math.random() * 100)
  const options = {
    methode: "GET",
    url: `https://opentdb.com/api.php?amount=${randInt}`
  }

  const fetchDataQuest = async () => {
    setText1("Loading....")

    await axios.request(options).then(




      res => {
        //guest about UseState after 3 tries show the correct anwer and stop the game and make with useState counter from 60 sec
        const randomint = Math.floor(Math.random() * 10)
        console.log(res.data.results)

        console.log(res.data.results[randomint])
        setText1(res.data.results[randomint])
        setAnswer(res.data.results[randomint].correct_answer)


      }
    )


  }


  const answerVis = () => {


    vis ? setVis(false) : setVis(true)
    setTimeout(() => {
      location.reload()
    }, 2000)

  }

  const correctAnswers = (e) => {

    if (e.key === "Enter") {
      { inputAnswer === answer ? alert("right") | setTimeout(() => { location.reload() }, 3000) : alert("wrong try again") }
    }

  }

  useEffect(() => {

    fetchDataQuest()

    // correctAnswers()

  }, [])




  return (
    <div className="container">
      <div className="row justify-items-center center">
        <h1>{!text1.category ? "pls Wait loading" : text1.category}</h1>
        <h1>{text1.question}</h1>
        <h2>possible answers: {text1.correct_answer === undefined ?     <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner> : text1.correct_answer} {text1.incorrect_answers === undefined ? "" : text1.incorrect_answers + " "}</h2>

        {vis ? <h2>{answer}</h2> : null}

        <h3>your answer:{inputAnswer}</h3>
        <input onChange={(e) => {
          setInputAnswer(e.target.value)
          // { e.target.value.includes(answer) ? alert("richtig") : alert("falsch") }

          console.log(e.target.value)
        }}
          onKeyDown={correctAnswers}
          value={inputAnswer} />

        <button className="btn btn-primary" onClick={answerVis}>Answers</button>
      </div>

    </div>
  )
}
