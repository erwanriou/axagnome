import React from 'react'
import { Link } from 'react-router-dom'

class Nav extends React.Component {
  render() {
    return (
      <div className='nav'>
        <div className="container">
          <nav>
            <div className="title">
              <h1>AXACITIZENAPP</h1>
            </div>
            <div className="functions">
              <div className="filters">
                <h2>Age</h2>
                <h2>Weight</h2>
                <h2>heigth</h2>
                <h2>professions</h2>
              </div>
              <div className="browse">
                <h2>Research</h2>
              </div>
            </div>
          </nav>
        </div>
      </div>
    )
  }
}


export default Nav
