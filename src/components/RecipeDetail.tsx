import React, { useState, useEffect } from 'react';
import { OramaClient } from '@oramacloud/client';

const RecipeDetail = () => {
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const urlParams = new URLSearchParams(window.location.search);
        const name = urlParams.get('name');
        const id = window.location.pathname.split('/').pop();

        if (!id || !name) {
          window.location.href = '/';
          return;
        }

        const endpoint = import.meta.env.PUBLIC_ORAMA_ENDPOINT?.trim();
        const apiKey = import.meta.env.PUBLIC_ORAMA_API_KEY?.trim();

        const client = new OramaClient({
          endpoint,
          api_key: apiKey
        });

        const searchResults = await client.search({
          term: name,
          mode: 'fulltext',
          limit: 10
        });

        const foundRecipe = searchResults.hits.find(hit => hit.document.id === id)?.document;

        if (!foundRecipe) {
          window.location.href = '/';
          return;
        }

        setRecipe(foundRecipe);
      } catch (error) {
        console.error('Error:', error);
        window.location.href = '/';
      } finally {
        setLoading(false);
      }
    };

    fetchRecipe();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-xl text-gray-600">Loading recipe...</p>
      </div>
    );
  }

  if (!recipe) {
    return null;
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto mb-6">
        <a href="/" className="inline-flex items-center text-purple-600 hover:text-purple-700">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Back to Home
        </a>
      </div>

      <article className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
        <h1 className="text-4xl font-bold mb-4">{recipe.name}</h1>
        <p className="text-gray-600 mb-6">{recipe.description}</p>

        <div className="flex gap-4 mb-6">
          <div className="bg-purple-100 px-4 py-2 rounded-md">
            <span className="font-semibold">🕒 Cooking Time:</span> {recipe.timing.totalTime} minutes
          </div>
          <div className="bg-purple-100 px-4 py-2 rounded-md">
            <span className="font-semibold">👥 Servings:</span> {recipe.servings}
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Ingredients</h2>
          <ul className="list-disc list-inside space-y-2">
            {recipe.ingredients.parts.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Instructions</h2>
          <ol className="list-decimal list-inside space-y-4">
            {recipe.instructions.map((step, index) => (
              <li key={index} className="pl-2">{step}</li>
            ))}
          </ol>
        </div>
      </article>
    </main>
  );
};

export default RecipeDetail;