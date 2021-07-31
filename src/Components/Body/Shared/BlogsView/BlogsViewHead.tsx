import React from 'react';
import styles from "../../MainLayout/Body.module.css";
import { MdSearch } from "react-icons/md";

type BlogsViewHeadProps = {
    PageTitle: string
}

const BlogsViewHead = ({ PageTitle }: BlogsViewHeadProps ): JSX.Element => {

    const searchBar = document.getElementById('search');

    const focusOnSearchInput = ():void => {
        if (searchBar !== null) searchBar.focus();
    }

    return(
        <div>
            <div className={styles.bodyTitle}>
                <h1>{PageTitle}</h1>
                <div><input type="text" className={styles.searchBar} id='search' name='search'/><button onClick={():void => focusOnSearchInput()}><MdSearch size={'25px'}/></button></div>
            </div>
        </div>
    );
}

export default BlogsViewHead;