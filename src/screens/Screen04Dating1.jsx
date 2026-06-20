import Button from '../components/Button'
import { Photo } from '../components/Decor'

export default function Screen04Dating1({ onNext }) {
  return <div className="screen">
    <div style={{textAlign:'center'}}><div className="tag">Кандидат №1</div><h1 className="screen-title" style={{marginTop:8}}>«Просто посидеть дома»</h1></div>
    <div className="photo-frame tall"><Photo src="pasha-home.webp" alt="Вариант остаться дома" position="50% 38%"/></div>
    <div className="card screen-body"><p><strong>О себе:</strong> стабильный, привычный, без сюрпризов.</p><p><strong>Плюсы:</strong> никуда не надо ехать.</p><p><strong>Минусы:</strong> слишком мало магии. Юля — летний человек. Её нельзя держать дома в такой день.</p></div>
    <div className="screen-cta"><Button onClick={onNext}>Не подходит</Button></div>
  </div>
}
