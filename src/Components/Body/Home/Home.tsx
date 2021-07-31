import React from 'react';
import Cards from "../Shared/Cards/Cards";
import BlogsViewHead from "../Shared/BlogsView/BlogsViewHead";

const Home = (): JSX.Element => {

    return(
        <div>
            <BlogsViewHead PageTitle={'Latest Posts:'}/>
            <Cards />
        </div>
    );
}

export default Home;