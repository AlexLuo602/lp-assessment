'use client';
import { useState, useEffect } from 'react';

interface Artwork {
  id: number;
  name: string;
  artist: string;
  year: number;
}

const ArtworkCatalog = () => {
  //TODO: Make catalog searchable by artist or name
  const [artworks, setArtworks] = useState<Artwork[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    const fetchArtworks = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/artworks');
        if (!response.ok) {
          throw new Error('Failed to fetch artworks');
        }
        const data: Artwork[] = await response.json();
        setArtworks(data);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchArtworks();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Artwork Catalog</h1>
      <ul>
        {artworks.map((artwork) => (
          <li key={artwork.id} className="mb-6 border-b border-gray-200 pb-4">
            <strong className="text-md">{artwork.name}</strong>
            <div className="text-sm mt-2">
              {artwork.artist} - {artwork.year}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArtworkCatalog;
