import React from 'react';
import UserCreate from './UserCreate';
import LanguageContext from '../context/LanguageContext';
import ColorContext from '../context/ColorContext';
import LanguageSelector from './LanuageSelector';

class App extends React.Component {
  state = { language: 'english' }

  onLangaugeChange = (language) => {
    this.setState({ language })
  }

  render() {
    return (
      <div className="ui container">
        <LanguageSelector onLangaugeChange={this.onLangaugeChange} />
        <LanguageContext.Provider value={this.state.language}>
          <ColorContext.Provider value="primary">
            <UserCreate />
          </ColorContext.Provider>
        </LanguageContext.Provider>
      </div>
    )
  }
}

export default App;