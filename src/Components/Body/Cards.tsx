import React from 'react';
import Card from './Card';
import styles from './Body.module.css';

const Cards = () => {
    return(
        <div className={styles.blogPreviews}>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    );
}

export default Cards;