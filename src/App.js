import React, { Component } from 'react'

class App extends Component {

  constructor(props){
    super(props)
    this.state = {volumeEnLitre:0, pourcentageAlcool:0, prixEnEuros:0}
}

  render() {
    return (
      <div>
        <form>
          <fieldset>
            <legend>Calcul du rapport biture/prix</legend>
            
            <label>Quantité en litres : </label>
            <input type="text" onChange= {(e) => this.majVolume(e)}/>
            <br/>

            <label>Pourcentage d'alcool : </label>
            <input type="text" onChange={this.majAlcool.bind(this)}/>
            <br/>

            <label>Prix en euros : </label>
            <input type="text" onChange={this.majPrix.bind(this)}/>
            <br/>

            <p>Rapport biture/prix : {this.calculRapportBiturePrix(
             this.state.volumeEnLitre, this.state.pourcentageAlcool, this.state.prixEnEuros
            )}
            </p>

          </fieldset>
        </form>
      </div>
    );
  }

  majVolume(event){
    this.setState({volumeEnLitre:event.target.value})
  }

  majAlcool(event){
    this.setState({pourcentageAlcool:event.target.value})
  }

  majPrix(event){
    this.setState({prixEnEuros:event.target.value})
  }

  calculRapportBiturePrix(volumeEnLitre, pourcentageAlcool, prixEnEuros){
    return Math.round((volumeEnLitre * pourcentageAlcool / prixEnEuros) * 100) / 100
  }
}


export default App;
