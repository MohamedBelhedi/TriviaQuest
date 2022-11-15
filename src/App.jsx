import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Spinner from 'react-bootstrap/Spinner';
import * as bootstrap from 'react-bootstrap'
// import { Card, Button } from 'react-bootstrap'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function App() {
  const [text1, setText1] = useState("hallo")
  const [answer, setAnswer] = useState("")
  const [vis, setVis] = useState(false)
  const [inputAnswer, setInputAnswer] = useState("")
  const [tries, setTries] = useState("3")
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

        //console.log(res.data.results[randomint])
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

  // make buttons for the answers, and let them name from the answers of the Api

  const correctAnswers = (e) => {

    if (e.key === "Enter") {
      { inputAnswer === answer ? alert("right") | setTimeout(() => { location.reload() }, 3000) : alert("wrong try again"); setTries(tries - 1) }
      { inputAnswer === answer ? setTries(0) + setTries("you Won") : tries }
      {
        tries < 2 ? setVis(true) | setTimeout(() => {
          location.reload();
        }, 3000) : tries
      }

      const triesstyle = document.getElementById("tries")

      { tries < 2 ? setTries("you lose") : null }
      { tries < 2 ? triesstyle.style.backgroundColor = "red" : triesstyle.style.backgroundColor = "articblue" }
    }

  }

  useEffect(() => {

    fetchDataQuest()


  }, [])




  return (
    <div className="container">

      <div className="row justify-items-center center col-sm-6">
        <bootstrap.Card>


          <h1>{!text1.category ? "pls Wait loading" : text1.category}</h1>
          <div id="tries" className="col p-2 bd-highlight">Tries:{tries}</div>
          <h1>{text1.question}</h1>
          <h2>possible answers: {text1.correct_answer === undefined ? <Spinner animation="border" role="status">
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
        </bootstrap.Card>
      </div>

    </div >
  )
}
