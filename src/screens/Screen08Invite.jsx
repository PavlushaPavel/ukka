import Button from '../components/Button'
import { Photo, RouteMap } from '../components/Decor'

export default function Screen08Invite({ onNext }) {
  return <div className="screen screen-compact">
    <div style={{textAlign:'center'}}>
      <div className="tag">Секретное приглашение</div>
      <h1 className="screen-title" style={{marginTop:8}}>Юля, ты приглашена в маленькое летнее приключение.</h1>
    </div>
    <div className="secret-route-hero scrapbook-panel">
      <RouteMap />
      <div className="route-shot route-shot-one"><Photo src="road-us.webp" alt="Юля и Паша в дороге"/></div>
      <div className="route-shot route-shot-two"><Photo src="yulia-field.webp" alt="Юля летом" position="50% 45%"/></div>
      <span className="route-secret">место<br/>секретно ♡</span>
    </div>
    <div className="screen-body">
      <p>Мы придумали день, в котором тебе не нужно ничего решать, искать, бронировать и организовывать.</p>
      <div className="card itinerary-card">
        <p><strong>Тебя ждёт:</strong></p>
        <ul><li>вкусное утро;</li><li>красивая прогулка;</li><li>очень вкусный обед;</li><li>пионы;</li><li>Миша;</li><li>Паша;</li><li>и несколько маленьких сюрпризов по дороге.</li></ul>
      </div>
      <p><strong>Где именно всё будет — пока секрет.<br/>Что именно будет в конце — тоже секрет.</strong></p>
      <p>Тебе 32.<br/>Ты добрая, красивая, любимая, настоящая, наша.</p>
      <p>И мы с Мишей очень хотим, чтобы ты почувствовала это не на словах, а целым днём.</p>
    </div>
    <div className="screen-cta"><Button onClick={onNext}>Я готова к секретному маршруту 🌸</Button></div>
  </div>
}
