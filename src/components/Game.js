export default function Game({step, question, questions, onClickAnswer}) {
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
  