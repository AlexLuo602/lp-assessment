import ArtworkCatalog from "@/components/artworkCatalog";
import PlaceBidForm from "@/components/placeBidForm";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gray-600">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <ArtworkCatalog/>
      </div>
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <PlaceBidForm/>
      </div>
    </main>
  );
}
