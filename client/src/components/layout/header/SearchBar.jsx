import React from 'react'
import { InputGroup, Input } from 'reactstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import style from './Header.module.css'

const SearchBar = () => {
  return (
    <InputGroup className={`${style.searchBar} position-relative mx-sm-2 mx-xl-4 `}>
        <span
          className={`${style.searchIcon} primary-background-color p-2 rounded-pill d-flex align-items-center justify-content-center`}
        >
          <FontAwesomeIcon icon={faSearch} color="white" />
        </span>
        <Input
          placeholder="Search by name, job title..."
          className={`${style.searchInput} rounded-pill`}
        />
      </InputGroup>
  )
}

export default SearchBar
