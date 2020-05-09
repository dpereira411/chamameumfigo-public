import React from 'react'
import { Link } from 'gatsby'

import logo from '../img/logo.png'



const ImageLink = ({title, to, image, alt}) => (
    <Link to={to}>
        <img
            src={image}
            alt={alt}
            height={193}
            width={203}
        />
    </Link>
)

const Logo = () => (
    <ImageLink title="Home" to="/" image={logo} alt="Home"/>
  )

  export default Logo