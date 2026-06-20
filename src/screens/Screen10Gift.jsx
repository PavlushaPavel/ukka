import Button from '../components/Button'
import { GiftPhones } from '../components/Decor'

export default function Screen10Gift({ onGiftChoice }) {
  return <div className="screen screen-compact">
    <div style={{textAlign:'center'}}>
      <div className="tag">Финальный сюрприз открыт 🎁</div>
      <h1 className="screen-title" style={{marginTop:8}}>Юля, у тебя есть официальный сертификат героини на подарок.</h1>
    </div>
    <div className="card gift-certificate">
      <p className="screen-note" style={{textAlign:'center'}}>Он даёт право выбрать:</p>
      <GiftPhones />
      <div className="divider"/>
      <div className="certificate-terms"><p>Срок действия: до исполнения желания.</p><p>Ответственный за исполнение: Паша.</p><p>Моральная поддержка: Миша.</p><p>Цветочное сопровождение: пионы.</p></div>
    </div>
    <div className="screen-body" style={{textAlign:'center'}}>
      <p>Можно выбрать сразу.<br/>Можно подумать.<br/>Можно сначала обнять Пашу.<br/>Можно сначала обнять Мишу.</p>
      <p className="quote">Но вообще лучше сначала обнять нас.<br/>А потом выбрать iPhone.</p>
    </div>
    <div className="screen-cta"><Button onClick={()=>onGiftChoice('iphone17')}>Выбираю iPhone 17</Button><Button onClick={()=>onGiftChoice('iphone18')} variant="secondary">Выбираю iPhone 18</Button><Button onClick={()=>onGiftChoice('hug')} variant="ghost">Сначала обниму вас</Button></div>
  </div>
}
