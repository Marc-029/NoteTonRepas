import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Note Ton Repas</h3>
            <p className="text-sm">Aidez à améliorer les repas de la cafétéria grâce aux retours des étudiants.</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Liens Rapides</h3>
            <ul className="text-sm">
              <li><Link to="/menu" className="hover:text-blue-300">Menu du Jour</Link></li>
              <li><Link to="/noter" className="hover:text-blue-300">Noter un Repas</Link></li>
              <li><Link to="/contact" className="hover:text-blue-300">Nous Contacter</Link></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-lg font-semibold mb-2">Restez Connecté</h3>
            <p className="text-sm">Suivez-nous sur les réseaux sociaux pour les mises à jour et les annonces.</p>
            {/* Ajouter les icônes des réseaux sociaux ici */}
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Note Ton Repas. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;