import {BrowserRouter as Router ,Routes, Route} from 'react-router-dom'
import HomePage from './Pages/HomePage'
import LoginPage from './Pages/LoginPage'
import ConsolidatedReport from './Pages/ConsolidatedReport'




function App() {
  return (
   <>
     <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} /> 
        <Route path="/login" element={<LoginPage />} /> 
        <Route path="/consolidated-report" element={<ConsolidatedReport />} /> 

      </Routes>
    </Router>
   </>
  );
}

export default App;
