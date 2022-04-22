import AppRouter from './routers/AppRouter';
import ThemeContext from '../src/context/ThemeContext';
import { CartProvider } from '../src/context/CartContext';
import { UserProvider } from '../src/context/UserContext';

import './App.css';

const LanusTechApp = () => (
  <div className='App'>
    <UserProvider>
      <CartProvider>
        <ThemeContext dark>
          <AppRouter />
        </ThemeContext>
      </CartProvider>
    </UserProvider>
  </div>
);

export default LanusTechApp;
