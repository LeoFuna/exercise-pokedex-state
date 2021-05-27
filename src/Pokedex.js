import React from 'react';
import { Fragment } from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        indexOfPokemons: 0,
        pokemons: this.props.pokemons,
      }
      this.navigationPokemonsForward = this.navigationPokemonsForward.bind(this);
      this.navigationPokemonsBackward = this.navigationPokemonsBackward.bind(this);
      this.filtering = this.filtering.bind(this);
    }

    navigationPokemonsForward() {
      if (this.state.indexOfPokemons === this.state.pokemons.length - 1) {
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
          indexOfPokemons: this.state.pokemons.length -1
        })
      } else {
        this.setState((estadoAnterior) => ({
          indexOfPokemons: estadoAnterior.indexOfPokemons - 1
        }))
      }
    }

    filtering(type) {
      const pokemonsFiltered = this.props.pokemons.filter((pokemon) => pokemon.type === type);
      this.setState(() => ({
        indexOfPokemons: 0,
        pokemons: pokemonsFiltered,
      }))
    }

    render() {
        console.log(this.state.pokemons)
        return (
          <Fragment>
            <div className="pokedex">
                <Pokemon pokemon={this.state.pokemons[this.state.indexOfPokemons]} />
            </div>
            <div>
              <button className='btn-navi' onClick={ this.navigationPokemonsBackward }>{'<'}</button>
              <button className='btn-navi' onClick={ this.navigationPokemonsForward }>{'>'}</button>
            </div>
            <div>
              <button className='btn-filter' onClick={ () => this.filtering('Fire') }>Fire</button>
              <button className='btn-filter' onClick={ () => this.filtering('Electric') }>Eletric</button>
              <button className='btn-filter' onClick={ () => this.filtering('Bug') }>Bug</button>
              <button className='btn-filter' onClick={ () => this.filtering('Poison') }>Poison</button>
              <button className='btn-filter' onClick={ () => this.filtering('Psychic') }>Psychic</button>
              <button className='btn-filter' onClick={ () => this.filtering('Normal') }>Normal</button>
              <button className='btn-filter' onClick={ () => this.filtering('Dragon') }>Dragon</button>
            </div>
          </Fragment>
        );
    }
}

export default Pokedex;