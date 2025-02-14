import { useState } from "react";

import { Campaign } from "../../types";

import { CampaignFormData } from "./types";
import { formatCampaign } from "./utils/formatCampaign";

export const CampaignForm = ({ initialData }: { initialData: Campaign }) => {
  const [campaign, setCampaign] = useState<CampaignFormData>(
    formatCampaign(initialData)
  );

  const onChange = (key: keyof CampaignFormData, value: string) => {
    setCampaign((prev) => ({ ...prev, [key]: value }));
  };

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
            onChange={(e) => onChange("type", e.target.value)}
            placeholder="Campaign type"
            type="text"
            value={campaign.type}
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
            onChange={(e) => onChange("startDate", e.target.value)}
            placeholder="Starts"
            type="text"
            value={campaign.startDate}
          />
          <label className="block text-gray-500 my-2 text-sm" htmlFor="starts">
            Starts
          </label>
        </div>
        <div className="mb-4">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="title"
            onChange={(e) => onChange("title", e.target.value)}
            placeholder="Title"
            type="text"
            value={campaign.title}
          />
          <label className="block text-gray-500 my-2 text-sm" htmlFor="title">
            Title
          </label>
        </div>
        <div className="mb-4">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="referral-rewards"
            onChange={(e) => onChange("referralReward", e.target.value)}
            placeholder="% of referral rewards"
            type="text"
            value={campaign.referralReward}
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
            onChange={(e) => onChange("countries", e.target.value)}
            placeholder="Region or country"
            type="text"
            value={campaign.countries}
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
            onChange={(e) => onChange("endDate", e.target.value)}
            placeholder="Ends"
            type="text"
            value={campaign.endDate}
          />
          <label className="block text-gray-500 my-2 text-sm" htmlFor="ends">
            Ends
          </label>
        </div>
        <div className="mb-4">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="link"
            onChange={(e) => onChange("website", e.target.value)}
            placeholder="Link"
            type="text"
            value={campaign.website}
          />
          <label className="block text-gray-500 my-2 text-sm" htmlFor="link">
            Link
          </label>
        </div>
        <div className="mb-4">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="assign-coupons"
            onChange={(e) => onChange("coupons", e.target.value)}
            placeholder="Assign coupons"
            type="text"
            value={campaign.coupons}
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
