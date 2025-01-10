import { create, insert, search } from '@orama/orama';
import type { Recipe } from '../data/recipes';

export async function createSearchIndex(recipes: Recipe[]) {
  const db = await create({
    schema: {
      id: 'string',
      title: 'string',
      description: 'string',
      ingredients: 'string[]',
      instructions: 'string[]',
      category: 'string'
    }
  });

  for (const recipe of recipes) {
    await insert(db, recipe);
  }

  return db;
}

export async function searchRecipes(db: any, query: string) {
  const results = await search(db, {
    term: query,
    properties: ['title', 'description', 'ingredients', 'category']
  });

  return results;
}