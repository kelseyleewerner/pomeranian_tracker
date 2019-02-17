import React from 'react'
import UrlList from './UrlList'

export default class UrlForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      url: '',
      adoptionUrls: null
    };

    this.setUrl = this.setUrl.bind(this);
    this.saveUrl = this.saveUrl.bind(this);
    this.loadList = this.loadList.bind(this);
  }

  componentDidMount() {
    this.loadList();
  }

  loadList() {
    fetch('/api/v1/adoptionUrls')
      .then((data) => {
        return data.json()
      })
      .then((jsonData) => {
        this.setState({ adoptionUrls: jsonData })
      })
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
      body: JSON.stringify({url: this.state.url})
    })
    .then(() => this.loadList())
  }

  render() {
    const {adoptionUrls} = this.state;

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
        <p>These are the URLs currently being included in the Pom Tracker:</p>
        <UrlList adoptionUrls={adoptionUrls} />
      </form>
    );
  }
}
