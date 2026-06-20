import Button from '../components/Button'
import { Photo, RouteMap } from '../components/Decor'

export default function Screen08Invite({ onNext }) {
  return <div className="screen screen-compact">
    <div style={{textAlign:'center'}}><div className="tag">Приглашение</div><h1 className="screen-title" style={{marginTop:8}}>Ты приглашена в маленькое летнее путешествие</h1></div>
    <div className="invite-hero photo-frame"><Photo src="cottage-evening.webp" alt="Домик вечером"/><div className="mini-map"><RouteMap/></div><div className="mini-road"><Photo src="road-us.webp" alt="В дороге"/></div></div>
    <div className="screen-body" style={{textAlign:'center',marginTop:16}}><p>Мы нашли место, где можно на день забыть о суете, делах и заботах.</p><p className="quote" style={{marginTop:10}}>Только лето. Дорога. Отдых.<br/>Мы рядом. И ты — самая главная.</p><p>Тебе 32. Ты добрая, красивая, любимая, настоящая — наша.</p></div>
    <div className="screen-cta"><Button onClick={onNext}>Открыть подарок 🎁</Button></div>
  </div>
}
