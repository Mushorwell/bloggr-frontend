import React from 'react';
import styles from './Card.module.css';
import bodyStyles from '../../MainLayout/Body.module.css';

const Card = () => {
    return(
        <div className={styles.card}>
            <div className={`${styles.headerImage} ${bodyStyles.imageLoadingAnimation}`}>
                <img src='https://picsum.photos/400/200' alt="Theme of the post"/>
            </div>
            <div className={styles.contentPreview}>
                <div className={styles.title}>
                    <h1>Lorem Ipsum</h1>
                </div>
                <div className={styles.blogDetails}>
                    <h2>Apostol</h2>
                    <h2>Date</h2>
                </div>
                <div className={styles.textPreview}>
                    <p>
                        urna duis convallis convallis tellus id interdum velit laoreet id donec ultrices tincidunt arcu non sodales neque sodales ut etiam sit amet nisl purus in mollis nunc sed id semper risus in hendrerit gravida rutrum quisque non tellus orci ac auctor augue mauris augue neque gravida in fermentum et sollicitudin...
                    </p>
                </div>
                <div className={styles.topics}>
                    <div>Fire</div><div>Water</div><div>Air</div><div>Earth</div><div>Fire</div><div>Water</div><div>Air</div><div>Earth</div>
                </div>
            </div>
        </div>
    );
}

export default Card;