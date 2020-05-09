import React from 'react';
import styled from 'styled-components'
import Header from '../components/Header'
import Menu from '../components/Menu'
import FeaturedPost from '../components/FeaturedPost'
import RecommendedContent from '../components/RecommendedContent'
import RecipesList from '../components/RecipesList';
import StoryList from '../components/StoryList';
import PageTitle from '../components/PageTitle'
import Footer from '../components/Footer'

import Contact from '../components/Contact'


import image from '../img/main-img.png'
import img1 from '../img/2b448438971cc691145149d493c95f588cdb4e19.png'


export default {
  title: 'Pages',
  component: IndexPage,
};


const intro = "It’s the simple things that make life worth living. We love cooking with original products – especially those that are seasonal and from local farmers. This means that we associate every season with a particular taste and feeling. Our recipes, which draw influences from all over the world, are simple and honest dishes. We want to share our passion with you, infect you with that passion and provide you with inspiration. Because we believe that cooking connects people and brings them together. Join us on our culinary adventures."
const date = new Date()
const title = "Beetroot seven spices pie"

const data = [
  {image: img1, title: "Classic Brioche", key: 1, description: "Almond milk is a tasty vegan alternative to animal milk and is prepared very quickly.", tags: ["vegan", "gluten-free"], date: new Date()},
  {image: img1, title: "Coconut Banana Cake", key: 2, description: "Almond milk is a tasty vegan alternative to animal milk and is prepared very quickly.", tags: ["vegan", "gluten-free"], date: new Date()},
  {image: img1, title: "Coconut Choco Cake", key: 3, description: "Almond milk is a tasty vegan alternative to animal milk and is prepared very quickly.", tags: ["vegan", "gluten-free"], date: new Date()},
  {image: img1, title: "Coconut Mango Cake", key: 4, description: "Almond milk is a tasty vegan alternative to animal milk and is prepared very quickly.", tags: ["vegan", "gluten-free"], date: new Date()}
]

const Layout = styled.div`
    background-color: #FBFBFA;
`

export const IndexPage = () => (
  <Layout>
      <Header/>
      <Menu/>
      <FeaturedPost image={image} title={title} date={date} intro={intro} slug="/recipe/beetroot-seven-spices-pie" />
      <RecommendedContent content={data} />
      <Footer/>
  </Layout>
)


export const RecipesPage = () => (
  <Layout>
    <Header/>
    <Menu />
    <PageTitle title="Recipes" description="The perfect recipe for this summer"/>
    <RecipesList content={data} />
    <Footer/>
  </Layout>
)

export const StoriesPage = () => (
  <Layout>
    <Header/>
    <Menu />
    <PageTitle title="Histórias" description="Pedaços da vida"/>
    <StoryList content={data} />
    <Footer/>
  </Layout>
)

export const ContactPage = () => (
  <Layout>
    <Header/>
    <Menu />
    <PageTitle title="Contact" />
    <Contact />
    <Footer/>
  </Layout>
)