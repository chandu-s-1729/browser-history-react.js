import './index.css'

const HistoryItem = props => {
  const {historyDetails, onDeleteHistory} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = historyDetails

  const onDelete = () => {
    onDeleteHistory(id)
  }

  return (
    <li className="list-item">
      <div className="items-container">
        <p className="time-accessed">{timeAccessed}</p>
        <img className="domain-logo" src={logoUrl} alt="domain logo" />
        <p className="domain-title-container">{title}</p>
        <p className="domain-url-name">{domainUrl}</p>
      </div>
      <button
        className="delete-btn"
        onClick={onDelete}
        data-testid="delete"
        type="button"
      >
        <img
          className="delete-icon"
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default HistoryItem
