
import styles from './App.module.css'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero/Hero'
import { About } from './components/About/About'
import Experiencia from './components/Experiencia/Experiencia'


function App() {
  

  return (
    <div className={styles.App}>
      Hola mundo
      <Navbar/>
      <Hero/>
      <About/>
      <Experiencia/>
    </div>
  )
}

export default App
