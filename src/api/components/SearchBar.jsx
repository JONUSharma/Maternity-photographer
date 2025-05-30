import React from 'react';

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="flex items-center gap-2 mb-4 sticky top-0">
      <input
        type="text"
        placeholder="Search photographers..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border p-2 flex-1 rounded shadow"
      />
      <button className="bg-blue-500 text-white px-4 py-2 rounded">🔍</button>
    </div>
  );
};

export default SearchBar;
