import { FetchWrapper } from "../../components/FetchWrapper/FetchWrapper";
import { useFetch } from "../../hooks/useFetch";

import { CampaignForm } from "./components/CampaignForm/CampaignForm";
import { CampaignHeader } from "./components/CampaignHeader/CampaignHeader";
import { CampaignInfo } from "./components/CampaignInfo/CampaignInfo";
import { Influencers } from "./components/Influencers/Influencers";
import { Campaign } from "./types";

export const CampaignOverview = ({ campaignId }: { campaignId: string }) => {
  const { data, error, isLoading } = useFetch<Campaign>({
    url: `api/campaigns/${campaignId}`,
  });

  return (
    <FetchWrapper
      error={error}
      isDataEmpty={!data}
      isLoading={isLoading}
      placeholderMessage="The campaign does not exist"
    >
      {!!data && (
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
          <Influencers campaignId={campaignId} />
        </div>
      )}
    </FetchWrapper>
  );
};
