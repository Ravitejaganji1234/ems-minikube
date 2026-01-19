import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EmployeeDashboard from './components/Employee/EmployeeDashboard';

function App() {

  return (
     <div>
       <BrowserRouter>
        <Routes>
          <Route path='/' element={<EmployeeDashboard />} />
        </Routes>
      </BrowserRouter>
     </div>
  )
}

export default App
