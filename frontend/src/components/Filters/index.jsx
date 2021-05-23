import Column from './Column';
import Filter from './Filter';
import './index.scss';

const Filters = ({
  branches,
  subbranches,
  filters,
  setFilters
}) => {
  return (
    <div className='app-ui-filters'>
      <Column
        title='Направление'
        type='left'
      >
        {branches.map((branch, index) =>
          <Filter
            key={index}
            filter={branch}
            filterKey='branch'
            filters={filters}
            onClick={setFilters}
          />)}
      </Column>
      <Column
        title='Поднаправление'
        type='right'
      >
        {subbranches.map((subbranch, index) =>
          <Filter
            key={index}
            filter={subbranch}
            filterKey='subbranch'
            filters={filters}
            onClick={setFilters}
          />)}
      </Column>
    </div>
  )
}

export default Filters;