import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Button, Card } from "react-bootstrap";
import "./styles.css";

class QuoteGenerator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      frase_actual: 0,
      frases: [
        "No hay hombre mas infeliz que el que nunca atraviesa adversidades",
        "Las dificultades fortalecen la mente como el trabajo al cuerpo",
        "El hombre de verdad se revela en tiempos dificiles",
        "La mala suerte prueba a los hombres valientes",
        "Recibe los eventos de cualquier forma, es el camino a la paz",
        "El dolor no es insoportable siempre y cuando no lo empeores con tu mente",
      ],
      autores: [
        "-Seneca",
        "-Seneca",
        "-Epictetus",
        "-Seneca",
        "-Epictetus",
        "-Marcus Aurelius",
      ],
    };
    this.cambiar_frase = this.cambiar_frase.bind(this);
  }

  componentDidMount() {
    this.interval = setInterval(this.cambiar_frase, 5000);
  }

  cambiar_frase() {
    const { frases, frase_actual } = this.state;
    let nueva_frase = Math.floor(Math.random() * frases.length);

    this.setState({ frase_actual: nueva_frase });
  }

  render() {
    return (
      <Container className="text-center mt-5">
        <h2 className="mb-3 text-custom">Quote Generator</h2>
        <Card className="shadow-lg p-3">
          <div className="display-4 text-dark">
            {this.state.frases[this.state.frase_actual]}
          </div>
          <div className="text-muted mt-2">
            {this.state.autores[this.state.frase_actual]}
          </div>
          <Button
            onClick={this.cambiar_frase}
            variant="primary"
            className="mt-3 button-custom"
          >
            New Quote
          </Button>
        </Card>
      </Container>
    );
  }
}

export default QuoteGenerator;
