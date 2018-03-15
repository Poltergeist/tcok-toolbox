import React, { Component } from "react";
import styled from "styled-components";
import Container from "./components/Container";
import Center from "./components/Center";
import Range from "./components/Range";
import If from "./components/If";

const HEROES = [
  "Calamis Earthshaker",
  "Vyliria Ellion",
  "Thralir Hillfeet",
  "T'Lorra the Blessed",
  "Brutius the Broken",
  "Sesharra"
];

const Button = styled.button`
  background-color: MEDIUMSLATEBLUE;
  border-radius: 2px;
  border: none;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-size: 1rem;
  height: 36px;
  letter-spacing: 0.5px;
  line-height: 36px;
  outline: 0;
  overflow: hidden;
  padding: 0 2rem;
  position: relative;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  transition: 0.3s ease-out;
  user-select: none;
  vertical-align: middle;
  width: 100%;
`;

function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      heroCount: 2,
      generate: false
    };
  }
  render() {
    const { heroCount, generate } = this.state;
    const heroes = shuffle(HEROES.slice()).slice(0, heroCount);

    return (
      <Container>
        <Center>
          <If ifCase={!generate}>
            <h1>How many heroes are you playing</h1>
            <Range
              min="2"
              max="4"
              step="1"
              value={heroCount}
              onChange={({ target }) =>
                this.setState(() => {
                  return {
                    heroCount: target.value
                  };
                })
              }
            />
            <Button
              onClick={() => {
                return this.setState(({ generate }) => {
                  return {
                    generate: !generate
                  };
                });
              }}
            >
              Generate
            </Button>
          </If>
          <If ifCase={generate}>
            {heroes.map(hero => <div key={hero}>{hero}</div>)}
            <Button
              onClick={() =>
                this.setState(({ generate }) => {
                  return { generate: !generate };
                })
              }
            >
              Back
            </Button>
          </If>
        </Center>
      </Container>
    );
  }
}

export default App;
