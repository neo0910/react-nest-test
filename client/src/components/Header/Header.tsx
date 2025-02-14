export const Header = () => {
  return (
    <header className="py-4 px-30 flex justify-between items-center bg-white">
      <div className="flex items-center">
        <img
          src="https://tailwindui.com/plus-assets/img/logos/158x48/transistor-logo-gray-900.svg"
          alt="Logo"
          className="mr-4"
        />
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                Pages
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                Performance
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                Products
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                Campaigns
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                Affiliate
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex items-center">
        <img
          src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt="User Avatar"
          className="rounded-full mr-4 size-10"
        />
        <span className="text-gray-600">Olivia Rhye</span>
      </div>
    </header>
  );
};
