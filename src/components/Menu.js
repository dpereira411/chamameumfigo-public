import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import { HorizonalList, ListItem } from './List'

const MenuItem = styled(Link)`
    font-size: 16px;
    text-transform: uppercase;
    text-decoration: none;
    font-family: "Open Sans";
    font-weight: 600;
    color: black;
    &.active {
        border-bottom: 2px solid black;
    }
`
const Element = ({title, to}) => (
    <ListItem>
         <MenuItem activeClassName="active" to={to}>{title}</MenuItem>
    </ListItem>
)

const Wrapper = styled.div`
    padding-top: 32px;
    padding-bottom: 32px;
`

const Menu = () => (
    <Wrapper>
        <HorizonalList spacing="64px">
            <Element to="/" title="Home"/>
            <Element to="/recipes" title="Recipes"/>
            <Element to="/about" title="About"/>
            <Element to="/contact" title="Contact"/>        
        </HorizonalList>
    </Wrapper>
  )

  export default Menu