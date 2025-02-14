import { Campaign } from "./pages/CampaignOverview/types";
import { CampaignOverview } from "./pages/CampaignOverview/CampaignOverview";
import { Content } from "./components/Content/Content";
import { FetchWrapper } from "./components/FetchWrapper/FetchWrapper";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { useFetch } from "./hooks/useFetch";

export const App = () => {
  const { data, error, isLoading } = useFetch<Campaign[]>({
    url: "api/campaigns",
  });

  return (
    <>
      <Header />
      <Content>
        <FetchWrapper
          error={error}
          isDataEmpty={!data}
          isLoading={isLoading}
          placeholderMessage="No campaigns"
        >
          {!!data && <CampaignOverview campaignId={data![0]._id} />}
        </FetchWrapper>
      </Content>
      <Footer />
    </>
  );
};
