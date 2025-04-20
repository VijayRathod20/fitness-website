import { useState } from 'react';

interface Workout {
  id: number;
  title: string;
  description: string;
  category: string;
  duration: string;
  equipment: string[];
  videoUrl: string;
  instructions: string[];
}

const workouts: Workout[] = [
  {
    id: 1,
    title: 'Full Body HIIT',
    description: 'High-intensity interval training targeting all major muscle groups',
    category: 'HIIT',
    duration: '30 minutes',
    equipment: ['None'],
    videoUrl: 'https://www.youtube.com/embed/example1',
    instructions: [
      'Warm up with light cardio for 5 minutes',
      'Perform each exercise for 45 seconds',
      'Rest for 15 seconds between exercises',
      'Complete 3 rounds of the circuit'
    ]
  },
  {
    id: 2,
    title: 'Core Crusher',
    description: 'Intense ab workout for a stronger core',
    category: 'Abs',
    duration: '20 minutes',
    equipment: ['Mat'],
    videoUrl: 'https://www.youtube.com/embed/example2',
    instructions: [
      'Start with a plank hold for 1 minute',
      'Perform each exercise for 30 seconds',
      'Minimal rest between exercises',
      'Complete 2 rounds of the circuit'
    ]
  },
  {
    id: 3,
    title: 'Upper Body Strength',
    description: 'Build upper body strength and muscle',
    category: 'Strength',
    duration: '45 minutes',
    equipment: ['Dumbbells', 'Bench'],
    videoUrl: 'https://www.youtube.com/embed/example3',
    instructions: [
      'Warm up shoulders and arms',
      '3 sets of 12 reps per exercise',
      'Rest 60-90 seconds between sets',
      'Focus on proper form'
    ]
  }
];

const categories = ['All', 'Strength', 'Cardio', 'HIIT', 'Yoga', 'Abs', 'Full Body'];

export default function Workouts() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedWorkout, setSelectedWorkout] = useState<Workout | null>(null);

  const filteredWorkouts = selectedCategory === 'All'
    ? workouts
    : workouts.filter(workout => workout.category === selectedCategory);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Category Filter */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Workout Categories</h2>
        <div className="flex flex-wrap gap-2">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Workout List */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Available Workouts</h2>
          <div className="space-y-4">
            {filteredWorkouts.map(workout => (
              <div
                key={workout.id}
                className={`card cursor-pointer ${
                  selectedWorkout?.id === workout.id ? 'ring-2 ring-blue-600' : ''
                }`}
                onClick={() => setSelectedWorkout(workout)}
              >
                <h3 className="text-xl font-semibold mb-2">{workout.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  {workout.description}
                </p>
                <div className="flex flex-wrap gap-2 text-sm">
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded">
                    {workout.duration}
                  </span>
                  <span className="px-2 py-1 bg-green-100 text-green-800 rounded">
                    {workout.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Workout Details */}
        {selectedWorkout ? (
          <div className="card">
            <h2 className="text-2xl font-bold mb-4">{selectedWorkout.title}</h2>
            <div className="aspect-w-16 aspect-h-9 mb-4">
              <iframe
                src={selectedWorkout.videoUrl}
                className="w-full h-full rounded"
                title={selectedWorkout.title}
                allowFullScreen
              />
            </div>
            <div className="mb-4">
              <h3 className="font-semibold mb-2">Required Equipment:</h3>
              <div className="flex flex-wrap gap-2">
                {selectedWorkout.equipment.map(item => (
                  <span
                    key={item}
                    className="px-2 py-1 bg-gray-100 text-gray-800 rounded"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Instructions:</h3>
              <ol className="list-decimal list-inside space-y-2">
                {selectedWorkout.instructions.map((instruction, index) => (
                  <li key={index} className="text-gray-700 dark:text-gray-300">
                    {instruction}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        ) : (
          <div className="card flex items-center justify-center text-gray-500">
            Select a workout to view details
          </div>
        )}
      </div>
    </div>
  );
} 