import React from 'react'

//Import API
import { getGnome } from '../utils/api'

//Import Needed Components
import Spinner from './common/Spinner'
import CitizenList from './CitizenList'




class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      gnomes: null,
      errors: {},
    }
  }

  async componentDidMount() {
    const data = await getGnome()
    this.setState({ gnomes: data.Brastlewark })
  }

  render() {
    const { gnomes, errors } = this.state
    return (
      <div>
        { gnomes === null
          ? <Spinner />
          : <CitizenList gnomes={gnomes}/>
        }
      </div>
    );
  }
}

export default App
