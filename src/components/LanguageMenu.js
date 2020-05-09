import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { intersperse } from 'ramda'

import { HorizonalList, ListItem } from './List'

const MenuItem = styled(Link)`
    font-size: 14px;
    text-transform: uppercase;
    text-decoration: none;
    font-family: "Open Sans";
    font-weight: 600;
    color: black;
    &.active {
        font-weight: 800;
    }
`
const Element = ({title, to}) => (
    <ListItem>
         <MenuItem activeClassName="active" to={to}>{title}</MenuItem>
    </ListItem>
)

const Separator = styled.span`
    font-family: "Open Sans";
    padding-left: 2px;
    padding-right: 2px;
    `

const Menu = () => (
    <HorizonalList spacing="1px">
        {intersperse(<Separator>|</Separator>, [
            <Element to="/portuguese" title="Portuguese"/>,
            <Element to="/english" title="English"/>
        ])}
    </HorizonalList>
  )

  export default Menu