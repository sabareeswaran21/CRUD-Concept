import Index from './components/Index';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Add from './components/ADD';
import Update from './components/update';

function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Index/>}/>
    <Route path='/ADD' element={<Add/>}/>
    <Route path='/Update/:id' element={<Update/>}/>
   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
