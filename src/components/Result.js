import medium from '../icons/confetti512px.png'

export default function Result({correct, questions}) {
    let answer
    switch (correct) {
        case 0:
            answer = ' ответов'
            break
        case 1:
            answer = ' ответ'
            break
        default:
            answer = ' ответа'
            break
    }

    return(
      <div className="result">
        <div className="progress">
            <div style={{ width: '100%' }} className="progress__inner"></div>
        </div>
        <img src={medium} alt="Confetti icon" />
        <h1 className='res'>Вы отгадали {correct + answer}  из {questions.length}</h1>
        <a href="/">
            <button>Попробовать снова</button>
        </a>
      </div>
    )
}