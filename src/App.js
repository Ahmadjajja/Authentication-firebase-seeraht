import './App.scss';
import Login from './pages/Login';
import Register from './pages/Register';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
      <Register />
      <Login />
      <ToastContainer />
    </>
  );
}

export default App;
