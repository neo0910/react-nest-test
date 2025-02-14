import { CampaignOverview } from "./pages/CampaignOverview/CampaignOverview";
import { Content } from "./components/Content/Content";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";

export const App = () => (
  <>
    <Header />
    <Content>
      <CampaignOverview />
    </Content>
    <Footer />
  </>
);
