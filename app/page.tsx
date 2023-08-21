"use client"
import Form from './components/Form'
import './styles/style.sass'
import ToggleMode from "./components/ToggleMode"
import TranslateForm from './components/NewDropdown'

const Home = () => {

  return (
    <div className='content'>
      <nav>
        <h2>Mini-Translator</h2>
        <ToggleMode/>
      </nav>
      <main>
      <Form></Form>
      <TranslateForm/>
      </main>
    </div>
  )
}

export default Home