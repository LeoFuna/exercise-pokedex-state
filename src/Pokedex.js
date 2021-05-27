import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
    constructor() {
      super()
      this.state = {
        indexOfPokemons: 0,
      }
      this.navigationPokemonsForward = this.navigationPokemonsForward.bind(this);
      this.navigationPokemonsBackward = this.navigationPokemonsBackward.bind(this);
    }

    navigationPokemonsForward() {
      if (this.state.indexOfPokemons === this.props.pokemons.length - 1) {
        this.setState({
          indexOfPokemons: 0
        })
      } else {
        this.setState((estadoAnterior) => ({
          indexOfPokemons: estadoAnterior.indexOfPokemons + 1
        }))
      }
    }
    
    navigationPokemonsBackward() {
      if (this.state.indexOfPokemons === 0) {
        this.setState({
          indexOfPokemons: this.props.pokemons.length -1
        })
      } else {
        this.setState((estadoAnterior) => ({
          indexOfPokemons: estadoAnterior.indexOfPokemons - 1
        }))
      }
    }

    render() {
        return (
            <div className="pokedex">
                <Pokemon key={this.props.pokemons[this.state.indexOfPokemons].id} pokemon={this.props.pokemons[this.state.indexOfPokemons]} />
                <button onClick={ this.navigationPokemonsForward }>Frente</button>
                <button onClick={ this.navigationPokemonsBackward }>Tras</button>
            </div>
        );
    }
}

export default Pokedex;