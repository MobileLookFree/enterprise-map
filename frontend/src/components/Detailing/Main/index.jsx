import Base from './Base';
import Additional from './Additional';
import Levels from './Levels';

const Main = ({ openedEnterprise }) => {
  return (
    <div className='app-ui-detailing-details-main'>
      <Base openedEnterprise={openedEnterprise} />
      <Additional openedEnterprise={openedEnterprise} />
      {openedEnterprise.level1 &&
        <Levels openedEnterprise={openedEnterprise} />}
    </div>
  )
}

export default Main;