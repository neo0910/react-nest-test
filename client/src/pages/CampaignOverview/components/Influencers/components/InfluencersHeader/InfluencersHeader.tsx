export const InfluencersHeader = () => {
  return (
    <div className="flex justify-between items-center mt-8 mb-6">
      <h1 className="text-2xl font-bold">Influencers</h1>
      <input
        type="text"
        placeholder="Search Influencers"
        className="bg-white shadow appearance-none border rounded-md py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-md"
      />
    </div>
  );
};
