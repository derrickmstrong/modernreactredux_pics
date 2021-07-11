import React, { Component } from 'react';

class SearchBar extends Component {
  state = {
    term: '',
  };

onFormSubmit = (e) => {
    e.preventDefault();
    // prop that is passed in from the component call via App.js
    // allows App.js to know the state that was assigned via SearchBar input
    // child passes to parent
    this.props.onSubmitValue(this.state.term)
  }

  render() {
    return (
      <div className='ui segment'>
        <form onSubmit={this.onFormSubmit} className='ui form'>
          <div className='field'>
            <label>Image Search</label>
             {/* controlled input */}
            <input
              type='text'
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
            {this.state.term}
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
