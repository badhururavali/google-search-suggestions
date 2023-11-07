// Write your code here
import {Component} from 'react'

import SuggestionItem from '../SuggestionItem'

import './index.css'

class GoogleSuggestions extends Component {
  state = {googleSearch: ''}

  displaySuggestion = suggestion => {
    this.setState({googleSearch: suggestion})
  }

  googleSearchInput = event => {
    this.setState({googleSearch: event.target.value})
  }

  render() {
    const {googleSearch} = this.state
    const {suggestionsList} = this.props

    const filterSuggestion = suggestionsList.filter(each =>
      each.suggestion.toLowerCase().includes(googleSearch.toLowerCase()),
    )

    return (
      <div className="bg_container ">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          className="bg_image"
          alt="google logo"
        />
        <div className="search_container">
          <div className="search_input">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              className="search_image"
              alt="search icon"
            />
            <input
              type="search"
              placeholder="Search Google"
              className="search_text"
              value={googleSearch}
              onChange={this.googleSearchInput}
            />
          </div>
          <ul className="ul_list">
            {filterSuggestion.map(suggestion => (
              <SuggestionItem
                each={suggestion}
                displaySuggestion={this.displaySuggestion}
                key={suggestion.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
