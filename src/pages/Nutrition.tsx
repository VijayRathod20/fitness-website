import { useState } from 'react';

interface MealPlan {
  id: number;
  title: string;
  description: string;
  target: string;
  duration: string;
  image: string;
  dailyCalories: string;
  macros: {
    protein: string;
    carbs: string;
    fats: string;
  };
  meals: {
    breakfast: {
      description: string;
      options: string[];
      calories: string;
    };
    lunch: {
      description: string;
      options: string[];
      calories: string;
    };
    dinner: {
      description: string;
      options: string[];
      calories: string;
    };
    snacks: {
      description: string;
      options: string[];
      calories: string;
    };
  };
  tips: string[];
}

const mealPlans: MealPlan[] = [
  {
    id: 1,
    title: 'Weight Loss Plan',
    description: 'A balanced approach to sustainable weight loss with nutrient-dense foods',
    target: 'Weight Loss',
    duration: '12 weeks',
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    dailyCalories: '1,500-1,800',
    macros: {
      protein: '30%',
      carbs: '40%',
      fats: '30%'
    },
    meals: {
      breakfast: {
        description: 'High-protein breakfast to start your day',
        options: [
          'Oatmeal with berries and protein powder (350 cal)',
          'Greek yogurt with granola and honey (320 cal)',
          'Scrambled eggs with whole grain toast (380 cal)'
        ],
        calories: '350-380'
      },
      lunch: {
        description: 'Balanced meal with lean protein and complex carbs',
        options: [
          'Grilled chicken salad with olive oil dressing (450 cal)',
          'Quinoa bowl with vegetables and tofu (420 cal)',
          'Turkey wrap with whole grain bread (400 cal)'
        ],
        calories: '400-450'
      },
      dinner: {
        description: 'Light but satisfying dinner',
        options: [
          'Grilled salmon with roasted vegetables (450 cal)',
          'Lean beef stir-fry with brown rice (480 cal)',
          'Baked chicken with sweet potato (420 cal)'
        ],
        calories: '420-480'
      },
      snacks: {
        description: 'Healthy snacks to keep you satisfied',
        options: [
          'Apple with almond butter (200 cal)',
          'Protein shake with banana (250 cal)',
          'Mixed nuts and dried fruit (180 cal)'
        ],
        calories: '180-250'
      }
    },
    tips: [
      'Drink at least 2 liters of water daily',
      'Include protein in every meal',
      'Focus on whole, unprocessed foods',
      'Plan meals ahead of time',
      'Track your food intake'
    ]
  },
  {
    id: 2,
    title: 'Muscle Gain Plan',
    description: 'High-protein diet to support muscle growth and recovery',
    target: 'Muscle Gain',
    duration: '16 weeks',
    image: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    dailyCalories: '2,500-3,000',
    macros: {
      protein: '35%',
      carbs: '45%',
      fats: '20%'
    },
    meals: {
      breakfast: {
        description: 'Protein-rich breakfast to fuel your day',
        options: [
          'Protein pancakes with banana and honey (600 cal)',
          'Omelet with whole grain toast (550 cal)',
          'Protein smoothie with oats and peanut butter (580 cal)'
        ],
        calories: '550-600'
      },
      lunch: {
        description: 'High-protein meal with complex carbs',
        options: [
          'Grilled chicken with rice and vegetables (650 cal)',
          'Beef stir-fry with noodles (680 cal)',
          'Salmon with quinoa and greens (620 cal)'
        ],
        calories: '620-680'
      },
      dinner: {
        description: 'Balanced meal to support recovery',
        options: [
          'Steak with sweet potato and broccoli (700 cal)',
          'Turkey breast with brown rice (650 cal)',
          'Tofu stir-fry with noodles (630 cal)'
        ],
        calories: '630-700'
      },
      snacks: {
        description: 'Protein-rich snacks between meals',
        options: [
          'Protein bar with banana (350 cal)',
          'Greek yogurt with granola (320 cal)',
          'Cottage cheese with fruit (300 cal)'
        ],
        calories: '300-350'
      }
    },
    tips: [
      'Eat every 3-4 hours',
      'Include protein in every meal',
      'Stay hydrated',
      'Time carbs around workouts',
      'Get enough sleep for recovery'
    ]
  },
  {
    id: 3,
    title: 'Maintenance Plan',
    description: 'Balanced diet to maintain your current weight and health',
    target: 'Maintenance',
    duration: 'Ongoing',
    image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    dailyCalories: '2,000-2,200',
    macros: {
      protein: '25%',
      carbs: '50%',
      fats: '25%'
    },
    meals: {
      breakfast: {
        description: 'Balanced breakfast to start your day',
        options: [
          'Avocado toast with eggs (450 cal)',
          'Smoothie bowl with granola (420 cal)',
          'Whole grain cereal with milk (400 cal)'
        ],
        calories: '400-450'
      },
      lunch: {
        description: 'Nutritious lunch to keep you energized',
        options: [
          'Grilled chicken wrap with vegetables (500 cal)',
          'Quinoa salad with chickpeas (480 cal)',
          'Tuna sandwich with whole grain bread (520 cal)'
        ],
        calories: '480-520'
      },
      dinner: {
        description: 'Satisfying dinner to end your day',
        options: [
          'Grilled fish with roasted vegetables (550 cal)',
          'Pasta with lean meat sauce (580 cal)',
          'Stir-fried tofu with rice (520 cal)'
        ],
        calories: '520-580'
      },
      snacks: {
        description: 'Healthy snacks throughout the day',
        options: [
          'Fruit with nuts (250 cal)',
          'Yogurt with honey (220 cal)',
          'Whole grain crackers with cheese (230 cal)'
        ],
        calories: '220-250'
      }
    },
    tips: [
      'Eat a variety of foods',
      'Practice portion control',
      'Stay hydrated',
      'Include all food groups',
      'Listen to your body\'s hunger cues'
    ]
  }
];

