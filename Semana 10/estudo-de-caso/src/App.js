import './App.css'
import BoxList from './components/BoxList'
import { BoxProvider } from './context/box-context'

function App() {
  return (
    <BoxProvider>
      <div className="app">
        <BoxList />
      </div>
    </BoxProvider>
  )
}

export default App
