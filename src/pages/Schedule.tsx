import React from 'react';

const Schedule: React.FC = () => {
  return (
    <div className="container py-8">
      <h1 className="section-title">Training Schedule</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="card">
          <h2 className="text-2xl font-semibold mb-4">Weekly Schedule</h2>
          <div className="space-y-4">
            <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <h3 className="font-medium">Monday</h3>
              <p className="text-gray-600 dark:text-gray-300">Upper Body Strength</p>
              <p className="text-sm text-gray-500">9:00 AM - 10:30 AM</p>
            </div>
            <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <h3 className="font-medium">Wednesday</h3>
              <p className="text-gray-600 dark:text-gray-300">Lower Body & Core</p>
              <p className="text-sm text-gray-500">9:00 AM - 10:30 AM</p>
            </div>
            <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <h3 className="font-medium">Friday</h3>
              <p className="text-gray-600 dark:text-gray-300">Full Body HIIT</p>
              <p className="text-sm text-gray-500">9:00 AM - 10:30 AM</p>
            </div>
          </div>
        </div>
        <div className="card">
          <h2 className="text-2xl font-semibold mb-4">Book a Session</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Schedule your personal training sessions with our certified trainers.
          </p>
          <button className="btn-primary">Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default Schedule; 