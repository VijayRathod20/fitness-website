import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

interface TrainingSession {
  id: number;
  day: string;
  title: string;
  description: string;
  time: string;
  trainer: string;
  maxParticipants: number;
  currentParticipants: number;
}

const trainingSessions: TrainingSession[] = [
  {
    id: 1,
    day: 'Monday',
    title: 'Upper Body Strength',
    description: 'Focus on building upper body strength with compound movements',
    time: '9:00 AM - 10:30 AM',
    trainer: 'John Smith',
    maxParticipants: 10,
    currentParticipants: 4
  },
  {
    id: 2,
    day: 'Wednesday',
    title: 'Lower Body & Core',
    description: 'Target lower body muscles and core stability',
    time: '9:00 AM - 10:30 AM',
    trainer: 'Sarah Johnson',
    maxParticipants: 10,
    currentParticipants: 6
  },
  {
    id: 3,
    day: 'Friday',
    title: 'Full Body HIIT',
    description: 'High-intensity interval training for full body workout',
    time: '9:00 AM - 10:30 AM',
    trainer: 'Mike Davis',
    maxParticipants: 12,
    currentParticipants: 8
  }
];

const Schedule: React.FC = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [selectedSession, setSelectedSession] = useState<TrainingSession | null>(null);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const handleBookNow = (session: TrainingSession) => {
    if (!user) {
      navigate('/login');
      return;
    }
    setSelectedSession(session);
    setShowBookingModal(true);
  };

  const handleConfirmBooking = async () => {
    if (!selectedSession) return;

    try {
      // Here you would typically make an API call to book the session
      // For now, we'll simulate a successful booking
      await new Promise(resolve => setTimeout(resolve, 1000));
      setBookingSuccess(true);
      setShowBookingModal(false);
      
      // Reset success message after 3 seconds
      setTimeout(() => {
        setBookingSuccess(false);
      }, 3000);
    } catch (error) {
      console.error('Booking failed:', error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Training Schedule</h1>

      {bookingSuccess && (
        <div className="fixed top-4 right-4 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
          Booking successful! Check your email for confirmation.
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {trainingSessions.map((session) => (
          <div
            key={session.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-xl font-semibold">{session.title}</h2>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                  {session.day}
                </span>
              </div>
              
              <p className="text-gray-600 mb-4">{session.description}</p>
              
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {session.time}
                </div>
                <div className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  Trainer: {session.trainer}
                </div>
                <div className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  {session.currentParticipants}/{session.maxParticipants} participants
                </div>
              </div>

              <button
                onClick={() => handleBookNow(session)}
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300"
                disabled={session.currentParticipants >= session.maxParticipants}
              >
                {session.currentParticipants >= session.maxParticipants
                  ? 'Session Full'
                  : 'Book Now'}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Booking Modal */}
      {showBookingModal && selectedSession && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h2 className="text-2xl font-semibold mb-4">Confirm Booking</h2>
            <div className="space-y-4 mb-6">
              <div>
                <span className="font-medium">Session:</span> {selectedSession.title}
              </div>
              <div>
                <span className="font-medium">Day:</span> {selectedSession.day}
              </div>
              <div>
                <span className="font-medium">Time:</span> {selectedSession.time}
              </div>
              <div>
                <span className="font-medium">Trainer:</span> {selectedSession.trainer}
              </div>
            </div>
            <div className="flex justify-end gap-4">
              <button
                onClick={() => setShowBookingModal(false)}
                className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmBooking}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Confirm Booking
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Schedule; 