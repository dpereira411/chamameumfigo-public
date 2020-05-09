import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import Social from './Social'
import Logo from './Logo'
import LanguageMenu from './LanguageMenu'
import Search from './Search'

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-top: 38px;
    padding-bottom: 32px;
`

const Container = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    
    &:first-child > div {
        margin-right: auto;
    }
    &:last-child > div {
        margin-left: auto;
    }


`

const SideContainer = styled(Container)`
    padding-bottom: 32px;
`

const LeftContainer = styled(SideContainer)`
    justify-content: flex-start;
    margin-left: 32px;
`
const RightContainer = styled(SideContainer)`
    justify-content: flex-end;
    display: flex;
    flex-direction: row;
    /* justify-content: space-between; */
    align-items: center;
    & > :not(:last-child) {
        margin-right: 24px;
    }
    margin-right: 32px;
`





const Header = () => (
    <Wrapper>
        <LeftContainer>
            <Social/>
        </LeftContainer>
        <Container>
            <Logo/>
        </Container>
        <RightContainer>
            <LanguageMenu/>
            <Search/>
        </RightContainer>
    </Wrapper>
  )

  export default Header