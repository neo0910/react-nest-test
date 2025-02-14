import { FetchWrapper } from "../../../../components/FetchWrapper/FetchWrapper";
import { Influencer } from "../../types";
import { InfluencersHeader } from "./components/InfluencersHeader/InfluencersHeader";
import { InfluencersTable } from "./components/InfluencersTable/InfluencersTable";
import { useFetch } from "../../../../hooks/useFetch";

export const Influencers = ({ campaignId }: { campaignId: string }) => {
  const { data, error, isLoading, trigger } = useFetch<Influencer[]>({
    url: `api/influencers/campaign/${campaignId}`,
  });

  return (
    <>
      <InfluencersHeader onSearch={trigger} />
      <FetchWrapper
        error={error}
        isDataEmpty={!data}
        isLoading={isLoading}
        placeholderMessage="No influencers"
      >
        {!!data && <InfluencersTable influencers={data} />}
      </FetchWrapper>
    </>
  );
};
