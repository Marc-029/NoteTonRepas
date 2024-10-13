import React, { useState } from 'react';
import { Star } from 'lucide-react';
import { useMeal } from '../contexts/MealContext';

const MealRating: React.FC = () => {
  const { todaysMeals, rateMeal } = useMeal();
  const [selectedMeal, setSelectedMeal] = useState('');
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedMeal && rating) {
      rateMeal(selectedMeal, rating, comment);
      // Reset form
      setSelectedMeal('');
      setRating(0);
      setComment('');
      alert('Thank you for your rating!');
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Rate Today's Meal</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="meal-select" className="block text-sm font-medium text-gray-700 mb-2">
            Select a meal
          </label>
          <select
            id="meal-select"
            value={selectedMeal}
            onChange={(e) => setSelectedMeal(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          >
            <option value="">Choose a meal</option>
            {todaysMeals.map((meal) => (
              <option key={meal.id} value={meal.id}>
                {meal.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Rate the meal
          </label>
          <div className="flex space-x-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                onClick={() => setRating(star)}
                className={`text-2xl ${
                  star <= rating ? 'text-yellow-400' : 'text-gray-300'
                }`}
              >
                <Star fill={star <= rating ? 'currentColor' : 'none'} />
              </button>
            ))}
          </div>
        </div>
        <div>
          <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-2">
            Additional comments (optional)
          </label>
          <textarea
            id="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
            rows={3}
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
          disabled={!selectedMeal || !rating}
        >
          Submit Rating
        </button>
      </form>
    </div>
  );
};

export default MealRating;