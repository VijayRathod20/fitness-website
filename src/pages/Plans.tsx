import { useState } from 'react';

interface WorkoutPlan {
  id: number;
  title: string;
  description: string;
  duration: string;
  level: string;
  image: string;
  goals: string[];
  schedule: {
    [key: string]: {
      exercises: Array<{
        name: string;
        sets: number;
        reps?: number;
        duration?: string;
        rest?: string;
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
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    goals: ['Core Strength', 'Ab Definition', 'Improved Posture'],
    schedule: {
      'Monday': {
        exercises: [
          { name: 'Plank', sets: 3, reps: 1, duration: '60 seconds', rest: '30 seconds' },
          { name: 'Crunches', sets: 3, reps: 15, rest: '30 seconds' },
          { name: 'Russian Twists', sets: 3, reps: 20, rest: '30 seconds' },
          { name: 'Leg Raises', sets: 3, reps: 12, rest: '30 seconds' }
        ]
      },
      'Wednesday': {
        exercises: [
          { name: 'Mountain Climbers', sets: 3, reps: 30, rest: '30 seconds' },
          { name: 'Side Planks', sets: 3, reps: 1, duration: '30 seconds each side', rest: '30 seconds' },
          { name: 'Bicycle Crunches', sets: 3, reps: 20, rest: '30 seconds' },
          { name: 'V-Ups', sets: 3, reps: 12, rest: '30 seconds' }
        ]
      },
      'Friday': {
        exercises: [
          { name: 'Dead Bug', sets: 3, reps: 12, rest: '30 seconds' },
          { name: 'Hollow Hold', sets: 3, reps: 1, duration: '45 seconds', rest: '30 seconds' },
          { name: 'Flutter Kicks', sets: 3, reps: 30, rest: '30 seconds' },
          { name: 'Plank to Downward Dog', sets: 3, reps: 10, rest: '30 seconds' }
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
  {
    id: 2,
    title: 'Muscle Building Program',
    description: 'Gain muscle mass and strength with this comprehensive training plan',
    duration: '12 weeks',
    level: 'Advanced',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    goals: ['Muscle Growth', 'Strength Gain', 'Improved Performance'],
    schedule: {
      'Monday': {
        exercises: [
          { name: 'Bench Press', sets: 4, reps: 8, rest: '90 seconds' },
          { name: 'Incline Dumbbell Press', sets: 3, reps: 10, rest: '60 seconds' },
          { name: 'Tricep Dips', sets: 3, reps: 12, rest: '60 seconds' },
          { name: 'Bicep Curls', sets: 3, reps: 12, rest: '60 seconds' }
        ]
      },
      'Wednesday': {
        exercises: [
          { name: 'Squats', sets: 4, reps: 8, rest: '90 seconds' },
          { name: 'Deadlifts', sets: 4, reps: 6, rest: '120 seconds' },
          { name: 'Lunges', sets: 3, reps: 12, rest: '60 seconds' },
          { name: 'Calf Raises', sets: 3, reps: 15, rest: '60 seconds' }
        ]
      },
      'Friday': {
        exercises: [
          { name: 'Pull-ups', sets: 4, reps: 8, rest: '90 seconds' },
          { name: 'Bent-over Rows', sets: 3, reps: 10, rest: '60 seconds' },
          { name: 'Shoulder Press', sets: 3, reps: 10, rest: '60 seconds' },
          { name: 'Lateral Raises', sets: 3, reps: 12, rest: '60 seconds' }
        ]
      }
    },
    nutrition: {
      meals: [
        {
          type: 'Breakfast',
          suggestions: [
            'Protein pancakes with banana',
            'Scrambled eggs with whole grain toast',
            'Protein smoothie with oats'
          ],
          macros: {
            protein: '40g',
            carbs: '60g',
            fats: '15g'
          }
        },
        {
          type: 'Lunch',
          suggestions: [
            'Grilled chicken with rice and vegetables',
            'Beef stir-fry with noodles',
            'Salmon with quinoa and greens'
          ],
          macros: {
            protein: '50g',
            carbs: '70g',
            fats: '20g'
          }
        },
        {
          type: 'Dinner',
          suggestions: [
            'Steak with sweet potato and broccoli',
            'Turkey breast with brown rice',
            'Tofu stir-fry with noodles'
          ],
          macros: {
            protein: '45g',
            carbs: '50g',
            fats: '20g'
          }
        }
      ]
    }
  },
  {
    id: 3,
    title: 'Weight Loss Journey',
    description: 'Lose weight and improve overall fitness with this balanced program',
    duration: '16 weeks',
    level: 'Beginner',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    goals: ['Fat Loss', 'Improved Endurance', 'Better Health'],
    schedule: {
      'Monday': {
        exercises: [
          { name: 'Treadmill Run', sets: 1, duration: '30 minutes', rest: 'None' },
          { name: 'Bodyweight Circuit', sets: 3, reps: 15, rest: '60 seconds' }
        ]
      },
      'Wednesday': {
        exercises: [
          { name: 'Cycling', sets: 1, duration: '45 minutes', rest: 'None' },
          { name: 'Core Workout', sets: 3, reps: 12, rest: '45 seconds' }
        ]
      },
      'Friday': {
        exercises: [
          { name: 'Swimming', sets: 1, duration: '30 minutes', rest: 'None' },
          { name: 'Full Body Stretch', sets: 1, duration: '20 minutes', rest: 'None' }
        ]
      }
    },
    nutrition: {
      meals: [
        {
          type: 'Breakfast',
          suggestions: [
            'Oatmeal with berries',
            'Greek yogurt with nuts',
            'Whole grain toast with avocado'
          ],
          macros: {
            protein: '25g',
            carbs: '30g',
            fats: '10g'
          }
        },
        {
          type: 'Lunch',
          suggestions: [
            'Grilled chicken salad',
            'Vegetable soup with whole grain bread',
            'Quinoa bowl with vegetables'
          ],
          macros: {
            protein: '30g',
            carbs: '35g',
            fats: '10g'
          }
        },
        {
          type: 'Dinner',
          suggestions: [
            'Grilled fish with vegetables',
            'Turkey meatballs with zucchini noodles',
            'Stir-fried tofu with vegetables'
          ],
          macros: {
            protein: '35g',
            carbs: '25g',
            fats: '10g'
          }
        }
      ]
    }
  }
];

export default function Plans() {
  const [selectedPlan, setSelectedPlan] = useState<WorkoutPlan | null>(workoutPlans[0]);
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
                className={`card cursor-pointer transition-all duration-200 hover:shadow-lg ${
                  selectedPlan?.id === plan.id 
                    ? 'ring-2 ring-blue-600 bg-blue-50' 
                    : 'hover:bg-gray-50'
                }`}
                onClick={() => setSelectedPlan(plan)}
              >
                <div className="aspect-w-16 aspect-h-9 mb-4 rounded-lg overflow-hidden">
                  <img
                    src={plan.image}
                    alt={plan.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{plan.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  {plan.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-2">
                  {plan.goals.map((goal, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-100 text-gray-800 rounded text-sm"
                    >
                      {goal}
                    </span>
                  ))}
                </div>
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
        {selectedPlan && (
          <div className="lg:col-span-2">
            <div className="card">
              <div className="flex gap-4 mb-6">
                <button
                  className={`px-4 py-2 rounded-lg transition-colors duration-200 ${
                    activeTab === 'schedule'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                  onClick={() => setActiveTab('schedule')}
                >
                  Schedule
                </button>
                <button
                  className={`px-4 py-2 rounded-lg transition-colors duration-200 ${
                    activeTab === 'nutrition'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
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
                            <div>
                              <span className="font-medium">{exercise.name}</span>
                              {exercise.rest && (
                                <span className="text-sm text-gray-500 ml-2">
                                  Rest: {exercise.rest}
                                </span>
                              )}
                            </div>
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
        )}
      </div>
    </div>
  );
} 