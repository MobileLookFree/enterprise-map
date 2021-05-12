import { useState, useCallback } from 'react';
import { AutoComplete } from 'antd';
import Button from 'components/Button';
import { MenuOutlined, SearchOutlined, FilterOutlined } from '@ant-design/icons';
import { iconStyles } from 'assets/styles';
import './index.scss';

import { createSelector } from 'reselect';

const getOptions = createSelector(
  (enterprises) => enterprises,
  (enterprises, searchQuery) => searchQuery,
  (enterprises, searchQuery) => {
    const text = searchQuery.toLowerCase();
    return enterprises
      .filter(enterprise => enterprise.name && enterprise.name.toLowerCase().includes(text))
      .map(enterprise => ({
        value: enterprise.id,
        label: enterprise.name,
        data: enterprise
      }))
  });

const NavBar = ({
  zoomThreshold,
  setSideMenuCollapsed,
  zoom,
  // redux
  selectEnterprise,
  enterprises,
  isSearchLoading,
  searchType
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [inFocus, setFocus] = useState(false);

  const onSearch = useCallback((value) => {
    setSearchQuery(value);
    !value && selectEnterprise();
  }, [setSearchQuery, selectEnterprise]);

  const onServerSearch = useCallback((event) =>
    (!event.key || event.key === 'Enter') && searchQuery &&
    searchType(searchQuery), [searchQuery, searchType]);

  const onFocus = useCallback(() => setFocus(true), [setFocus]);

  const onBlur = useCallback(() => setFocus(false), [setFocus]);

  const onSelect = useCallback((value, option) => {
    onSearch(option.label);
    selectEnterprise(option.data);
  }, [onSearch, selectEnterprise]);

  return (
    <nav className='app-ui-navbar'>
      <div className='app-ui-navbar-left'>
        <Button
          className='app-ui-navbar-left-menu'
          onClick={setSideMenuCollapsed}
        >
          <MenuOutlined style={iconStyles} />
        </Button>
        <div className='app-ui-navbar-left-search-wrapper'>
          <AutoComplete
            className={`app-ui-navbar-left-search${inFocus ? ' focus' : ''}`}
            dropdownClassName='app-ui-navbar-left-search-dropdown'
            placeholder='Введите название...'
            value={searchQuery}
            options={getOptions(enterprises, searchQuery)}
            onChange={onSearch}
            onSelect={onSelect}
            onKeyPress={onServerSearch}
            onFocus={onFocus}
            onBlur={onBlur}
            disabled={isSearchLoading}
          />
          <Button
            className='app-ui-navbar-left-search-button'
            onClick={onServerSearch}
          >
            <SearchOutlined style={iconStyles} />
          </Button>
        </div>
      </div>
      {zoom > zoomThreshold &&
        <Button
          className='app-ui-navbar-filters-button'
        >
        <FilterOutlined style={iconStyles} />
        </Button>}
    </nav>
  )
}

export default NavBar;