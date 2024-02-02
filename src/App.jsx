
import styles from './App.module.css'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero/Hero'

function App() {
  

  return (
    <div className={styles.App}>
      Hola mundo
      <Navbar/>
      <Hero/>
    </div>
  )
}

export default App
