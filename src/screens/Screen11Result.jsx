import { Photo } from '../components/Decor'

const RESULTS = {
  iphone17: { title:'Выбор принят.', lines:[<>Паша сейчас делает вид, что был к этому полностью готов.<br/>Хотя, конечно, был.</>,<>Миша подтверждает:<br/><strong>мама заслужила.</strong></>] },
  iphone18: { title:'Выбор принят.', lines:[<>Уровень подарка: героиня заслужила.<br/>Уровень Паши: старается соответствовать.</>,<>Миша подтверждает:<br/><strong>мама заслужила.</strong></>] },
  hug: { title:'Это правильный ответ.', lines:[<>Но iPhone всё равно будет.</>,<>Миша отвечает за пионы.<br/>Паша отвечает за сюрприз.<br/>Юля отвечает только за то, чтобы быть счастливой.</>] },
}

export default function Screen11Result({ gameState }) {
  const result=RESULTS[gameState.giftChoice]||RESULTS.hug
  return <div className="screen result-screen" style={{justifyContent:'center',textAlign:'center'}}>
    <div className="final-photo"><Photo src={gameState.giftChoice==='hug'?'couple-hug.webp':'misha-peonies-v2.webp'} alt="С любовью от Паши и Миши" position="50% 43%"/></div>
    <div><div className="tag">Финал ♡</div><h1 className="screen-title" style={{marginTop:10}}>{result.title}</h1></div>
    <div className="card screen-body result-copy">{result.lines.map((line,i)=><p key={i}>{line}</p>)}</div>
    <p className="quote">С любовью,<br/>Паша и Миша ♡</p>
  </div>
}
