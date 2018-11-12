import React from 'react'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      pomeranians: null
    }
  }

  componentDidMount() {
    fetch('/api/v1/pomeranians')
      .then((data) => {
        return data.json()
      })
      .then((jsonData) => {
        this.setState({ pomeranians: jsonData })
      })
  }

  render() {
    const { pomeranians } = this.state;
    return (
      <div>
      {
        pomeranians && <p>{ pomeranians[0].name }</p>
      }
      </div>
    )
  }
}
