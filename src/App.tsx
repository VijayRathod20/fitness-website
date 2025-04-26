import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Workouts from './pages/Workouts';
import Plans from './pages/Plans';
import Schedule from './pages/Schedule';
import Nutrition from './pages/Nutrition';
import Videos from './pages/Videos';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="workouts" element={<Workouts />} />
        <Route path="plans" element={<Plans />} />
        <Route path="schedule" element={<Schedule />} />
        <Route path="nutrition" element={<Nutrition />} />
        <Route path="videos" element={<Videos />} />
        <Route path="profile" element={<Profile />} />
        {/* Add more routes as needed */}
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />
    </Routes>
  );
}

export default App; 