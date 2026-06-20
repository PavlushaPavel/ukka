import Button from '../components/Button'
import { Photo } from '../components/Decor'

export default function Screen06Dating3({ onNext }) {
  return <div className="screen">
    <div style={{textAlign:'center'}}><div className="tag">Кандидат №3 · мэтч</div><h1 className="screen-title" style={{marginTop:8}}>«Домик, лето, дорога и любовь»</h1></div>
    <div className="split-photo" style={{height:220}}><div><Photo src="cottage-evening.webp" alt="Уютный домик"/></div><div><Photo src="couple-kiss.webp" alt="Юля и Паша" position="50% 45%"/></div></div>
    <div className="card screen-body"><p><strong>В комплекте:</strong></p><ul><li>Паша — организовал.</li><li>Миша — участвует.</li><li>Пионы — будут.</li><li>Домик — ждёт.</li><li>Юля — главная.</li></ul></div>
    <p className="quote">Кажется, это не просто кандидат. Кажется, это мэтч.</p>
    <div className="screen-cta"><Button onClick={onNext}>Это мэтч 💘</Button></div>
  </div>
}
