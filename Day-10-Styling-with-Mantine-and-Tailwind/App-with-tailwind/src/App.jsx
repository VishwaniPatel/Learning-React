import './App.css'
import Header from './Header'
import MainContent from './MainContent'
import Sidebar from './Sidebar'

function App() {

  return (
    <>
     <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Header />
        <MainContent />
      </div>
    </div>
    </>
  )
}

export default App
