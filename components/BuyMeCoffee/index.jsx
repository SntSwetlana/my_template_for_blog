import React from 'react'
import cl from 'classnames';
import styles from './index.module.scss';
import ScreenEgg from '../ScreenEgg'

const BuyMeCoffee = ({
    className,
  }) => {
  return (
    <ScreenEgg type='right'>
      <div className={cl(styles.buyCoffee, className)}
      >
        <a
        href='https://buy.stripe.com/5kA7sL9574SG7xCfZ3'
        target='_blank'
        className={styles.buyCoffeeButton}
        rel='noreferrer'
        >
          Buy me a coffee...
        </a>
      </div>
    </ScreenEgg>
  )
}

export default BuyMeCoffee