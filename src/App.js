import { Route, Routes } from 'react-router-dom';
import './App.css';
import './static/Styles/main.css';

// Components

import Dashboard from "./components/Main/Dashboard/Dashboard";
import ProductBar from "./components/Main/ProductBar/ProductBar";

function App() {
  return (
    <div className="App">
      <div className='container'>
        <Routes>
          <Route path='/' element={<ProductBar />} />
        </Routes>
        <Routes>
          <Route path='/' element={<Dashboard />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
