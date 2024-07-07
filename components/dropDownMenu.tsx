import React from 'react'

const dropDownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={toggleDropdown}
        className="font-medium text-gray-400 hover:text-blue-500 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out"
      >
        NPM
      </button>
      {isOpen && (
        <ul className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <li className="py-2">
            <a
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.npmjs.com/package/react-query-rewind"
            >
              react-query-rewind
            </a>
          </li>
          {/* Add more dropdown items here if needed */}
        </ul>
      )}
    </div>
  );
}

export default dropDownMenu