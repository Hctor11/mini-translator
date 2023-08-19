"use client"
import Form from './components/Form'
import './styles/style.sass'
import ToggleMode from "./components/ToggleMode"
import DropdownLang from './components/Dropdown'
import NewDropdown from './components/NewDropdown'

const Home = () => {

  return (
    <div>
      <nav>
        <h2>Mini-Translator</h2>
        <ToggleMode/>
      </nav>
      <main>
      <Form></Form>
      <DropdownLang></DropdownLang>
      <NewDropdown/>
      </main>
    </div>
  )
}

export default Home