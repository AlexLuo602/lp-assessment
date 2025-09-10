'use client';

const PlaceBidForm = () => {
  // TODO: integrate submit endpoint 
  return (
    <form className="p-6 w-full">
      <h2 className="text-2xl font-bold mb-4">Bid on Artwork</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium">Name</label>
        <input
          type="text"
          placeholder="Enter artwork name"
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium">Artist</label>
        <input
          type="text"
          placeholder="Enter artist name"
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium">Bid Amount</label>
        <input
          type="text"
          placeholder="Enter year"
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
        />
      </div>
      <button
        type="submit"
        className="mt-4 p-2 bg-blue-500 text-white rounded-md"
      >
        Place bid
      </button>
    </form>
  );
};

export default PlaceBidForm;
