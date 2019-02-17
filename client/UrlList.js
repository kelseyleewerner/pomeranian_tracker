import React from 'react'

export default class UrlForm extends React.Component {
  constructor(props) {
    super(props)
  }


  render() {
    const {adoptionUrls} = this.props;
    
      return (
        <div>
          {adoptionUrls? adoptionUrls.map((url) => (<div key={url.id}>{url.url}</div>)): null}
        </div>
      )
  }
}
