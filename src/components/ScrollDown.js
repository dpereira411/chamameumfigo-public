import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import arrow from '../img/arrow.svg'

const Label = styled.div`
    font-family: "Open Sans";
    font-weight: 600;
    font-size: 14px;
    color: #1D1D1D;
    letter-spacing: 4px;
    text-transform: uppercase;
    text-align: center;
    line-height: 31px;
`
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 2.5rem;
    align-content: center;
`

export default styled(({className}) => (
    <Wrapper className={className}>
        <Label>Scroll Down</Label>
        <img src={arrow}/>
    </Wrapper>
))``
