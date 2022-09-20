import './App.sass'
import { useState } from 'react'
import React from 'react'
import questions from './components/questions'
import Result from './components/Result'
import Game from './components/Game'

export default function App() {
  const [step, setStep] = useState(0),
        [correct, setCorrect] = useState(0),
        question = questions[step],
        onClickAnswer = (index) =>{
          setTimeout(() => {
            setStep(step + 1)
            if(index === question.correct) setCorrect(correct + 1)
        }, 100)},
        onClickReset = ()=>{
            setStep(0)
            setCorrect(0)
        }

  return (
    <div className="App">
      {
        step != questions.length 
        ? <Game step={step} question={question} questions={questions} onClickAnswer={onClickAnswer}/> 
        : <Result correct={correct} questions={questions} onClickReset={onClickReset}/>
      } 
    </div>
  )
}