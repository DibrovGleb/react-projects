import './App.sass';
import { useState } from 'react';
import React from 'react';
import questions from './questions';

function Result({correct, wrong}) {
  return(
    <>
    <div className="progress">
        <div style={{ width: '100%' }} className="progress__inner"></div>
    </div>
    <div>
      <h1>Correct - {correct}</h1>
      <h2>Wrong - {wrong}</h2>
    </div>
    </>
  )
}

function Game({step, question, onClickAnswer}) {
  const progress = Math.round((step / questions.length) * 100)

  return(
    <>
    <div className="progress">
      <div style={{ width: `${progress}%` }} className="progress__inner"></div>
    </div>
    <h1>{question.title}</h1>
    <ul>
      { 
        question.answers.map((elem, index) => (
        <li onClick={()=> onClickAnswer(index)} key={elem}>{elem}</li> ))
      }
    </ul>
    </>
  )
}

export default function App() {
  const [step, setStep] = React.useState(0),
        [correct, setCorrect] = React.useState(0),
        [wrong, setWrong] = React.useState(0),
        question = questions[step],
        onClickAnswer = (index) =>{
          setTimeout(() => {
            setStep(step + 1)
            index === question.correct ? setCorrect(correct + 1) : setWrong(wrong + 1)
          }, 100)
        }

  return (
    <div className="App">
      {
        step != questions.length ? <Game step={step} question={question} onClickAnswer={onClickAnswer}/> 
        : <Result correct={correct} wrong={wrong}/>
      } 
    </div>
  )
}