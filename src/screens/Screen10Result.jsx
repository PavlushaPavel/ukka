import { Photo } from '../components/Decor'

const RESULTS={iphone17:'iPhone 17 выбран. Паша записал и сделал серьёзное лицо.',iphone18:'iPhone 18 выбран. Уровень подарка: героиня заслужила.',hug:'Это правильный ответ. Но iPhone всё равно будет.'}
export default function Screen10Result({ gameState }) {
  return <div className="screen" style={{justifyContent:'center',textAlign:'center'}}>
    <div className="final-photo"><Photo src="couple-hug.webp" alt="Юля и Паша" position="50% 45%"/></div>
    <div><div className="tag">Выбор принят ♡</div><h1 className="screen-title" style={{marginTop:10}}>С днём рождения, Юля</h1></div>
    <div className="card screen-body"><p>{RESULTS[gameState.giftChoice]||RESULTS.hug}</p><p>Миша отвечает за пионы. Паша — за сюрприз. Юля — только за то, чтобы быть счастливой.</p></div>
    <p className="quote">С любовью,<br/>Паша и Миша ♡</p>
  </div>
}
