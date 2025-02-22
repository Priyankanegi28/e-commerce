import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
const App =() => {
  return (
    <ChakraProvider>
      <Router>
        <Navbar/>
          <Routes>
            <Route path='/product-list' element={<ProductList/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/checkout' element={<Checkout/>}/>
            <Route path='/order-success' element={<OrderSuccess/>}/>
          </Routes>
      </Router>
    </ChakraProvider>
  );
};
export default App;