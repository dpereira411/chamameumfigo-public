import styled from 'styled-components'

const HorizonalList = styled.ul`
    display: flex;
    justify-content: center;
    list-style-type: none;
    & > :not(:last-child) {
        margin-right: ${props => props.spacing};
    }
`
const ListItem = styled.li``

export { HorizonalList, ListItem }