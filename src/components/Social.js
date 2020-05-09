import React from 'react'

import { HorizonalList, ListItem } from './List'

import facebook from '../img/social/fb.svg'
import instagram from '../img/social/ig.svg'

const ImageLink = ({title, href, image, alt}) => (
    <a title={title} href={href}>
        <img
            src={image}
            alt={alt}
        />
    </a>
)

const Element = ({title, href, image, alt}) => (
    <ListItem>
        <ImageLink title={title} href={href} image={image} alt={alt}/>
    </ListItem>
)

const Social = () => (
    <HorizonalList spacing="16px">
            <Element title="facebook" href="https://facebook.com/chamameumfigo" image={facebook} alt="Facebook"/>
            <Element title="instagram" href="https://instagram.com/chamameumfigo" image={instagram} alt="Instagram"/>
    </HorizonalList>
  )

  export default Social