import React, { useState, useRef, useEffect } from 'react';

interface DropdownItem {
  name: string;
  link: string;
}

interface DropdownProps {
  items: DropdownItem[];
  label: string;
}

const DropDownMenu: React.FC<DropdownProps> = ({ label, items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="relative inline-block text-left">
      <button
        onClick={toggleDropdown}
        className="font-medium text-gray-400 hover:text-blue-500 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out"
      >
        {label}
        <span className="ml-2">
          {isOpen ? (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
            </svg>
          ) : (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          )}
        </span>
      </button>
      {isOpen && (
        <ul className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-gradient-to-b from-gray-800 to-gray-900 opacity-80 round ring-1 ring-black ring-opacity-5 focus:outline-none">
          {items.map((item, index) => (
            <li key={index} className="">
              <a
                className="font-medium text-gray-400 hover:text-blue-500 px-3 py-2 flex items-center transition duration-150 ease-in-out"
                target="_blank"
                rel="noopener noreferrer"
                href={item.link}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default DropDownMenu;