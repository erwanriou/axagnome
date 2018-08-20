import React from 'react'
import { Link } from 'react-router-dom'

class Citizen extends React.Component {

  render() {
    const { gnomes } = this.props
    const { id } = this.props.match.params
    return (
      <div>
        {gnomes[id].name}
      </div>
    )
  }
}

export default Citizen
