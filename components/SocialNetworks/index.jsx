import React from 'react'
import cl from 'classnames';
import styles from './index.module.scss';
import ScreenEgg from '../ScreenEgg';

import { 
  AiFillYoutube, 
  AiFillGithub, 
  AiFillTwitterCircle, 
  AiFillLinkedin,
} from "react-icons/ai";


const SocialNetwork = [
  {
    id: 1,
    href: 'https://github.com/SntSwetlana',
    icon: AiFillGithub,
  },
  {
    id: 2,
    href: 'https://www.youtube.com/channel/UCi0IBGNwoqUBTMLVU4D9m1g',
    icon: AiFillYoutube,
  },
  {
    id: 3,
    href: 'https://twitter.com/Sweta48052663',
    icon: AiFillTwitterCircle,
  },
  {
    id: 4,
    href: 'https://www.linkedin.com/in/swetlana-aderikhina-82722b241',
    icon: AiFillLinkedin,
  }
]

const SocialNetworks = ({
    className,
  }) => {
  return (
    <ScreenEgg type="left">
      <ul className={cl(className, styles.list)}>
        {SocialNetwork.map((socialNetwork) =>(
          <li
            key={socialNetwork.id}
            className={styles.listItem}
          >
            <a 
              href={socialNetwork.href}
              target='_blank'
              className={styles.listLink}
              rel='noreferrer'
            >
              {React.createElement(
                socialNetwork.icon,
                {
                  color: 'black',                
                  size: 50
                }
              )}            
            </a>
          </li>
        ))}
      </ul>
    </ScreenEgg>
  )
}

export default SocialNetworks