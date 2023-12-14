import './index.css'

const SearchItem = props => {
  const {List, deleteHistory} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = List

  const deleteUser = () => {
    deleteHistory(id)
  }

  return (
    <li className="item">
      <div className="conty2">
        <p className="time">{timeAccessed}</p>
        <img src={logoUrl} alt="domain logo" className="logo-image" />
        <p className="time">{title}</p>
        <p className="domain-url">{domainUrl}</p>
      </div>
      <div className="conty">
        <button
          data-testid="delete"
          className="button-item"
          onClick={deleteUser}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
            className="delete-button"
          />
        </button>
      </div>
    </li>
  )
}
export default SearchItem
