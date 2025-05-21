'use client';

import { useEffect, useState } from 'react';
import SearchBar from '@/components/SearchBar';
import CountryCard from '@/components/CountryCard';
import { fetchCountriesByName } from '@/utils/fetchCountries';

export default function Home() {
  const [countries, setCountries] = useState([]);
  const [query, setQuery] = useState('brazil');

  useEffect(() => {
    fetchCountriesByName(query).then(setCountries).catch(console.error);
  }, [query]);

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Explore Países do Mundo</h1>
      <SearchBar onSearch={setQuery} />
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {countries.map((country: any) => (
          <CountryCard key={country.cca3} country={country} />
        ))}
      </div>
    </main>
  );
}

