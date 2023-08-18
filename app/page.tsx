"use client"

import './styles/style.sass'
import ToggleMode from "./components/ToggleMode"

const Home = () => {

  return (
    <div>
      <nav>
        <h2>Mini-Translator</h2>
        <ToggleMode/>
      </nav>
    </div>
  )
}

export default Home