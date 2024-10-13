import React, { createContext, useContext, useState, useEffect } from 'react';

interface Meal {
  id: string;
  name: string;
  description: string;
  rarity: string;
  averageRating: number;
}

interface MealContextType {
  todaysMeals: Meal[];
  rateMeal: (mealId: string, rating: number, comment: string) => void;
}

const MealContext = createContext<MealContextType | undefined>(undefined);

export const MealProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [todaysMeals, setTodaysMeals] = useState<Meal[]>([]);

  useEffect(() => {
    // Récupérer les repas du jour (données fictives pour l'instant)
    const mockMeals: Meal[] = [
      { id: '1', name: 'Spaghetti Bolognaise', description: 'Plat de pâtes italien classique', rarity: 'typical', averageRating: 4.2 },
      { id: '2', name: 'Sauté de Légumes Végétarien', description: 'Assortiment de légumes dans une sauce savoureuse', rarity: 'unusual', averageRating: 3.8 },
      { id: '3', name: 'Saumon Grillé', description: 'Saumon frais avec citron et herbes', rarity: 'rare', averageRating: 4.5 },
    ];
    setTodaysMeals(mockMeals);
  }, []);

  const rateMeal = (mealId: string, rating: number, comment: string) => {
    // Implémenter la logique pour soumettre la note à un service backend
    console.log(`Repas ${mealId} noté ${rating} étoiles. Commentaire : ${comment}`);
    // Mettre à jour la note moyenne (ceci devrait être fait sur le serveur dans une vraie application)
    setTodaysMeals(meals =>
      meals.map(meal =>
        meal.id === mealId
          ? { ...meal, averageRating: (meal.averageRating + rating) / 2 }
          : meal
      )
    );
  };

  return (
    <MealContext.Provider value={{ todaysMeals, rateMeal }}>
      {children}
    </MealContext.Provider>
  );
};

export const useMeal = () => {
  const context = useContext(MealContext);
  if (context === undefined) {
    throw new Error("useMeal doit être utilisé à l'intérieur d'un MealProvider");
  }
  return context;
};