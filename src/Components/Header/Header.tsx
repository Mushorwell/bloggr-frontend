import React from 'react';
import styles from './Header.module.css';
import { MdAccountCircle } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className={styles.navbar}>
            <Link to='/'>
                <div className={styles.homeLogo}>
                    Bloggr
                </div>
            </Link>
            <div className={styles.account}>
                <Link to='/create_blog'>Create</Link>
                <Link to='/my_blogs'>My Blogs</Link>
                <Link to='/sign_up'>Register/Sign in</Link>
                <Link to='/account'><MdAccountCircle size={"3rem"}/></Link>
            </div>
        </div>
    );
}

export default Header;

