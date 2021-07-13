import React, { Component } from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';
class App extends Component {
  state = {
    images: [],
  };

  fetchData = async (term) => {
    const response = await unsplash.get(`/search/photos`, {
      params: {
        query: term,
      },
    });

    this.setState({ images: response.data.results });
    console.log(response.data.results);
  };

  render() {
    return (
      <div className='ui container'>
        <SearchBar onSubmitValue={this.fetchData} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
