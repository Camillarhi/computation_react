import { Toaster } from 'react-hot-toast';
import './App.css';
import AppRoutes from './utils/routes';

function App() {
  return (
    <>
      <AppRoutes />
      <Toaster position="top-center"
        reverseOrder={true} />
    </>
  );
}

export default App;
