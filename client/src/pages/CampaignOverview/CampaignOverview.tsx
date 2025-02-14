import { useFetch } from "../../hooks/useFetch";

import { CampaignForm } from "./components/CampaignForm/CampaignForm";
import { CampaignHeader } from "./components/CampaignHeader/CampaignHeader";
import { CampaignInfo } from "./components/CampaignInfo/CampaignInfo";
import { Influencers } from "./components/Influencers/Influencers";
import { CAMPAIGN_ID } from "./constants";
import { Campaign } from "./types";

export const CampaignOverview = () => {
  const { data, error, isLoading } = useFetch<Campaign>({
    url: `api/campaigns/${CAMPAIGN_ID}`,
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-full">
        <p className="text-2xl text-gray-600">Loading</p>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="py-6 px-30">
        <p className="text-2xl text-gray-600">
          {(error?.message as string) || "The campaign does not exist"}
        </p>
      </div>
    );
  }

  return (
    <div className="py-6 px-30">
      <CampaignHeader title={data.title} />
      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2 col-start-1">
          <CampaignForm initialData={data} />
        </div>
        <div className="col-span-1 col-start-3">
          <CampaignInfo
            countries={data.countries}
            coupons={data.coupons}
            followers={data.followers}
            influencers={data.influencers?.length}
            status={data.status}
          />
        </div>
      </div>
      <Influencers />
    </div>
  );
};
