import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Award, Users } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Rate Your Meal</h1>
        <p className="text-xl mb-8">Help improve your cafeteria meals by sharing your feedback!</p>
        <Link to="/rate" className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300">
          Rate Today's Meal
        </Link>
      </section>

      <section className="grid md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <Star className="mx-auto mb-4 text-yellow-500" size={48} />
          <h2 className="text-xl font-semibold mb-2">Rate Meals</h2>
          <p>Share your opinion on today's cafeteria offerings and help improve the menu.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <Award className="mx-auto mb-4 text-purple-500" size={48} />
          <h2 className="text-xl font-semibold mb-2">Earn Rewards</h2>
          <p>Gain loyalty points and unlock achievements as you rate more meals.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <Users className="mx-auto mb-4 text-green-500" size={48} />
          <h2 className="text-xl font-semibold mb-2">Join Factions</h2>
          <p>Team up with friends and compete on the leaderboard for the top spot.</p>
        </div>
      </section>

      <section className="bg-gray-200 p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">How It Works</h2>
        <ol className="list-decimal list-inside space-y-2">
          <li>Select the meals you ate from the daily menu</li>
          <li>Rate each dish and provide optional feedback</li>
          <li>Earn points and unlock achievements</li>
          <li>Check the leaderboard and compete with other factions</li>
          <li>Help improve the cafeteria menu for everyone!</li>
        </ol>
      </section>
    </div>
  );
};

export default Home;