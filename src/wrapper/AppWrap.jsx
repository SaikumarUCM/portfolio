import React from 'react'
import {NavigationDots, SocialMedia} from '../components'
import './AppWrap.scss';

const AppWrap = (Component, idName, classNames) => function HOC() {
  return (
    <div id={idName} className={`app__container ${classNames}`} style={{
      flexDirection:'column',
      justifyContent: 'flex-end'
    }}>
        <SocialMedia />

        <div className='app__wrapper app__flex'>
            <Component />

            <div className='copyright'>
                <p className='p-text'>© 2023. All rights reserved.</p>
            </div>
        </div>
        <NavigationDots active={idName}/>
    </div>
  )
}

export default AppWrap;