import Button from '../components/Button'
import { Photo } from '../components/Decor'

export default function Screen05Dating2({ onNext }) {
  return <div className="screen">
    <div style={{textAlign:'center'}}><div className="tag">Кандидат №2</div><h1 className="screen-title" style={{marginTop:8}}>«Просто куда-нибудь сходить»</h1></div>
    <div className="photo-frame tall"><Photo src="road-us-2.webp" alt="Поездка без сюрприза" position="50% 50%"/></div>
    <div className="card screen-body"><p>Нормальный вариант, приличный, местами даже симпатичный.</p><p><strong>Но есть проблема:</strong></p><ul><li>без домика;</li><li>без маршрута;</li><li>без ощущения «вау, это всё для меня»;</li><li>без маленького человека с пионами.</li></ul></div>
    <p className="screen-note" style={{textAlign:'center'}}>Неплохо, но до дня рождения Юли не дотягивает.</p>
    <div className="screen-cta"><Button onClick={onNext}>Тоже не то</Button></div>
  </div>
}
