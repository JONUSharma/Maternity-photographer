import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPhotographers } from '../../redux/PhotoGrapherSlice';
import PhotographerCard from '../components/PhotographerCard';
import FilterSidebar from '../components/Sidebar';
import SearchBar from '../components/SearchBar';

const CategoryListing = () => {
  const dispatch = useDispatch();
  const { data, loading } = useSelector((state) => state.photographers);

  const [filters, setFilters] = useState({ city: '', rating: '', price: '' });
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    dispatch(fetchPhotographers());
  }, [dispatch]);

  const filteredData = data.filter((p) => {
    return (
      (filters.city === '' || p.location.toLowerCase().includes(filters.city.toLowerCase())) &&
      (filters.rating === '' || p.rating >= Number(filters.rating)) &&
      (filters.price === '' || p.price <= Number(filters.price)) &&
      (searchTerm === '' ||
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.tags.join(' ').toLowerCase().includes(searchTerm.toLowerCase()))
    );
  });

  if (loading) return <p className="text-center w-100 mt-10">Loading...</p>;

  return (
    <div className="flex gap-6 p-4">
      <FilterSidebar filters={filters} setFilters={setFilters} />
      <div className="flex-1">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 h-screen gap-4">
          {filteredData.map((p) => (
            <PhotographerCard key={p.id} photographer={p} />
          ))}
        </div>       
      </div>
    </div>
  );
};

export default CategoryListing;
