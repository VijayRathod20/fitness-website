import { Link } from 'react-router-dom';

const features = [
  {
    title: 'Personalized Workout Plans',
    description: 'Get customized workout plans tailored to your fitness goals and experience level.',
    icon: '💪',
  },
  {
    title: 'Expert Nutrition Guidance',
    description: 'Learn how to fuel your body with expert-crafted meal plans and nutrition advice.',
    icon: '🥗',
  },
  {
    title: 'Video Library',
    description: 'Access our extensive library of workout videos with proper form demonstrations.',
    icon: '🎥',
  },
  {
    title: 'Progress Tracking',
    description: 'Track your fitness journey with our easy-to-use scheduling and progress tools.',
    icon: '📈',
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-blue-600 text-white">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative container mx-auto px-4 py-32">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">
              Transform Your Body, Transform Your Life
            </h1>
            <p className="text-xl mb-8">
              Start your fitness journey today with personalized workout plans,
              expert guidance, and a supportive community.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/plans"
                className="btn-primary bg-white text-blue-600 hover:bg-gray-100"
              >
                Start Your Journey
              </Link>
              <Link
                to="/workouts"
                className="btn-secondary bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600"
              >
                Explore Workouts
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Everything You Need to Succeed
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="card hover:shadow-lg transition-shadow duration-200"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">
            Ready to Start Your Fitness Journey?
          </h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto">
            Join thousands of others who have transformed their lives with our
            comprehensive fitness programs and expert guidance.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              to="/plans"
              className="btn-primary bg-white text-blue-600 hover:bg-gray-100"
            >
              View Workout Plans
            </Link>
            <Link
              to="/schedule"
              className="btn-secondary bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600"
            >
              Schedule a Workout
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 