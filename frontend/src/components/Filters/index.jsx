import { useCallback } from 'react';
import Column from './Column';
import Filter from './Filter';
import './index.scss';

const Filters = ({
  branches,
  subbranches,
  filters,
  setFilters,
  dropFilters
}) => {
  const dropBranches = useCallback(() =>
    dropFilters('branch'), [dropFilters]);
  
  const dropSubbranches = useCallback(() =>
    dropFilters('subbranch'), [dropFilters]);

  return (
    <div className='app-ui-filters'>
      <Column
        title='Направление'
        type='left'
        onDrop={dropBranches}
      >
        {branches.map((branch, index) =>
          <Filter
            key={index}
            filter={branch}
            filterKey='branch'
            filters={filters}
            setFilters={setFilters}
          />)}
      </Column>
      <Column
        title='Поднаправление'
        type='right'
        onDrop={dropSubbranches}
      >
        {subbranches.map((subbranch, index) =>
          <Filter
            key={index}
            filter={subbranch}
            filterKey='subbranch'
            filters={filters}
            setFilters={setFilters}
          />)}
      </Column>
    </div>
  )
}

export default Filters;