export default function Nutrition() {
  const [selectedPlan, setSelectedPlan] = useState<MealPlan | null>(mealPlans[0]);
  const [activeMeal, setActiveMeal] = useState<'breakfast' | 'lunch' | 'dinner' | 'snacks'>('breakfast');

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Nutrition Plans</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Plans List */}
        <div className="lg:col-span-1">
          <div className="sticky top-8 max-h-[calc(100vh-8rem)] overflow-y-auto pr-6 scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-100 hover:scrollbar-thumb-blue-600">
            <div className="space-y-6 py-2 pr-2">
              {mealPlans.map(plan => (
                <div
                  key={plan.id}
                  className={`card cursor-pointer transition-all duration-200 hover:shadow-lg relative mx-1 ${
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
                  <p className="text-gray-600 dark:text-gray-400 mb-3">
                    {plan.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm">
                      {plan.dailyCalories} cal/day
                    </span>
                    <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-sm">
                      {plan.duration}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2 text-sm">
                    <span className="px-2 py-1 bg-gray-100 text-gray-800 rounded">
                      Protein: {plan.macros.protein}
                    </span>
                    <span className="px-2 py-1 bg-gray-100 text-gray-800 rounded">
                      Carbs: {plan.macros.carbs}
                    </span>
                    <span className="px-2 py-1 bg-gray-100 text-gray-800 rounded">
                      Fats: {plan.macros.fats}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Plan Details */}
        {selectedPlan && (
          <div className="lg:col-span-2">
            <div className="card">
              <div className="flex gap-4 mb-8 overflow-x-auto pb-2">
                <button
                  className={`px-4 py-2 rounded-lg transition-colors duration-200 ${
                    activeMeal === 'breakfast'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                  onClick={() => setActiveMeal('breakfast')}
                >
                  Breakfast
                </button>
                <button
                  className={`px-4 py-2 rounded-lg transition-colors duration-200 ${
                    activeMeal === 'lunch'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                  onClick={() => setActiveMeal('lunch')}
                >
                  Lunch
                </button>
                <button
                  className={`px-4 py-2 rounded-lg transition-colors duration-200 ${
                    activeMeal === 'dinner'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                  onClick={() => setActiveMeal('dinner')}
                >
                  Dinner
                </button>
                <button
                  className={`px-4 py-2 rounded-lg transition-colors duration-200 ${
                    activeMeal === 'snacks'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                  onClick={() => setActiveMeal('snacks')}
                >
                  Snacks
                </button>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-3">
                  {activeMeal.charAt(0).toUpperCase() + activeMeal.slice(1)}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {selectedPlan.meals[activeMeal].description}
                </p>
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                  <h4 className="font-medium mb-3">Meal Options:</h4>
                  <ul className="space-y-3">
                    {selectedPlan.meals[activeMeal].options.map((option, index) => (
                      <li key={index} className="text-gray-600 dark:text-gray-400">
                        {option}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4">
                    <span className="text-sm text-gray-500">
                      Calories: {selectedPlan.meals[activeMeal].calories}
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Nutrition Tips</h3>
                <ul className="list-disc list-inside space-y-3 text-gray-600 dark:text-gray-400">
                  {selectedPlan.tips.map((tip, index) => (
                    <li key={index}>{tip}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 