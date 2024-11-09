import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CalculatorContextProvider } from './components/CalculatorProvider';
import Calculator from './components/Calculator';
import Results from './components/Result';

function App() {
  return (
    <Router>
      <CalculatorContextProvider>
        <Routes>
          <Route path='/' element={<Calculator />} />
          <Route path='/result' element={<Results />} />
        </Routes>
      </CalculatorContextProvider>
    </Router>
  );
}

export default App;
