import './App.css'
import Form from './Form'
import { ThemeProvider } from './store/ContextProvider'

function App() {
 
  return (
    <>
     <ThemeProvider>
      <Form/>
     </ThemeProvider>
    </>
  )
}

export default App
