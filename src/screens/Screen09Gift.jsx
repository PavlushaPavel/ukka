import Button from '../components/Button'
import { GiftPhones } from '../components/Decor'

export default function Screen09Gift({ onGiftChoice }) {
  return <div className="screen screen-compact">
    <div style={{textAlign:'center'}}><div className="tag">Финальный выбор героини</div><h1 className="screen-title" style={{marginTop:8}}>Юля, подарок выбираешь ты</h1></div>
    <div className="card"><GiftPhones/><div className="divider"/><p className="screen-note" style={{textAlign:'center',marginTop:12}}>Официальный сертификат на iPhone 17 или iPhone 18 — на выбор Юли.</p></div>
    <div className="screen-body"><p>Можно выбрать сразу. Можно подумать. Можно сначала обнять нас.</p><p className="quote" style={{marginTop:12}}>Но вообще лучше сначала обнять нас.</p></div>
    <div className="screen-cta"><Button onClick={()=>onGiftChoice('iphone17')}>Выбираю iPhone 17</Button><Button onClick={()=>onGiftChoice('iphone18')} variant="secondary">Выбираю iPhone 18</Button><Button onClick={()=>onGiftChoice('hug')} variant="ghost">Сначала обниму вас</Button></div>
  </div>
}
