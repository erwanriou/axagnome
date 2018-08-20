import React from 'react'

class Citizen extends React.Component {
  render() {
    const { gnome } = this.props
    return (
      <div>
        <h1>{gnome.name}</h1>
        <h3>{gnome.age}</h3>
      </div>
    );
  }
}

export default Citizen
