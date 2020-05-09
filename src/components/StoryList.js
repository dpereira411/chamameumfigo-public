import React, { Fragment } from 'react'
import styled from 'styled-components'
import { take, join } from 'ramda'
import format from 'date-fns/fp/format'

import DateLabel from './DateLabel'
import Button from './Button'

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
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

const Separator = styled.div`
    height: 1px;
    width: 54px;
    border-top: 1px solid black;
`



const Row = styled.div`
    max-width: 480px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 73px;


    ${Title} {
        margin-top: 40px;
    }

    ${Separator} {
        margin-top: 28px;
    }

    ${DateLabel} {
        margin-top: 16px;
    }

    ${Description} {
        margin-top: 50px;
    }
    
    ${Button} {
        margin-top: 67px;
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

const StoryPreview = ({ story }) =>  {
    return (
        <>
            <Image src={story.image}/>
            <Title>{story.title}</Title>
            <Separator/>
            <DateLabel date={story.date}/>
            <Description>{story.description}</Description>
            <Button>read story</Button>
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
                content.map(story =>
                    <Row key={story.key}>
                        <StoryPreview story={story}/>
                    </Row>
                )
            }
            </Grid>
        </Container>
    )
  }