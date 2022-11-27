import './App.css';
import NavBar from './component/navBar';
import Login from './pages/login';
import Register from './pages/register';

function App() {
  return (
    <div className="">
      <NavBar />
      {/* <Login /> */}
      <Register />
    </div>
  );
}

export default App;
