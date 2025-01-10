import { useState } from 'react';

export default function SearchBar() {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const searchEvent = new CustomEvent('search', { 
      detail: query,
      bubbles: true,
      composed: true
    });
    window.dispatchEvent(searchEvent);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-xl">
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search recipes..."
          className="w-full px-4 py-2 text-gray-900 border rounded-lg focus:outline-none focus:border-purple-500"
        />
        <button
          type="submit"
          className="absolute right-2 top-1/2 transform -translate-y-1/2 px-4 py-1 bg-purple-600 text-white rounded-md hover:bg-purple-700"
        >
          Search
        </button>
      </div>
    </form>
  );
}