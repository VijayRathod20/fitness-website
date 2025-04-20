import { useState } from 'react';

interface WorkoutPlan {
  id: number;
  title: string;
  description: string;
  duration: string;
  level: string;
  schedule: {
    [key: string]: {
      exercises: Array<{
        name: string;
        sets: number;
        reps: number;
        duration?: string;
      }>;
    };
  };
  nutrition: {
    meals: Array<{
      type: string;
      suggestions: string[];
      macros: {
        protein: string;
        carbs: string;
        fats: string;
      };
    }>;
  };
}

const workoutPlans: WorkoutPlan[] = [
  {
    id: 1,
    title: 'Six Pack Abs Plan',
    description: 'Sculpt your core and reveal those abs with this targeted program',
    duration: '8 weeks',
    level: 'Intermediate',
    schedule: {
      'Monday': {
        exercises: [
          { name: 'Plank', sets: 3, reps: 1, duration: '60 seconds' },
          { name: 'Crunches', sets: 3, reps: 15 },
          { name: 'Russian Twists', sets: 3, reps: 20 },
          { name: 'Leg Raises', sets: 3, reps: 12 }
        ]
      },
      'Wednesday': {
        exercises: [
          { name: 'Mountain Climbers', sets: 3, reps: 30 },
          { name: 'Side Planks', sets: 3, reps: 1, duration: '30 seconds each side' },
          { name: 'Bicycle Crunches', sets: 3, reps: 20 },
          { name: 'V-Ups', sets: 3, reps: 12 }
        ]
      },
      'Friday': {
        exercises: [
          { name: 'Dead Bug', sets: 3, reps: 12 },
          { name: 'Hollow Hold', sets: 3, reps: 1, duration: '45 seconds' },
          { name: 'Flutter Kicks', sets: 3, reps: 30 },
          { name: 'Plank to Downward Dog', sets: 3, reps: 10 }
        ]
      }
    },
    nutrition: {
      meals: [
        {
          type: 'Breakfast',
          suggestions: [
            'Oatmeal with protein powder and berries',
            'Greek yogurt with granola and honey',
            'Egg white omelet with vegetables'
          ],
          macros: {
            protein: '30g',
            carbs: '40g',
            fats: '10g'
          }
        },
        {
          type: 'Lunch',
          suggestions: [
            'Grilled chicken salad',
            'Tuna wrap with whole grain bread',
            'Quinoa bowl with tofu'
          ],
          macros: {
            protein: '35g',
            carbs: '45g',
            fats: '15g'
          }
        },
        {
          type: 'Dinner',
          suggestions: [
            'Salmon with sweet potato',
            'Lean beef stir-fry',
            'Turkey meatballs with zucchini noodles'
          ],
          macros: {
            protein: '40g',
            carbs: '30g',
            fats: '15g'
          }
        }
      ]
    }
  },
  // Add more workout plans here
];

export default function Plans() {
  const [selectedPlan, setSelectedPlan] = useState<WorkoutPlan | null>(null);
  const [activeTab, setActiveTab] = useState<'schedule' | 'nutrition'>('schedule');

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Workout Plans</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Plans List */}
        <div className="lg:col-span-1">
          <div className="space-y-4">
            {workoutPlans.map(plan => (
              <div
                key={plan.id}
                className={`card cursor-pointer transition-all ${
                  selectedPlan?.id === plan.id ? 'ring-2 ring-blue-600' : ''
                }`}
                onClick={() => setSelectedPlan(plan)}
              >
                <h3 className="text-xl font-semibold mb-2">{plan.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  {plan.description}
                </p>
                <div className="flex flex-wrap gap-2 text-sm">
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded">
                    {plan.duration}
                  </span>
                  <span className="px-2 py-1 bg-green-100 text-green-800 rounded">
                    {plan.level}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Plan Details */}
        {selectedPlan ? (
          <div className="lg:col-span-2">
            <div className="card">
              <div className="flex gap-4 mb-6">
                <button
                  className={`px-4 py-2 rounded-lg ${
                    activeTab === 'schedule'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-700'
                  }`}
                  onClick={() => setActiveTab('schedule')}
                >
                  Schedule
                </button>
                <button
                  className={`px-4 py-2 rounded-lg ${
                    activeTab === 'nutrition'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-700'
                  }`}
                  onClick={() => setActiveTab('nutrition')}
                >
                  Nutrition
                </button>
              </div>

              {activeTab === 'schedule' ? (
                <div>
                  <h3 className="text-xl font-semibold mb-4">Weekly Schedule</h3>
                  {Object.entries(selectedPlan.schedule).map(([day, { exercises }]) => (
                    <div key={day} className="mb-6">
                      <h4 className="font-semibold text-lg mb-2">{day}</h4>
                      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                        {exercises.map((exercise, index) => (
                          <div
                            key={index}
                            className="flex items-center justify-between py-2 border-b last:border-0 border-gray-200 dark:border-gray-700"
                          >
                            <span>{exercise.name}</span>
                            <span className="text-gray-600 dark:text-gray-400">
                              {exercise.duration
                                ? exercise.duration
                                : `${exercise.sets} sets × ${exercise.reps} reps`}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div>
                  <h3 className="text-xl font-semibold mb-4">Nutrition Plan</h3>
                  {selectedPlan.nutrition.meals.map((meal, index) => (
                    <div key={index} className="mb-6">
                      <h4 className="font-semibold text-lg mb-2">{meal.type}</h4>
                      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                        <div className="mb-4">
                          <h5 className="font-medium mb-2">Suggested Meals:</h5>
                          <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
                            {meal.suggestions.map((suggestion, idx) => (
                              <li key={idx}>{suggestion}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-medium mb-2">Macronutrients:</h5>
                          <div className="flex gap-4">
                            <span className="text-blue-600">
                              Protein: {meal.macros.protein}
                            </span>
                            <span className="text-green-600">
                              Carbs: {meal.macros.carbs}
                            </span>
                            <span className="text-yellow-600">
                              Fats: {meal.macros.fats}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="lg:col-span-2">
            <div className="card flex items-center justify-center text-gray-500">
              Select a plan to view details
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 