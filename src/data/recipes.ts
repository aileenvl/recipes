export interface Recipe {
  id: string;
  title: string;
  description: string;
  ingredients: string[];
  instructions: string[];
  cookingTime: number;
  servings: number;
  category: string;
}

export const recipes: Recipe[] = [
  {
    id: '1',
    title: 'Classic Spaghetti Carbonara',
    description: 'A creamy Italian pasta dish with eggs, cheese, pancetta, and black pepper.',
    ingredients: [
      '400g spaghetti',
      '200g pancetta or guanciale',
      '4 large eggs',
      '100g Pecorino Romano',
      '100g Parmigiano Reggiano',
      'Black pepper',
      'Salt'
    ],
    instructions: [
      'Bring a large pot of salted water to boil',
      'Cook spaghetti according to package instructions',
      'While pasta cooks, cut pancetta into small cubes',
      'In a bowl, whisk eggs and grated cheeses',
      'Cook pancetta until crispy',
      'Combine hot pasta with egg mixture and pancetta',
      'Season with black pepper and serve immediately'
    ],
    cookingTime: 30,
    servings: 4,
    category: 'Pasta'
  },
  {
    id: '2',
    title: 'Chicken Tikka Masala',
    description: 'A rich and creamy Indian curry with tender chicken pieces.',
    ingredients: [
      '800g chicken breast',
      '400ml heavy cream',
      '400g tomato sauce',
      'Garam masala',
      'Turmeric',
      'Ginger paste',
      'Garlic paste'
    ],
    instructions: [
      'Marinate chicken in yogurt and spices',
      'Grill chicken until charred',
      'Prepare sauce with tomatoes and cream',
      'Combine chicken with sauce',
      'Simmer until thick',
      'Garnish with cilantro'
    ],
    cookingTime: 45,
    servings: 6,
    category: 'Curry'
  }
];