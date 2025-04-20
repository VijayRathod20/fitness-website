import React from 'react';

const Nutrition: React.FC = () => {
  return (
    <div className="container py-8">
      <h1 className="section-title">Nutrition Plans</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card">
          <h2 className="text-2xl font-semibold mb-4">Weight Loss</h2>
          <ul className="space-y-2 text-gray-600 dark:text-gray-300">
            <li>• 1,500-1,800 calories/day</li>
            <li>• High protein meals</li>
            <li>• Low glycemic foods</li>
            <li>• Weekly meal plans</li>
          </ul>
          <button className="btn-primary mt-4">View Plan</button>
        </div>
        <div className="card">
          <h2 className="text-2xl font-semibold mb-4">Muscle Gain</h2>
          <ul className="space-y-2 text-gray-600 dark:text-gray-300">
            <li>• 2,500-3,000 calories/day</li>
            <li>• Protein-rich diet</li>
            <li>• Complex carbohydrates</li>
            <li>• Supplement guide</li>
          </ul>
          <button className="btn-primary mt-4">View Plan</button>
        </div>
        <div className="card">
          <h2 className="text-2xl font-semibold mb-4">Maintenance</h2>
          <ul className="space-y-2 text-gray-600 dark:text-gray-300">
            <li>• Balanced macros</li>
            <li>• Flexible meal options</li>
            <li>• Healthy snacks</li>
            <li>• Portion control guide</li>
          </ul>
          <button className="btn-primary mt-4">View Plan</button>
        </div>
      </div>
    </div>
  );
};

export default Nutrition; 