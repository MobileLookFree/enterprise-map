import { useMemo, useCallback } from 'react';
import Button from 'components/Button';
import { StarFilled, StarOutlined } from '@ant-design/icons';
import colors from 'assets/colors';
import './index.scss';

const FavoriteButton = ({ openedEnterprise, favorites, setFavorite }) => {
  const isFavorite = useMemo(() =>
    favorites.includes(openedEnterprise.id), [openedEnterprise, favorites])

  const setFavoriteHandler = useCallback(() => {
    setFavorite(openedEnterprise.id);
  }, [openedEnterprise, setFavorite]);

  return (
    <Button
      className='app-ui-detailing-favorite-button'
      title={isFavorite
        ? 'Удалить из избранного'
        : 'Добавить в избранное'
      }
      onClick={setFavoriteHandler}>
      {isFavorite
        ? <StarFilled style={styles.icon}/>
        : <StarOutlined style={styles.icon}/>
      }
    </Button>
  )
}

const styles = {
  icon: {
    fontSize: 24,
    color: colors.colorYellow
  }
}

export default FavoriteButton;