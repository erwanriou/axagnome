import React from 'react'
import Citizen from './Citizen'

class CitizenList extends React.Component {
  render() {
    return (
      <div>
        {this.props.gnomes.map(gnome =>(
          <Citizen key={gnome.id} gnome={gnome} />
        ))}
      </div>
    );
  }
}

export default CitizenList
