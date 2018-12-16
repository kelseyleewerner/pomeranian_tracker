import React from 'react'

export default class UrlForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      url: ''
    };

    this.setUrl = this.setUrl.bind(this);
    this.saveUrl = this.saveUrl.bind(this);
  }

  componentDidMount() {

  }

  setUrl(event) {
    event.preventDefault();

    this.setState({url: event.target.value});
  }

  saveUrl(event) {
    event.preventDefault();

    fetch('/api/v1/adoptionUrl', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    })
  }

  render() {
    return (
      <form onSubmit={this.saveUrl} >
        <h2>Pomeranian Website URLs</h2>
        Input a URL for a website that you would like to use to gather information on Pomeranians up for adoption
        <div>
          <label>
            URL:
            <input type="text" placeholder="URL" name="adoptionUrl" onChange={this.setUrl} />
          </label>
          <button type="submit">
            Submit URL
          </button>
        </div>
      </form>
    );
  }
}
