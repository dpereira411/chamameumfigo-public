import React, { Fragment } from 'react'
import styled from 'styled-components'
import { take, join } from 'ramda'

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 26px;
    grid-row-gap:26px;
    max-width: 1200px;
`

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
    background-color: #F6F5F3;
    padding-top: 66px;

`

const RecipePreview = ({recipe}) =>  {
    return (
        <>
            <Image src={recipe.image}/>
            <Tags>{join(", ", recipe.tags)}</Tags>
            <Title>{recipe.title}</Title>
            <Description>{recipe.description}</Description>
        </>
    )
}
        


export default ({
    content
  }) => {
    return (
        <Container>
            <Grid>
            {
                content.map(recipe =>
                    <Row key={recipe.key}>
                        <RecipePreview recipe={recipe}/>
                    </Row>
                )
            }
            </Grid>
        </Container>
    )
  }