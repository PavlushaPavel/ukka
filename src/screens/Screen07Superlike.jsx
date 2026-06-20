import Button from '../components/Button'
import { Photo } from '../components/Decor'

export default function Screen07Superlike({ onNext }) {
  return <div className="screen screen-compact">
    <div style={{textAlign:'center'}}><div className="tag">Суперлайк от Миши ♡</div><h1 className="screen-title" style={{marginTop:8}}>У тебя новое сообщение</h1></div>
    <div className="superlike-photo"><Photo src="misha-peonies.webp" alt="Миша с маленьким букетом пионов"/></div>
    <div className="card"><p className="quote">«Мама, я тебя люблю.<br/>У меня для тебя пионы.»</p></div>
    <div className="screen-body" style={{textAlign:'center'}}><p>Вероятность растрогаться: <strong>99,9%</strong>.</p><p>Миша очень старался. Паша немного помог.</p></div>
    <div className="screen-cta"><Button onClick={onNext}>Принять пионы 🌸</Button></div>
  </div>
}
