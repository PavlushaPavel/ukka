import Button from '../components/Button'
import { Photo, RouteMap } from '../components/Decor'

export default function Screen06Dating3({ onNext }) {
  return <div className="screen">
    <div style={{textAlign:'center'}}><div className="tag">Кандидат №3 · мэтч</div><h1 className="screen-title" style={{marginTop:8}}>«Лето, секретный маршрут и любовь»</h1></div>
    <div className="split-photo" style={{height:220}}><RouteMap/><div><Photo src="couple-kiss.webp" alt="Юля и Паша" position="50% 45%"/></div></div>
    <div className="card screen-body"><p><strong>В комплекте:</strong></p><ul><li>Паша — всё придумал.</li><li>Миша — участвует.</li><li>Пионы — будут.</li><li>Маршрут — засекречен.</li><li>Юля — главная.</li></ul></div>
    <p className="quote">Кажется, это не просто кандидат. Кажется, это мэтч.</p>
    <div className="screen-cta"><Button onClick={onNext}>Это мэтч 💘</Button></div>
  </div>
}
