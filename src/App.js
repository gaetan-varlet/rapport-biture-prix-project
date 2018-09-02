import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


class App extends Component {

  constructor(props){
    super(props)
    this.state = {volumeEnLitre:"", pourcentageAlcool:"", prixEnEuros:"", prixEnEurosSoft:"", result:"",
      nom:"", listeProduit:[]}
}

  render() {
    return (
      <div>
        <form>
          <fieldset>
            <legend>Calcul du rapport biture/prix</legend>
            
            <TextField value={this.state.volumeEnLitre} required type="number" label="Quantité en litres"
              onChange= {(e) => this.majVolume(e)}/><br/>
            <TextField value={this.state.pourcentageAlcool} required type="number" label="Pourcentage d'alcool"
              onChange= {(e) => this.majAlcool(e)}/><br/>
            <TextField value={this.state.prixEnEuros} required type="number" label="Prix en euros"
              onChange= {(e) => this.majPrix(e)}/><br/>
            <TextField value={this.state.prixEnEurosSoft} type="number" label="Prix en euros du soft"
              onChange= {(e) => this.majPrixSoft(e)}/><br/>

            <TextField value={this.state.nom} type="text" label="Nom" onChange={(e) => this.majNom(e)}/><br/><br/>
            <Button variant="contained" color="primary" onClick={this.ajouterProduit.bind(this)}>Ajouter</Button>


          <p className="result">Rapport biture/prix :
            <strong>
              {this.state.result}
            </strong>
          </p>
          </fieldset>
        </form>

        <Paper>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Nom</TableCell>
                <TableCell numeric>Rapport biture/prix</TableCell>
                <TableCell numeric>Quantité (l)</TableCell>
                <TableCell numeric>% d'alcool</TableCell>
                <TableCell numeric>Prix (€)</TableCell>
                <TableCell numeric>Prix soft (€)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.listeProduit.map(produit => {
                return (
                  <TableRow key={produit.nom}>
                    <TableCell component="th" scope="row">{produit.nom}</TableCell>
                    <TableCell numeric>{produit.result}</TableCell>
                    <TableCell numeric>{produit.volumeEnLitre}</TableCell>
                    <TableCell numeric>{produit.pourcentageAlcool}</TableCell>
                    <TableCell numeric>{produit.prixEnEuros}</TableCell>
                    <TableCell numeric>{produit.prixEnEurosSoft}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Paper>

      </div>
    );
  }

  majVolume(event){
    this.setState({volumeEnLitre:this.transformationVirguleEnPoint(event.target.value)}, function(){
      this.calculRapportBiturePrix()
    })
  }

  majAlcool(event){
    this.setState({pourcentageAlcool:this.transformationVirguleEnPoint(event.target.value)}, function(){
      this.calculRapportBiturePrix()
    })
  }

  majPrix(event){
    this.setState({prixEnEuros:this.transformationVirguleEnPoint(event.target.value)}, function(){
      this.calculRapportBiturePrix()
    })
  }

  majPrixSoft(event){
    this.setState({prixEnEurosSoft:this.transformationVirguleEnPoint(event.target.value)}, function(){
      this.calculRapportBiturePrix()
    })
  }

  majNom(event){
    this.setState({nom: event.target.value})
  }

  calculRapportBiturePrix(){
    this.setState({result: 
      Math.round((this.state.volumeEnLitre * this.state.pourcentageAlcool / ( this.state.prixEnEuros + this.state.prixEnEurosSoft )) * 100) / 100
    })
  }

  transformationVirguleEnPoint(value){
    return parseFloat(value.replace(",", "."))
  }

  ajouterProduit(){
    let newProduit = {
      nom: this.state.nom,
      result: this.state.result,
      volumeEnLitre: this.state.volumeEnLitre,
      pourcentageAlcool: this.state.pourcentageAlcool,
      prixEnEuros: this.state.prixEnEuros,
      prixEnEurosSoft: this.state.prixEnEurosSoft
    }
    let newListeProduit = [...this.state.listeProduit, newProduit]
    this.setState({listeProduit:newListeProduit}, function(){
      this.clearFormulaire()
    })
  }

  clearFormulaire(){
    this.setState({nom:"", result:"", volumeEnLitre:"", pourcentageAlcool:"", prixEnEuros:"", prixEnEurosSoft:""})
  }
}


export default App;
