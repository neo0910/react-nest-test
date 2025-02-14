import { memo } from "react";
import { formatNumber } from "../../../../../../utils/formatNumber";
import { Influencer } from "../../../../types";

export const InfluencersTable = memo<{
  influencers: Influencer[];
}>(({ influencers }) => {
  return (
    <div className="rounded-md overflow-hidden">
      <table className="w-full table-auto">
        <thead>
          <tr className="bg-gray-50 text-gray-600 font-bold">
            <td className="py-3 px-4">
              <input type="checkbox" />
            </td>
            <th className="py-3 px-4 text-left">UID</th>
            <th className="py-3 px-4 text-left">Influencer</th>
            <th className="py-3 px-4 text-left">Country</th>
            <th className="py-3 px-4 text-left">Followers</th>
            <th className="py-3 px-4 text-left">Revenue</th>
            <th className="py-3 px-4 text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          {influencers.map((influencer) => (
            <tr className="border-b border-gray-200" key={influencer._id}>
              <td className="py-4 px-4 text-gray-600">
                <input type="checkbox" />
              </td>
              <td className="py-4 px-4 text-gray-600">{influencer._id}</td>
              <td className="py-4 px-4 flex items-center">
                <img
                  alt="Influencer Avatar"
                  className="rounded-full mr-2 w-8"
                  src={influencer.avatar}
                />
                <span className="font-bold">{influencer.name}</span>
              </td>
              <td className="py-4 px-4 text-gray-600">
                {influencer.country.name}
              </td>
              <td className="py-4 px-4 text-gray-600">
                {formatNumber(influencer.followers)}
              </td>
              <td className="py-4 px-4 text-gray-600">{`${
                influencer.currency
              }${influencer.revenue?.toLocaleString()}`}</td>
              <td className="py-4 px-4 text-green-500 font-bold capitalize">
                {influencer.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
});
