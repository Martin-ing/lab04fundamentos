import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Button, Card } from "react-bootstrap";

class QuoteGenerator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      frase_actual: 0,
      frases: ["a", "b", "c"],
      autores: ["-a", "-b", "-c"],
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
        <h2 className="mb-3 text-primary">Quote Generator</h2>
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
            className="mt-3"
          >
            New Quote
          </Button>
        </Card>
      </Container>
    );
  }
}

export default QuoteGenerator;
