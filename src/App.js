import './App.css';
import Login from './js/LogIn';
import Home from './js/Home';
import { BrowserRouter , Route , Routes} from "react-router-dom"

function App() {
  return (
    <div className='background'>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login/>}/>
          <Route path="/home" element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
