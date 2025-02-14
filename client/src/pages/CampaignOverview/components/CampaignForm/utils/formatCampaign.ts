import { Campaign } from "../../../types";

import { CampaignFormData } from "../types";

export const formatCampaign = (campaign: Campaign): CampaignFormData => ({
  ...campaign,
  countries: campaign.countries.map(({ name }) => name).join(", "),
  endDate: new Date(campaign.endDate).toLocaleDateString(),
  startDate: new Date(campaign.startDate).toLocaleDateString(),
});
