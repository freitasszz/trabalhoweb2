import Link from 'next/link';

export default function CountryCard({ country }: { country: any }) {
  return (
    <Link href={`/${country.name.common.toLowerCase()}`}>
      <div className="p-4 border rounded shadow hover:scale-105 transition">
        <img src={country.flags.svg} alt={country.name.common} className="w-full h-40 object-cover" />
        <h2 className="mt-2 font-bold">{country.name.common}</h2>
        <p>Região: {country.region}</p>
      </div>
    </Link>
  );
}
