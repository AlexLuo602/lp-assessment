import { NextResponse } from 'next/server';

const mockArtworks = [
  { id: 1, name: 'Starry Night', artist: 'Vincent van Gogh', year: 1889 },
  { id: 2, name: 'Mona Lisa', artist: 'Leonardo da Vinci', year: 1503 },
  { id: 3, name: 'The Persistence of Memory', artist: 'Salvador Dalí', year: 1931 },
  { id: 4, name: 'The Scream', artist: 'Edvard Munch', year: 1893 },
  { id: 5, name: 'Girl with a Pearl Earring', artist: 'Johannes Vermeer', year: 1665 }
];

export function GET() {
  return NextResponse.json(mockArtworks);
}
