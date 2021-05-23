const Column = ({ title, type, children }) => (
  <div className={`app-ui-filters-column${type ? ` ${type}`: ''}`}>
    <span className='app-ui-filters-column-title'>{title}</span>
    <div className='app-ui-filters-column-content'>
      {children}
    </div>
  </div>
)

export default Column;