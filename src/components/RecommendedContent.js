import React, { Fragment } from 'react'
import styled from 'styled-components'
import { take, join } from 'ramda'


import Grid from './Grid'
import Button from './Button'

const Tags = styled.div`
    text-transform: uppercase;
    font-family: "Open Sans";
    font-size: 14px;
    color: black;
    text-align: center;
    font-weight: 600;
`



const Title = styled.div`
    font-family: "Rosarivo";
    font-size: 32px;
    color: black;
    text-align: center;
`

const Description = styled.div`
    font-family: "Rosarivo";
    font-size: 18px;
    color: black;
    text-align: center;
`



const Row = styled.div`
    grid-column-end: span 4;
    height: 850px;

    ${Tags} {
        margin-top: 11px;
    }

    ${Title} {
        margin-top: 40px;
    }

    ${Description} {
        margin-top: 65px;
    }

`
const Image = styled.img`
    max-width:100%;
    height: auto;
`


const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    ${Button} {
        margin-top: 108px;
        margin-bottom: 150px;
    }
`



export default ({
    content
  }) => {
    return (
        <Container>
            <Grid>
            {
                take(3, content).map((element) =>
                    <Row key={element.key}>
                        <Image src={element.image}/>
                        <Tags>{join(", ", element.tags)}</Tags>
                        <Title>{element.title}</Title>
                        <Description>{element.description}</Description>
                    </Row>
                )
            }
            </Grid>
            <Button to="/recipes">All Recipes</Button>

        </Container>
    )
  }