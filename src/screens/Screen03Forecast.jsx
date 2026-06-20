import Button from '../components/Button'
import { RouteMap, Photo } from '../components/Decor'

export default function Screen03Forecast({ onNext }) {
  return <div className="screen">
    <div style={{textAlign:'center'}}>
      <div className="tag">Прогноз судьбы</div>
      <h1 className="screen-title" style={{marginTop:8}}>Звёзды говорят:</h1>
      <p className="quote" style={{marginTop:8}}>обычный день рождения не подходит.</p>
    </div>
    <div className="forecast-visual scrapbook-panel">
      <RouteMap />
      <div className="forecast-photo"><Photo src="yulia-field.webp" alt="Юля летом" position="50% 45%"/></div>
      <span className="forecast-flower">🌸</span>
    </div>
    <div className="card route-teaser">
      <span>утро</span><i>♡</i><span>прогулка</span><i>♡</i><span>сюрприз</span>
    </div>
    <p className="screen-note" style={{textAlign:'center'}}>Координаты пока скрыты. Совпадение со счастьем — 100%.</p>
    <div className="screen-cta"><Button onClick={onNext}>Узнать, что задумали звёзды ✨</Button></div>
  </div>
}
