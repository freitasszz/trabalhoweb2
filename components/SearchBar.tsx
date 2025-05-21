'use client';
import { useState } from 'react';

export default function SearchBar({ onSearch }: { onSearch: (query: string) => void }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(input);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        placeholder="Buscar país..."
        className="p-2 border rounded w-full"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </form>
  );
}
