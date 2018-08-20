import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

class Nav extends React.Component {

  render() {
    return (
      <div className='nav'>
        <div className="container">
          <nav>
            <div className="title">
              <h1><Link to='/'>AXACITIZENAPP</Link></h1>
            </div>
            <div className="functions">
              <div className="browse">
                <input
                  onChange={(e) => this.props.handleQueryInput(e.target.value)}
                  value={this.props.query}
                  type="text"
                  placeholder='Filter by age'/>
                <h2 onClick={this.props.displayResult}> Research</h2>
              </div>
            </div>
          </nav>
        </div>
      </div>
    )
  }
}


export default Nav
