import Button from '../components/Button'
import { RouteMap, Photo } from '../components/Decor'

export default function Screen03Forecast({ onNext }) {
  return <div className="screen">
    <div style={{textAlign:'center'}}><div className="tag">Прогноз судьбы</div><h1 className="screen-title" style={{marginTop:8}}>Обычный день рождения не подходит</h1></div>
    <div className="split-photo"><RouteMap/><div><Photo src="yulia-field.webp" alt="Юля летом" position="50% 45%"/></div></div>
    <div className="card screen-body"><p><strong>Звёзды говорят, нужны:</strong></p><ul><li>дорога и лето;</li><li>уютный домик;</li><li>маленький букет пионов;</li><li>Миша рядом;</li><li>Паша, который всё организовал.</li></ul></div>
    <p className="quote">Юля ничего не должна решать. Кроме одного — наслаждаться.</p>
    <div className="screen-cta"><Button onClick={onNext}>Подобрать идеальный формат</Button></div>
  </div>
}
