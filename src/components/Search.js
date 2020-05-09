import React from 'react'
import { Link } from 'gatsby'

import search from '../img/search.svg'

const SearchButton = ({to, image, alt}) => (
    <Link to={to}>
        <img
            src={image}
            alt={alt}
        />
    </Link>
)

const Search = () => (
    <SearchButton  to="/search" image={search} alt="Search"/>
)

  export default Search


  const a = {
    name: "almond cake",
    description: "It's the simple things that make life worth living. We love cooking with original products – especially those that are seasonal and from local farmers. This means that we associate every season with a particular taste and feeling. Our recipes, which draw influences from all over the world, are simple and honest dishes. We want to share our passion with you, infect you with that passion and provide you with inspiration. Because we believe that cooking connects people and brings them together. Join us on our culinary adventures."
  }