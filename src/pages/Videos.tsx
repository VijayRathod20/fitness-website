import React from 'react';

const Videos: React.FC = () => {
  return (
    <div className="container py-8">
      <h1 className="section-title">Workout Videos</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="card">
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              className="w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/ml6cT4AZdqI"
              title="Full Body HIIT Workout"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <h2 className="text-xl font-semibold mb-2 mt-4">Full Body HIIT</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">30-minute high-intensity interval training</p>
          <a 
            href="https://www.youtube.com/watch?v=ml6cT4AZdqI" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-primary inline-block"
          >
            Watch on YouTube
          </a>
        </div>

        <div className="card">
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              className="w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/VaoV1PrYft4"
              title="Yoga Flow"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <h2 className="text-xl font-semibold mb-2 mt-4">Yoga Flow</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">45-minute relaxing yoga session</p>
          <a 
            href="https://www.youtube.com/watch?v=VaoV1PrYft4" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-primary inline-block"
          >
            Watch on YouTube
          </a>
        </div>

        <div className="card">
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              className="w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/8ZtInClXe1Q"
              title="Strength Training"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <h2 className="text-xl font-semibold mb-2 mt-4">Strength Training</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">45-minute full body strength workout</p>
          <a 
            href="https://www.youtube.com/watch?v=8ZtInClXe1Q" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-primary inline-block"
          >
            Watch on YouTube
          </a>
        </div>

        <div className="card">
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              className="w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/UBMk30rjy0o"
              title="Cardio Workout"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <h2 className="text-xl font-semibold mb-2 mt-4">Cardio Workout</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">30-minute cardio session</p>
          <a 
            href="https://www.youtube.com/watch?v=UBMk30rjy0o" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-primary inline-block"
          >
            Watch on YouTube
          </a>
        </div>

        <div className="card">
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              className="w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/2pLT-olgUJs"
              title="Pilates Workout"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <h2 className="text-xl font-semibold mb-2 mt-4">Pilates</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">45-minute pilates session</p>
          <a 
            href="https://www.youtube.com/watch?v=2pLT-olgUJs" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-primary inline-block"
          >
            Watch on YouTube
          </a>
        </div>

        <div className="card">
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              className="w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/g_tea8ZNk5A"
              title="Stretching Routine"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <h2 className="text-xl font-semibold mb-2 mt-4">Stretching</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">15-minute full body stretching routine</p>
          <a 
            href="https://www.youtube.com/watch?v=g_tea8ZNk5A" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-primary inline-block"
          >
            Watch on YouTube
          </a>
        </div>
      </div>
    </div>
  );
};

export default Videos; 