import React from 'react'
import HeaderCartButton from './HeaderCartButton';

import mealsImage from '../../assets/meals.jpg';
import classes from './Header.module.css';

function Header(props) {
    return (
        <>
            <header className={classes.header}>
                <h1>ReactMeals</h1>
                <HeaderCartButton displayCart={props.displayCart}/>
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImage} alt='Table having tasty food'/>
            </div>
        </>
    )
}

export default Header
