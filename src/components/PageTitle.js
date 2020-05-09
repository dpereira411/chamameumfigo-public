import React from 'react'
import styled from 'styled-components'



const Title = styled.div`
    font-family: "Rosarivo";
    font-size: 82px;
    color: black;
    text-align: center;
    letter-spacing: 3.9px;
`

const Description = styled.div`
    font-family: "Rosarivo";
    font-size: 18px;
    color: black;
    text-align: center;
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    ${Title} {
        margin-top: 100px;
    }

    ${Description} {
        margin-top: 79px;
        margin-bottom: 66px;
    }

`




  export default ({
    title, description
  }) => {

    return (
        <Container>
            <Title>{title}</Title>
            {description && <Description>description</Description>}
        </Container>
    )
  }