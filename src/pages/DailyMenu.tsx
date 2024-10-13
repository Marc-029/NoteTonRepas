import React from 'react';
import { useMeal } from '../contexts/MealContext';

const DailyMenu: React.FC = () => {
  const { todaysMeals } = useMeal();

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Today's Menu</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {todaysMeals.map((meal) => (
          <div key={meal.id} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">{meal.name}</h2>
            <p className="text-gray-600 mb-4">{meal.description}</p>
            <div className="flex items-center space-x-2">
              <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getRarityColor(meal.rarity)}`}>
                {meal.rarity}
              </span>
              <span className="text-sm text-gray-500">Average rating: {meal.averageRating.toFixed(1)}/5</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const getRarityColor = (rarity: string) => {
  switch (rarity.toLowerCase()) {
    case 'typical': return 'bg-gray-200 text-gray-800';
    case 'unusual': return 'bg-green-200 text-green-800';
    case 'rare': return 'bg-blue-200 text-blue-800';
    case 'epic': return 'bg-purple-200 text-purple-800';
    case 'legendary': return 'bg-yellow-200 text-yellow-800';
    case 'mythical': return 'bg-red-200 text-red-800';
    default: return 'bg-gray-200 text-gray-800';
  }
};

export default DailyMenu;