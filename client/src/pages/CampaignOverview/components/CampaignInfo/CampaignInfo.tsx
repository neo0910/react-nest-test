export const CampaignInfo = () => {
  return (
    <div className="flex flex-col">
      <h2 className="text-lg font-bold mb-4">Coupons</h2>
      <div className="py-6 px-8 rounded-md bg-cyan-50">
        <p>Coupons: 100</p>
      </div>
      <h2 className="text-lg font-bold my-4">Influencers</h2>
      <div className="py-6 px-8 rounded-md bg-cyan-50">
        <p className="mb-2">
          Influencers: <strong>143</strong>
        </p>
        <p className="py-1 px-2 rounded-md bg-white inline-block mr-1 mb-1">
          USA, Spain, France, UK
        </p>
        <p className="py-1 px-2 rounded-md bg-white inline-block mr-1 mb-1">
          Followers {">"} 500k
        </p>
        <p className="py-1 px-2 rounded-md bg-white inline-block mr-1 mb-1">
          Status: verified
        </p>
      </div>
    </div>
  );
};
