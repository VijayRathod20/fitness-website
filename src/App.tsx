import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Workouts from './pages/Workouts';
import Plans from './pages/Plans';
import Schedule from './pages/Schedule';
import Nutrition from './pages/Nutrition';
import Videos from './pages/Videos';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="workouts" element={<Workouts />} />
          <Route path="plans" element={<Plans />} />
          <Route path="schedule" element={<Schedule />} />
          <Route path="nutrition" element={<Nutrition />} />
          <Route path="videos" element={<Videos />} />
          {/* Add more routes as needed */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App; 