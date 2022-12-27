import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Test from './Componentes/Test';

function App() {
  return (
    <div className="App">
      { /* Coloque suas rotas aqui! */ }
      <Router>
        <Routes>
          <Route path='/test' element={ <Test></Test> }></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
