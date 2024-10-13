import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Award, Users } from 'lucide-react';

const Accueil: React.FC = () => {
  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4">Bienvenue sur Note Ton Repas</h1>
        <p className="text-xl mb-8">Aidez à améliorer les repas de votre cafétéria en partageant vos avis !</p>
        <Link to="/noter" className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300">
          Noter le Repas d'Aujourd'hui
        </Link>
      </section>

      <section className="grid md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <Star className="mx-auto mb-4 text-yellow-500" size={48} />
          <h2 className="text-xl font-semibold mb-2">Noter les Repas</h2>
          <p>Partagez votre opinion sur les plats de la cafétéria et aidez à améliorer le menu.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <Award className="mx-auto mb-4 text-purple-500" size={48} />
          <h2 className="text-xl font-semibold mb-2">Gagner des Récompenses</h2>
          <p>Gagnez des points de fidélité et débloquez des succès en notant plus de repas.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <Users className="mx-auto mb-4 text-green-500" size={48} />
          <h2 className="text-xl font-semibold mb-2">Rejoindre des Factions</h2>
          <p>Faites équipe avec vos amis et rivalisez sur le classement pour la première place.</p>
        </div>
      </section>

      <section className="bg-gray-200 p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Comment ça marche</h2>
        <ol className="list-decimal list-inside space-y-2">
          <li>Sélectionnez les repas que vous avez mangés dans le menu du jour</li>
          <li>Notez chaque plat et donnez votre avis (facultatif)</li>
          <li>Gagnez des points et débloquez des succès</li>
          <li>Consultez le classement et rivalisez avec d'autres factions</li>
          <li>Aidez à améliorer le menu de la cafétéria pour tous !</li>
        </ol>
      </section>
    </div>
  );
};

export default Accueil;