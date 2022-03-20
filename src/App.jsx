import "./App.css";
import { Routes, Route } from 'react-router-dom'
import { HomePage } from "./pages/home/HomePage";
import { ProductPage } from './pages/ProductPage/ProductPage'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <HomePage /> } />
        <Route path="/products" element={<ProductPage />}/>
      </Routes>
    </div>
  );
}

export default App;
