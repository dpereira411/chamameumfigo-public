import React from 'react'
import styled from 'styled-components'

import Social from './Social'





const Title = styled.div`
    text-align: center;
    text-transform: uppercase;
    font-family: "Open Sans";
    font-size: 18px;
    color: black;
    font-weight: 600;


`

const Separator = styled.hr`
    border: none;
    height: 1px;
    background-color: #D8D8D8;
    grid-column-end: span 12;


`

const Label = styled.div`
    text-align: center;
    text-transform: uppercase;
    font-family: "Open Sans";
    font-size: 18px;
    color: black;
    font-weight: 600;
    letter-spacing: 4px;

`

const Contact = styled.div`
    font-family: "Rosarivo";
    font-size: 18px;
    color: black;
    text-align: center;
`

const Container = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #F6F5F3;

    ${Title} {
      margin-top: 90px;
    }

    ${Separator} {
      margin-top: 46px;
      margin-left: auto;
      margin-right: auto;
      width: 60%;
      margin-bottom: 47px;
    }

    ${Label} {
      margin-top: 15px;
    }

    ${Contact} {
      margin-top: 15px;
    }

        padding-bottom: 91px;

`




const Footer = class extends React.Component {
  render() {
    return (
      <Container>

              <Title>Stay in Contact</Title>
              <Separator/>
              <Social/>
              <Label>Chama-me um figo</Label>
              <Contact>Phone: +351 918591959</Contact>
              <Contact>hi@chamameumfigo.com</Contact>
      </Container>
    )
  }
}

export default Footer
