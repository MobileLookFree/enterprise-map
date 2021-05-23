import { useMemo, useCallback } from 'react';
import { CheckCircleFilled, CheckCircleOutlined } from '@ant-design/icons';
import Button from 'components/Button';

import colors from 'assets/colors';

const Filter = ({ filter, filterKey, filters, onClick }) => {
  const includes = useMemo(() =>
    filters[filterKey] && filters[filterKey].includes(filter), [filter, filterKey, filters])

  const onClickHandler = useCallback(() =>
    onClick(filter, filterKey), [filter, filterKey, onClick]);

  return <Button
    className='app-ui-filters-filter'
    onClick={onClickHandler}
  >
    {includes
      ? <CheckCircleFilled style={styles.selected} />
      : <CheckCircleOutlined style={styles.deselected} />}
    <span className={`app-ui-filters-filter-text${includes ? ' selected' : ''}`}>
      {filter}
    </span>
  </Button>
}

export const styles = {
  selected: {
    fontSize: 20,
    color: colors.colorDarkBlue
  },
  deselected: {
    fontSize: 20,
    color: colors.colorGray3
  },
}

export default Filter;