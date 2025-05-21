type Params = {
  params: {
    country: string;
  };
};

export default async function CountryDetails({ params }: Params) {
  const res = await fetch(`https://restcountries.com/v3.1/name/${params.country}`);
  const data = await res.json();
  const country = data[0];

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-4">{country.name.official}</h1>
      <img
        src={country.flags.svg}
        alt={`Bandeira de ${country.name.common}`}
        className="w-64 h-auto mb-4 rounded shadow"
      />
      <p><strong>Nome nativo:</strong> {Object.values(country.name.nativeName || {})[0]?.common}</p>
      <p><strong>Capital:</strong> {country.capital?.[0]}</p>
      <p><strong>População:</strong> {country.population.toLocaleString()}</p>
      <p><strong>Idiomas:</strong> {Object.values(country.languages || {}).join(', ')}</p>
      <p><strong>Moedas:</strong> {Object.values(country.currencies || {}).map((c: any) => c.name).join(', ')}</p>
      <p><strong>Região:</strong> {country.region} - {country.subregion}</p>

      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-2">Localização no mapa</h2>
        <iframe
          src={`https://maps.google.com/maps?q=${country.latlng[0]},${country.latlng[1]}&z=4&output=embed`}
          className="w-full h-64 border rounded"
          loading="lazy"
        />
      </div>
    </main>
  );
}
