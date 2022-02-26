import './Assets/Styles/App.css';

import Login from './Pages/LogIn/LogIn';
import AppLayout from './Layouts/AppLayout';
import Dashboard from './Pages/Dashboard/Dashboard';
import User from './Pages/User/User';
import Confirm from './Pages/Confirm/Confirm';
import Accommodation from './Pages/Accommodation/Accommodation';
import Rentcar from './Pages/Rentcar/Rentcar';
import Shuttle from './Pages/Shuttle/Shuttle';
import Activity from './Pages/Activity/Activity';
import Receipt from './Pages/Receipt/Receipt';
import Manage from './Pages/Manage/Manage';

import { BrowserRouter , Route , Routes} from "react-router-dom"

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route element={<AppLayout/>}>
            <Route path='/dashboard' element = {<Dashboard/>} />
            <Route path='/user' element={<User />} />
            <Route path='/confirm-partner' element={<Confirm />} />
            <Route path='/accommodation-partner' element={<Accommodation />} />
            <Route path='/rentcar-partner' element={<Rentcar />} />
            <Route path='/shuttle-partner' element={<Shuttle />} />
            <Route path='/activity-partner' element={<Activity />} />
            <Route path='/receipt-information' element={<Receipt />} />
            <Route path='/manage-information' element={<Manage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
