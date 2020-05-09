import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import Header from './Header'
import Menu from './Menu'
import image from '../img/main-img.png'

const Layout = styled.div`
    background-color: #FBFBFA;
`

const MainImage = styled.img`
      height: 100%;
  width: 100%;
`


const IndexPage = () => (
    <Layout>
        <Header/>
        <Menu/>
        <MainImage src={image}/>
    </Layout>
  )

  export default IndexPage