import React from 'react'
import Character from './components/Character';
import "./App.css"

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      characters: []

    }

  }

  async componentDidMount() {
    const request = await fetch("https://thronesapi.com/api/v2/Characters")
    const response = await request.json()
    console.log(response);
    this.setState({
      characters: response
    })

  }

  // componentDidUpdate(prevProps, prevState) {
  //   this.setState = {
  //     characters: response
  //   }
  // }


  render() {

    return (

      <>
        <h1>Games of Thrones</h1>

        <div className='container'>
          {this.state.characters.map(character => {
            return <Character name={character.fullName} title={character.title} image={character.imageUrl} />
          })}

        </div>
      </>

    )

  }
}

export default App