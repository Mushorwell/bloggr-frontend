import React from 'react';
import styles from './Body.module.css';
import Cards from './Cards';
import { MdSearch } from 'react-icons/md';
import { Switch, Route } from 'react-router-dom';
import Account from './Account';
import Register from './Register';
import Home from './Home';
import UserBlogs from './UserBlogs';
import Create from './Create';

const Body = () => {

    return(
        <div className={styles.bodyContent}>
            <div className={[styles.topImageSection, styles.imageLoadingAnimation].join(' ')}>
                <img src="https://picsum.photos/id/0/1366/400.jpg?hmac=3GAAioiQziMGEtLbfrdbcoenXoWAW-zlyEAMkfEdBzQ" alt='Placeholder image'/>
            </div>
            <div className={styles.section}>
                <Switch>
                    <Route path="/my_blogs">
                        <UserBlogs />
                    </Route>
                    <Route path="/sign_up">
                        <Register />
                    </Route>
                    <Route path="/account">
                        <Account />
                    </Route>
                    <Route path="/create_blog">
                        <Create />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </div>
    );
}

export default Body;