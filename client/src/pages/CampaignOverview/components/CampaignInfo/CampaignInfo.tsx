import { CampaignStatus, Country } from "../../types";
import { formatNumber } from "../../../../utils/formatNumber";

export const CampaignInfo = ({
  countries,
  coupons,
  followers,
  influencers = 0,
  status = CampaignStatus.Draft,
}: {
  countries: Country[];
  coupons: number;
  followers: number;
  influencers?: number;
  status?: CampaignStatus;
}) => {
  return (
    <div className="flex flex-col">
      <h2 className="text-lg font-bold mb-4">Coupons</h2>
      <div className="py-6 px-8 rounded-md bg-cyan-50">
        <p>Coupons: {coupons}</p>
      </div>
      <h2 className="text-lg font-bold my-4">Influencers</h2>
      <div className="py-6 px-8 rounded-md bg-cyan-50">
        <p className="mb-2">
          Influencers: <strong>{influencers}</strong>
        </p>
        <p className="py-1 px-2 rounded-md bg-white inline-block mr-1 mb-1">
          {countries.map(({ name }) => name).join(", ")}
        </p>
        <p className="py-1 px-2 rounded-md bg-white inline-block mr-1 mb-1">
          Followers {">"} {formatNumber(followers)}
        </p>
        <p className="py-1 px-2 rounded-md bg-white inline-block mr-1 mb-1 capitalize">
          Status: {status}
        </p>
      </div>
    </div>
  );
};
