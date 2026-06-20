import Button from '../components/Button'
import { RouteMap } from '../components/Decor'

export default function Screen09Route({ onNext }) {
  return <div className="screen">
    <div style={{textAlign:'center'}}>
      <div className="tag">Маршрут активирован</div>
      <h1 className="screen-title" style={{marginTop:8}}>Маршрут активирован.</h1>
    </div>
    <div className="active-route scrapbook-panel">
      <RouteMap />
      <div className="route-stops"><span>☕<small>вкусно</small></span><b>···</b><span>✿<small>красиво</small></span><b>···</b><span>🍽<small>снова вкусно</small></span><b>···</b><span>?</span></div>
    </div>
    <div className="screen-body">
      <p>Сегодня у Юли есть только одна задача:<br/><strong>быть красивой, любимой и немного любопытной.</strong></p>
      <div className="card responsibility-card">
        <p>Паша отвечает за план.</p><p>Миша отвечает за важную часть с цветами.</p><p>Пионы отвечают за красоту.</p><p>Секретные точки отвечают за интригу.</p>
      </div>
      <div className="hint-card"><span>Подсказка дня</span><p>сначала будет вкусно,<br/>потом красиво,<br/>потом снова вкусно,<br/>а в конце будет то, что пока нельзя показывать слишком рано.</p></div>
    </div>
    <div className="screen-cta"><Button onClick={onNext}>Открыть финальный сюрприз 🎁</Button></div>
  </div>
}
