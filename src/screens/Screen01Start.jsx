import Button from '../components/Button'
import { StartCollage } from '../components/Decor'

export default function Screen01Start({ onNext }) {
  return <div className="screen screen-compact">
    <StartCollage />
    <div className="intro-copy">
      <h2 className="screen-title">Это не просто сообщение.</h2>
      <p>Это твоя летняя миссия на 32 года.</p>
    </div>
    <div className="card screen-body">
      <p><strong>Участники миссии:</strong></p>
      <ul><li>Паша — организатор.</li><li>Миша — специалист по обнимашкам.</li><li>Юля — главная героиня.</li></ul>
    </div>
    <div className="screen-cta"><Button onClick={onNext}>Начать 🌸</Button></div>
  </div>
}
