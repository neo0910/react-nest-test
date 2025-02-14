import { CampaignForm } from "./components/CampaignForm/CampaignForm";
import { CampaignHeader } from "./components/CampaignHeader/CampaignHeader";
import { CampaignInfo } from "./components/CampaignInfo/CampaignInfo";
import { Influencers } from "./components/Influencers/Influencers";

export const CampaignOverview = () => {
  return (
    <div className="py-6 px-30">
      <CampaignHeader />
      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2 col-start-1">
          <CampaignForm />
        </div>
        <div className="col-span-1 col-start-3">
          <CampaignInfo />
        </div>
      </div>
      <Influencers />
    </div>
  );
};
