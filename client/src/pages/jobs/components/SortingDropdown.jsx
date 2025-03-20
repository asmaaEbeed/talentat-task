import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const sortOptions = [
  { id: 'top_match', label: 'Top match'},
  { id: 'newest', label: 'Newest' },
  { id: 'latest', label: 'Latest' }
];

const SortingDropdown = ({ onSort, currentSort = 'top_match' }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(prevState => !prevState);

  const handleSort = (sortId) => {
    onSort(sortId);
    toggle();
  };

  const getCurrentSortLabel = () => {
    const option = sortOptions.find(opt => opt.id === currentSort);
    return option ? option.label : 'Sort by';
  };

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle} className="d-inline-block">
      <DropdownToggle 
        caret 
        color="white"
        className="d-flex align-items-center gap-2 border rounded-1 px-3 py-2 position-relative"
      >
        <span className="text-dark">Sorting by: </span>
        <span className="text-success fw-medium">{getCurrentSortLabel()}</span>
        <div className='position-absolute top-50 end-0 translate-middle-y bg-light px-2 rounded-2'>
          {dropdownOpen ? <FaChevronUp size={12} className='text-success' /> : <FaChevronDown size={12} className='text-success' />}
        </div>
      </DropdownToggle>
      <DropdownMenu className='w-100 my-1'>
        {sortOptions.map((option) => (
          <DropdownItem 
            key={option.id}
            onClick={() => handleSort(option.id)}
            active={currentSort === option.id}
            className={`${currentSort === option.id ? 'bg-light text-success' : ''} d-flex align-items-center gap-2 py-2`}
          >
            <span>{option.label}</span>
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};

export default SortingDropdown; 