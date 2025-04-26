import { useState, useEffect } from 'react';

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
    videoUrl: 'https://www.youtube.com/embed/ml6cT4AZdqI',
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
    videoUrl: 'https://www.youtube.com/embed/VaoV1PrYft4',
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
    videoUrl: 'https://www.youtube.com/embed/8ZtInClXe1Q',
    instructions: [
      'Warm up shoulders and arms',
      '3 sets of 12 reps per exercise',
      'Rest 60-90 seconds between sets',
      'Focus on proper form'
    ]
  },
  {
    id: 4,
    title: 'Yoga Flow',
    description: 'Complete yoga session for flexibility and relaxation',
    category: 'Yoga',
    duration: '45 minutes',
    equipment: ['Yoga Mat'],
    videoUrl: 'https://www.youtube.com/embed/UBMk30rjy0o',
    instructions: [
      'Start with breathing exercises',
      'Follow the instructor\'s flow',
      'Hold each pose for 30-60 seconds',
      'End with meditation'
    ]
  },
  {
    id: 5,
    title: 'Cardio Blast',
    description: 'High-energy cardio workout to burn calories',
    category: 'Cardio',
    duration: '30 minutes',
    equipment: ['None'],
    videoUrl: 'https://www.youtube.com/embed/2pLT-olgUJs',
    instructions: [
      'Start with a 5-minute warm-up',
      'Alternate between high and low intensity',
      'Keep heart rate elevated',
      'Cool down and stretch'
    ]
  },
  {
    id: 6,
    title: 'Full Body Strength',
    description: 'Complete strength training for all muscle groups',
    category: 'Full Body',
    duration: '45 minutes',
    equipment: ['Dumbbells', 'Resistance Bands'],
    videoUrl: 'https://www.youtube.com/embed/g_tea8ZNk5A',
    instructions: [
      'Warm up with dynamic stretches',
      'Focus on compound movements',
      '3 sets of 10-12 reps',
      'Rest 60 seconds between sets'
    ]
  }
];

const categories = ['All', 'Strength', 'Cardio', 'HIIT', 'Yoga', 'Abs', 'Full Body'];

export default function Workouts() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedWorkout, setSelectedWorkout] = useState<Workout | null>(workouts[0]); // Set first workout as default

  const filteredWorkouts = selectedCategory === 'All'
    ? workouts
    : workouts.filter(workout => workout.category === selectedCategory);

  // Update selected workout when category changes
  useEffect(() => {
    if (selectedCategory !== 'All') {
      const firstWorkoutInCategory = workouts.find(workout => workout.category === selectedCategory);
      if (firstWorkoutInCategory) {
        setSelectedWorkout(firstWorkoutInCategory);
      }
    } else {
      setSelectedWorkout(workouts[0]);
    }
  }, [selectedCategory]);

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
              className={`px-4 py-2 rounded-full transition-colors duration-200 ${
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
                className={`card cursor-pointer transition-all duration-200 hover:shadow-lg ${
                  selectedWorkout?.id === workout.id 
                    ? 'ring-2 ring-blue-600 bg-blue-50' 
                    : 'hover:bg-gray-50'
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
        {selectedWorkout && (
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
        )}
      </div>
    </div>
  );
} 