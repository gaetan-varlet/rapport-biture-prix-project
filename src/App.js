import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';

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
            
            <TextField type="text" label="Quantité en litres" onChange= {(e) => this.majVolume(e)}/><br/>
            <TextField type="text" label="Pourcentage d'alcool" onChange= {(e) => this.majAlcool(e)}/><br/>
            <TextField type="text" label="Prix en euros" onChange= {(e) => this.majPrix(e)}/><br/>

          </fieldset>
        </form>

        <p className="result">Rapport biture/prix :
          <strong>
            {this.calculRapportBiturePrix(
              this.state.volumeEnLitre, this.state.pourcentageAlcool, this.state.prixEnEuros
            )}
         </strong>
        </p>

      </div>
    );
  }

  majVolume(event){
    this.setState({volumeEnLitre:this.transformationVirguleEnPoint(event.target.value)})
  }

  majAlcool(event){
    this.setState({pourcentageAlcool:this.transformationVirguleEnPoint(event.target.value)})
  }

  majPrix(event){
    this.setState({prixEnEuros:this.transformationVirguleEnPoint(event.target.value)})
  }

  calculRapportBiturePrix(volumeEnLitre, pourcentageAlcool, prixEnEuros){
    return Math.round((volumeEnLitre * pourcentageAlcool / prixEnEuros) * 100) / 100
  }

  transformationVirguleEnPoint(value){
    return parseFloat(value.replace(",", "."))
  }
}


export default App;
