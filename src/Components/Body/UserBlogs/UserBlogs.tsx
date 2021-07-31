import React from 'react';
import BlogsViewHead from "../Shared/BlogsView/BlogsViewHead";
import Cards from "../Shared/Cards/Cards";

const UserBlogs = () => {

    return(
        <div>
            <BlogsViewHead PageTitle={'My Posts'} />
            <Cards />
        </div>
    );
}

export default UserBlogs;