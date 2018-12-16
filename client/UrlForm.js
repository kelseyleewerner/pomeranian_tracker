import React from 'react'

export default class UrlForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      // tbd
    };

    this.saveUrl = this.saveUrl.bind(this);
  }

  componentDidMount() {

  }

  saveUrl(event) {
    event.target.value
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.saveUrl} >
        <h2>Pomeranian Website URLs</h2>
        Input a URL for a website that you would like to use to gather information on Pomeranians up for adoption
        <div>
          <label>
            URL:
            <input type="text" placeholder="URL" />
          </label>
          <button type="submit">
            Submit URL
          </button>
        </div>
      </form>
    );
  }
}
