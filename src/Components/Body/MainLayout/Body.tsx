import React, {useState} from 'react';
import styles from './Body.module.css';
import { Switch, Route } from 'react-router-dom';
import Account from '../Account/Account';
import Auth from '../Auth/Auth';
import Home from '../Home/Home';
import UserBlogs from '../UserBlogs/UserBlogs';
import Create from '../Create/Create';

const Body = () => {

    const [screenWidth] = useState(window.screen.width);
    
    return(
        <div className={styles.bodyContent}>
            <div className={[styles.topImageSection, styles.imageLoadingAnimation].join(' ')}>
                <img src={`https://picsum.photos/id/0/${screenWidth}/250.jpg?hmac=3GAAioiQziMGEtLbfrdbcoenXoWAW-zlyEAMkfEdBzQ`} alt="Share your insights!"/>
            </div>
            <div className={styles.section}>
                <Switch>
                    <Route path="/my_blogs">
                        <UserBlogs />
                    </Route>
                    <Route path="/sign_up">
                        <Auth />
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