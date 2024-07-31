// src/App.tsx

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Dashboard from './components/dashboard/Dashboard';
import ChooseJobDrawer from './components/ChoiceForScreenComponents/ChooseJobDrawer';
import MobileNavbar from './components/navbar/MobileNavbar';
import ChooseAbout from './components/About/ChooseAbout';
import ChooseManageCoins from './components/manageCoins/ChooseManageCoins';
import TransactionsList from './components/manageCoins/components/TransactionsList';
import ScrollToTop from './components/GenericComponents/ScrollToTop';
import ContactUs from './components/contactUs/ContactUs';
import PrivacyPolicy from './components/privacyPolicy/PrivacyPolicy';
import AboutUs from './components/aboutUs/AboutUs';
import Alerts from './components/Alerts/Alerts';

function App() {
  return (
    <Router>
      <ScrollToTop/>
      <div className="relative">
        <MobileNavbar /> 
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/jobs" element={<ChooseJobDrawer />} />
          <Route path="/about" element={<ChooseAbout />} />
          <Route path="/about/manage-coins" element={<ChooseManageCoins />} />
          <Route path="/about/manage-coins/transactions" element={<TransactionsList />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/alerts" element={<Alerts />} />
          <Route path="/" element={
            <div className="p-4 text-center">
              <h1 className="text-2xl font-bold">Home Page</h1>
              <p>Welcome to the home page!</p>
            </div>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
