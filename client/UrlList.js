import React from 'react'

export default class UrlList extends React.Component {
  constructor(props) {
    super(props)

  }


  render() {
    const {adoptionUrls, removeUrl} = this.props;

      return (
        <div>
          {adoptionUrls? adoptionUrls.map((url) => (
              <div key={url.id}>
                {url.url}
                <button onClick={() => removeUrl(url.id)}>
                  x
                </button>
              </div>
              ))
              : null}
        </div>
      )
  }
}
