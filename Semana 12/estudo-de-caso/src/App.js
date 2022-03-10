import './App.css'
import { Routes, Route } from 'react-router-dom'
import CarCreate from './routes/CarCreate'
import CarEdit from './routes/CarEdit'
import { ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/car" element={<CarCreate />} />
        <Route path="/car/edit/:id" element={<CarEdit />} />
      </Routes>
      <ToastContainer />
    </div>
  )
}

export default App
