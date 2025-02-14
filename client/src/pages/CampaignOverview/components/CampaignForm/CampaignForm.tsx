export const CampaignForm = () => {
  return (
    <form className="grid grid-cols-2 gap-4 bg-white px-8 py-4 rounded-xl shadow-xl">
      <div className="col-span-2 col-start-1">
        <h2 className="text-lg font-bold mb-2">Campaign overview</h2>
      </div>
      <div>
        <div className="mb-4">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="campaign-type"
            type="text"
            placeholder="Campaign type"
          />
          <label
            className="block text-gray-500 my-2 text-sm text-sm"
            htmlFor="campaign-type"
          >
            Campaign type
          </label>
        </div>
        <div className="mb-4">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="starts"
            type="text"
            placeholder="Starts"
          />
          <label className="block text-gray-500 my-2 text-sm" htmlFor="starts">
            Starts
          </label>
        </div>
        <div className="mb-4">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="title"
            type="text"
            placeholder="Title"
          />
          <label className="block text-gray-500 my-2 text-sm" htmlFor="title">
            Title
          </label>
        </div>
        <div className="mb-4">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="referral-rewards"
            type="text"
            placeholder="% of referral rewards"
          />
          <label
            className="block text-gray-500 my-2 text-sm"
            htmlFor="referral-rewards"
          >
            % of referral rewards
          </label>
        </div>
      </div>
      <div>
        <div className="mb-4">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="region-country"
            type="text"
            placeholder="Region or country"
          />
          <label
            className="block text-gray-500 my-2 text-sm"
            htmlFor="region-country"
          >
            Campaign region or country
          </label>
        </div>
        <div className="mb-4">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="ends"
            type="text"
            placeholder="Ends"
          />
          <label className="block text-gray-500 my-2 text-sm" htmlFor="ends">
            Ends
          </label>
        </div>
        <div className="mb-4">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="link"
            type="text"
            placeholder="Link"
          />
          <label className="block text-gray-500 my-2 text-sm" htmlFor="link">
            Link
          </label>
        </div>
        <div className="mb-4">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="assign-coupons"
            type="text"
            placeholder="Assign coupons"
          />
          <label
            className="block text-gray-500 my-2 text-sm"
            htmlFor="assign-coupons"
          >
            Assign coupons
          </label>
        </div>
      </div>
    </form>
  );
};
