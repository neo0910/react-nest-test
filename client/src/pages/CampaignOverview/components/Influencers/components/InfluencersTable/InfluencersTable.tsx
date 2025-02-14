export const InfluencersTable = () => {
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
          <tr className="border-b border-gray-200">
            <td className="py-4 px-4 text-gray-600">
              <input type="checkbox" />
            </td>
            <td className="py-4 px-4 text-gray-600">ID</td>
            <td className="py-4 px-4 flex items-center">
              <img
                src="https://via.placeholder.com/40"
                alt="Influencer Avatar"
                className="rounded-full mr-2"
              />
              <span className="font-bold">Micheal Ryhe</span>
            </td>
            <td className="py-4 px-4 text-gray-600">France</td>
            <td className="py-4 px-4 text-gray-600">1.1m</td>
            <td className="py-4 px-4 text-gray-600">€206,400</td>
            <td className="py-4 px-4 text-green-500 font-bold">Assigned</td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="py-4 px-4 text-gray-600">
              <input type="checkbox" />
            </td>
            <td className="py-4 px-4 text-gray-600">ID</td>
            <td className="py-4 px-4 flex items-center">
              <img
                src="https://via.placeholder.com/40"
                alt="Influencer Avatar"
                className="rounded-full mr-2"
              />
              <span className="font-bold">Micheal Ryhe</span>
            </td>
            <td className="py-4 px-4 text-gray-600">Germany</td>
            <td className="py-4 px-4 text-gray-600">900k</td>
            <td className="py-4 px-4 text-gray-600">€206,400</td>
            <td className="py-4 px-4 text-green-500 font-bold">Assigned</td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="py-4 px-4 text-gray-600">
              <input type="checkbox" />
            </td>
            <td className="py-4 px-4 text-gray-600">ID</td>
            <td className="py-4 px-4 flex items-center">
              <img
                src="https://via.placeholder.com/40"
                alt="Influencer Avatar"
                className="rounded-full mr-2"
              />
              <span className="font-bold">Micheal Ryhe</span>
            </td>
            <td className="py-4 px-4 text-gray-600">China</td>
            <td className="py-4 px-4 text-gray-600">857k</td>
            <td className="py-4 px-4 text-gray-600">€206,400</td>
            <td className="py-4 px-4 text-green-500 font-bold">Assigned</td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="py-4 px-4 text-gray-600">
              <input type="checkbox" />
            </td>
            <td className="py-4 px-4 text-gray-600">ID</td>
            <td className="py-4 px-4 flex items-center">
              <img
                src="https://via.placeholder.com/40"
                alt="Influencer Avatar"
                className="rounded-full mr-2"
              />
              <span className="font-bold">Micheal Ryhe</span>
            </td>
            <td className="py-4 px-4 text-gray-600">Malaysia</td>
            <td className="py-4 px-4 text-gray-600">550k</td>
            <td className="py-4 px-4 text-gray-600">€206,400</td>
            <td className="py-4 px-4 text-green-500 font-bold">Assigned</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
