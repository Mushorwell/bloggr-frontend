import React from 'react';
import styles from "./Body.module.css";
import {MdSearch} from "react-icons/md";
import Cards from "./Cards";

const Home = () => {

    const searchBar = document.getElementById('search');

    const focusOnSearchInput = ():void => {
        if (searchBar !== null) searchBar.focus();
    }

    return(
        <div>
            <div className={styles.bodyTitle}>
                <h1>Latest Posts</h1>
                <div><input type="text" className={styles.searchBar} id='search' name='search'/><button onClick={():void => focusOnSearchInput()}><MdSearch size={'25px'}/></button></div>
            </div>
            <Cards />
        </div>
    );
}

export default Home;