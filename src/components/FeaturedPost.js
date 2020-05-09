import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { format } from 'date-fns'



import Grid from './Grid'
import ScrollDown from './ScrollDown'
import Button from './Button'

const MainImage = styled.img`
    height: 100%;
    width: 100%;
`

const Title = styled.div`
    text-transform: uppercase;
    font-family: "Rosarivo";
    font-size: 52px;
    color: #BEBCBB;
    letter-spacing: 2.48px;
    text-align: center;
`


const Separator = styled.div`
    height: 1px;
    width: 54px;
    background-color: #D8D8D8;
`

const DateLabel = styled.div`
    font-family: "Open Sans";
    font-size: 14px;
    color: #1D1D1D;
    letter-spacing: 0;
    line-height: 31px;
`

const Body = styled.div`
    font-family: "Rosarivo";
    font-size: 22px;
    color: #1D1D1D;
    letter-spacing: 0;
    text-align: center;
    line-height: 40px;
`

const Content = styled.div`
    grid-column-start: 4;
    grid-column-end: span 6;
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;

    ${ScrollDown} {
        margin-top: 35px;
    }

    ${Title} {
        margin-top: 69px;
    }

    ${Separator} {
        margin-top: 25px;
    }

    ${DateLabel} {
        margin-top: 16px;
    }

    ${Body} {
        margin-top: 60px;
    }

    ${Button} {
        margin-top: 67px;
        margin-bottom: 150px;
    }

`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export default ({
    image,
    title,
    date,
    intro,
    slug
  }) => {
    return (
        <Container>
            <MainImage src={image}/>
            <Grid>
                <Content>
                    <ScrollDown/>
                    <Title>
                        {title}
                    </Title>
                    <Separator/>
                    <DateLabel>
                        {format(date, "d MMMM, yyyy")}
                    </DateLabel>
                    <Body>{intro}</Body>
                    <Button to={slug}>Read Recipe</Button>
                </Content>
            </Grid>
        </Container>
    )
  }