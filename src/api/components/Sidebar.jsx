import React from 'react';

const FilterSidebar = ({ filters, setFilters }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  return (
    <div className="p-4 border rounded shadow w-64 space-y-4">
      <h2 className="text-xl font-bold">Filters</h2>

      <div>
        <label className="block font-medium">City</label>
        <input
          type="text"
          name="city"
          value={filters.city}
          onChange={handleInputChange}
          className="border p-2 w-full rounded"
          placeholder="e.g. Bengaluru"
        />
      </div>

      <div>
        <label className="block font-medium">Min Rating</label>
        <input
          type="number"
          name="rating"
          value={filters.rating}
          onChange={handleInputChange}
          className="border p-2 w-full rounded"
          placeholder="e.g. 4"
          min="0"
          max="5"
        />
      </div>

      <div>
        <label className="block font-medium">Max Price (₹)</label>
        <input
          type="number"
          name="price"
          value={filters.price}
          onChange={handleInputChange}
          className="border p-2 w-full rounded"
          placeholder="e.g. 15000"
        />
      </div>
    </div>
  );
};

export default FilterSidebar;
