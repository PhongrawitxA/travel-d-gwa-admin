import './Assets/Styles/App.css';

import React from 'react';

import Login from './Pages/LogIn/LogIn';
import AppLayout from './Layouts/AppLayout';
import Dashboard from './Pages/Dashboard/Dashboard';

import Customers from './Pages/Customers/Customer';
import { CustomerInfo } from './Pages/Customers/Info/CustomerInfo';

import ConfirmAccommodation from './Pages/Confirm/Confirm-accommodation/ConfirmAccommodation'
import { ConfirmAccommodationInfo_1 } from './Pages/Confirm/Confirm-accommodation/ConfirmAccommodationInfo_1'
import { ConfirmAccommodationInfo_2 } from './Pages/Confirm/Confirm-accommodation/ConfirmAccommodationInfo_2'
import { ConfirmAccommodationInfo_3 } from './Pages/Confirm/Confirm-accommodation/ConfirmAccommodationInfo_3'

import ConfirmRentcar from './Pages/Confirm/Confirm-rentcar/ConfirmRentcar'
import { ConfirmRentcarInfo_1 } from './Pages/Confirm/Confirm-rentcar/ConfirmRentcarInfo_1'

import ConfirmShuttle from './Pages/Confirm/Confirm-shuttle/ConfirmShuttle'
import { ConfirmShuttleInfo_1 } from './Pages/Confirm/Confirm-shuttle/ConfirmShuttleInfo_1'

import ConfirmActivity from './Pages/Confirm/Confirm-activity/ConfirmActivity'
import { ConfirmActivityInfo_1 } from './Pages/Confirm/Confirm-activity/ConfirmActivityInfo_1'

import Accommodation from './Pages/Accommodation/Accommodation';
import { AccommodationInfo_1 } from './Pages/Accommodation/AccommodationInfo_1';
import { AccommodationInfo_2 } from './Pages/Accommodation/AccommodationInfo_2';
import { AccommodationInfo_3 } from './Pages/Accommodation/AccommodationInfo_3';
import { AccommodationEdit_1 } from './Pages/Accommodation/AccommodationEditInfo'

import Rentcar from './Pages/Rentcar/Rentcar';
import { RentcarInfo_1 } from './Pages/Rentcar/RentcarInfo_1'
import { RentcarEditInfo } from './Pages/Rentcar/RentcarEditInfo'

import Shuttle from './Pages/Shuttle/Shuttle';
import { ShuttleInfo_1 } from './Pages/Shuttle/ShuttleInfo_1'

import Activity from './Pages/Activity/Activity';
import { ActivityInfo_1 } from './Pages/Activity/ActivityInfo_1'

import ReceiptAccommodation from './Pages/Receipt/Receipt-accommodation/ReceiptAccommodation';
import ReceiptRentcar from './Pages/Receipt/Receipt-rentcar/ReceiptRentcar';
import ReceiptShuttle from './Pages/Receipt/Receipt-shuttle/ReceiptShuttle';
import ReceiptActivity from './Pages/Receipt/Receipt-activity/ReceiptActivity';

import Manage from './Pages/Manage/Manage';

import { BrowserRouter , Route , Routes} from "react-router-dom";
import SampleContextProvider from './contexts/SampleContext';

function App() {
  return (
    <SampleContextProvider>
      <div className='App'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route element={<AppLayout/>}>
              <Route path='/dashboard' element = {<Dashboard/>} />

              <Route path='/customer' element={<Customers />} />
              <Route path='/customer/info/:id' element={<CustomerInfo />} />

              <Route path='/confirm-partner/accommodation' element={<ConfirmAccommodation />} />
              <Route path='/confirm-partner/accommodation/info-1/:id' element={<ConfirmAccommodationInfo_1 />} />
              <Route path='/confirm-partner/accommodation/info-2/:id' element={<ConfirmAccommodationInfo_2 />} />
              <Route path='/confirm-partner/accommodation/info-3/:id' element={<ConfirmAccommodationInfo_3 />} />

              <Route path='/confirm-partner/rentcar' element={<ConfirmRentcar />} />
              <Route path='/confirm-partner/rentcar/info-1/:id' element={<ConfirmRentcarInfo_1 />} />
            
              <Route path='/confirm-partner/shuttle' element={<ConfirmShuttle />} />
              <Route path='/confirm-partner/shuttle/info-1/:id' element={<ConfirmShuttleInfo_1 />} />

              <Route path='/confirm-partner/activity' element={<ConfirmActivity />} />
              <Route path='/confirm-partner/activity/info-1/:id' element={<ConfirmActivityInfo_1 />} />

              <Route path='/accommodation-partner' element={<Accommodation />} />
              <Route path='/accommodation-partner/info-1/:id' element={<AccommodationInfo_1 />} />
              <Route path='/accommodation-partner/info-2/:id' element={<AccommodationInfo_2 />} />
              <Route path='/accommodation-partner/info-3/:id' element={<AccommodationInfo_3 />} />
              <Route path='/accommodation-partner/edit/info-1/:id' element={<AccommodationEdit_1 />} />

              <Route path='/rentcar-partner' element={<Rentcar />} />
              <Route path='/rentcar-partner/info-1/:id' element={<RentcarInfo_1 />} />
              <Route path='/rentcar-partner/edit/info/:id' element={<RentcarEditInfo />} />

              <Route path='/shuttle-partner' element={<Shuttle />} />
              <Route path='/shuttle-partner/info-1/:id' element={<ShuttleInfo_1 />} />


              <Route path='/activity-partner' element={<Activity />} />
              <Route path='/activity-partner/info-1/:id' element={<ActivityInfo_1 />} />

              <Route path='/receipt-information/accommodation' element={<ReceiptAccommodation />} />
              <Route path='/receipt-information/rentcar' element={<ReceiptRentcar />} />
              <Route path='/receipt-information/shuttle' element={<ReceiptShuttle/>} />
              <Route path='/receipt-information/activity' element={<ReceiptActivity />} />
              
              <Route path='/manage-information' element={<Manage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </SampleContextProvider>
  );
}

export default App;
