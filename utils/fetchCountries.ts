export const fetchCountriesByName = async (name: string) => {
  const res = await fetch(`https://restcountries.com/v3.1/name/${name}`);
  if (!res.ok) throw new Error('Erro ao buscar país');
  return res.json();
};

export const fetchCountriesByRegion = async (region: string) => {
  const res = await fetch(`https://restcountries.com/v3.1/region/${region}`);
  if (!res.ok) throw new Error('Erro ao buscar região');
  return res.json();
};
