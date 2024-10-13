import React from 'react';
import { Link } from 'react-router-dom';
import { Utensils } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const Header: React.FC = () => {
  const { user, logout } = useAuth();

  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <Utensils size={24} />
          <span className="text-xl font-bold">Note Ton Repas</span>
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/menu" className="hover:text-blue-200">Menu du Jour</Link></li>
            <li><Link to="/noter" className="hover:text-blue-200">Noter un Repas</Link></li>
            {user ? (
              <>
                <li><Link to="/favoris" className="hover:text-blue-200">Favoris</Link></li>
                <li><Link to="/historique" className="hover:text-blue-200">Historique</Link></li>
                <li><button onClick={logout} className="hover:text-blue-200">Déconnexion</button></li>
              </>
            ) : (
              <li><Link to="/login" className="hover:text-blue-200">Connexion</Link></li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;