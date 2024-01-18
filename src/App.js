import logo from './logo.svg';
import './App.css';
import FormProduct from './components/FormProduct';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FormEditProduct from './components/FormEditProduct';



function App() {

  return (
    <BrowserRouter>
      <div>
        {/* HTML  */}
        <h1>Form CRUD</h1>

          <Routes>
            <Route path='/' element={<FormProduct />}/>
            <Route path='/edit/:id' element={<FormEditProduct/>} />


            

          </Routes>

        
      </div>
    </BrowserRouter>
  );
}

export default App;
