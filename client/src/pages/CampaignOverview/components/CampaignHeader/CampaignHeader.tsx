export const CampaignHeader = ({ title = "" }: { title?: string }) => {
  return (
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-2xl font-bold">{title}</h1>
      <div>
        <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md mr-2">
          Cancel
        </button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
          Publish
        </button>
      </div>
    </div>
  );
};
