// Write your code here

import './index.css'

const SuggestionItem = props => {
  const {each, displaySuggestion} = props
  const {suggestion} = each

  const onClickSuggestion = () => {
    displaySuggestion(suggestion)
  }

  return (
    <li className="suggestion_list">
      <p className="para">{suggestion}</p>
      <button onClick={onClickSuggestion} className="button" type="button">
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          className="suggestion_arrow"
          alt="arrow"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
