import React from 'react';

class ImageCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = { spans: 0 }

    // Create a Ref to use with the img tag to gather its individual properties
    this.imageRef = React.createRef();
  }

  componentDidMount() {
    // Wait for imageRef to load in order to get the properties on it
    this.imageRef.current.addEventListener('load', this.setSpans);
  }

  setSpans = () => {
    // Log the height from each individual image
    console.log(this.imageRef.current.clientHeight);

    const height = this.imageRef.current.clientHeight
    const spans = Math.ceil(height / 10) 

    this.setState({ spans: spans })
  };

  render() {
    const { alt_description, urls } = this.props.image;
    return (
      <div style={{gridRowEnd: `span ${this.state.spans}`}}>
        <img ref={this.imageRef} alt={alt_description} src={urls.regular} />
      </div>
    );
  }
}

export default ImageCard;
