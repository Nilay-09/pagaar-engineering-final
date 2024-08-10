
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Dashboard from './components/dashboard/Dashboard';
import ChooseJobDrawer from './components/ChoiceForScreenComponents/ChooseJobDrawer';
import MobileNavbar from './components/navbar/MobileNavbar';
import ChooseAbout from './components/About/ChooseAbout';
import ChooseManageCoins from './components/manageCoins/ChooseManageCoins';
import TransactionsList from './components/manageCoins/components/TransactionsList';
import ContactUs from './components/contactUs/ContactUs';
import PrivacyPolicy from './components/privacyPolicy/PrivacyPolicy';
import AboutUs from './components/aboutUs/AboutUs';
import Alerts from './components/Alerts/Alerts';
import { SearchProvider } from './contexts/SearchContext';
import Landing from './components/LandingPage/Landing';
import HavingIssues from './components/HavingIssue/HavingIssues';

function App() {
  return (
    <SearchProvider>
    <Router>
      <div className="relative">
        <MobileNavbar /> 
        <Routes>
          <Route path="/" element={ <Landing/>} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/jobs" element={<ChooseJobDrawer />} />
          <Route path="/alerts" element={<Alerts />} />
          <Route path="/profile" element={<ChooseAbout />} />

          <Route path="/profile/manage-coins" element={<ChooseManageCoins />} />
          <Route path="/profile/manage-coins/transactions" element={<TransactionsList />} />

          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/issues" element={<HavingIssues />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
      </div>
    </Router>
    </SearchProvider>
  );
}

export default App;
