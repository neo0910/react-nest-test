import { Campaign } from "../../types";

export type CampaignFormData = Omit<
  Campaign,
  "countries" | "startDate" | "endDate"
> & { countries: string; endDate: string; startDate: string };
