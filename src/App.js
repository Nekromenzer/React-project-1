import './App.css'
import Navbar from './components/navbarCom/navbar'
import Content from './components/contentCom/content'
import Project from './components/projectCom/project'
import CardParent from './components/cardCom'

function App () {
  return (
    <div className='App'>
      <Navbar />
      <Content />
      <CardParent />
      <Project />
    </div>
  )
}

export default App
