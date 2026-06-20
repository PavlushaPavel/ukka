import { useState } from 'react'
import { initialState, setGiftChoice } from './gameState'

import Screen01Start from './screens/Screen01Start'
import Screen02NatalMap from './screens/Screen02NatalMap'
import Screen03Forecast from './screens/Screen03Forecast'
import Screen04Dating1 from './screens/Screen04Dating1'
import Screen05Dating2 from './screens/Screen05Dating2'
import Screen06Dating3 from './screens/Screen06Dating3'
import Screen07Superlike from './screens/Screen07Superlike'
import Screen08Invite from './screens/Screen08Invite'
import Screen09Gift from './screens/Screen09Gift'
import Screen10Result from './screens/Screen10Result'

const SCREENS = [
  Screen01Start,
  Screen02NatalMap,
  Screen03Forecast,
  Screen04Dating1,
  Screen05Dating2,
  Screen06Dating3,
  Screen07Superlike,
  Screen08Invite,
  Screen09Gift,
  Screen10Result,
]

export default function App() {
  const previewScreen = Number(new URLSearchParams(window.location.search).get('screen'))
  const [currentScreen, setCurrentScreen] = useState(
    Number.isInteger(previewScreen) && previewScreen >= 0 && previewScreen < SCREENS.length ? previewScreen : 0
  )
  const [gameState, setGameState] = useState(initialState)

  const goNext = () => setCurrentScreen(s => Math.min(s + 1, SCREENS.length - 1))

  const handleGiftChoice = (choice) => {
    setGameState(s => setGiftChoice(s, choice))
    goNext()
  }

  const Screen = SCREENS[currentScreen]

  return (
    <div className="screen-app">
      <Screen
        key={currentScreen}
        gameState={gameState}
        onNext={goNext}
        onGiftChoice={handleGiftChoice}
      />
    </div>
  )
}
