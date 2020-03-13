import React, { Component } from 'react'
import './Conversor.css'




export default class Conversor extends Component {

    constructor(props) {
        super(props);

        this.state = {
            Moeda1: "",
            Moeda2: 0

        }
        this.converter = this.converter.bind(this);
    }

    converter() {
        let apiKey = "195de2d37496b9cad919";
        let convert = `${this.props.Moeda1}_${this.props.Moeda2}`;
        let url = `https://free.currencyconverterapi.com/api/v5/convert?q=${convert}&compact=y&apiKey=${apiKey}`

        fetch(url)
            .then(res => {
                return res.json();
            })
            .then(json => {
                let cotacao = json[convert].val;
                let Moeda1_valor = (parseFloat(this.state.Moeda2_valor) * cotacao).toFixed(2)
                this.setState({ Moeda1_valor })

            })
    }

    render() {
        return (
            <div className="conversor">
                <h2> {this.props.Moeda1}  para {this.props.Moeda2}</h2>
                <input type="text" onChange={(event) => { this.setState({ Moeda2_valor: event.target.value }) }}></input>
                <input type="button" value="Converter" onClick={this.converter}></input>
                <h2>{this.state.Moeda1_valor}</h2>
            </div>

        )
    }
}
