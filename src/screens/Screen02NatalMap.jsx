import Button from '../components/Button'
import { NatalWheel } from '../components/Decor'

export default function Screen02NatalMap({ onNext }) {
  return <div className="screen">
    <div style={{textAlign:'center'}}><div className="tag">Натальная карта</div><h1 className="screen-title" style={{marginTop:8}}>Мы построили твою натальную карту на ближайшие дни</h1><p className="screen-subtitle">Результат необычный.</p></div>
    <NatalWheel />
    <div className="card screen-body"><ul><li>Солнце — в доме путешествий.</li><li>Венера — в доме пионов.</li><li>Миша — в доме любви.</li><li>Паша — в доме «я всё придумал».</li></ul></div>
    <p className="quote">Прогноз: Юле срочно нужен красивый день без забот и фразы «давай потом».</p>
    <div className="screen-cta"><Button onClick={onNext}>Что говорят звёзды? ✨</Button></div>
  </div>
}
