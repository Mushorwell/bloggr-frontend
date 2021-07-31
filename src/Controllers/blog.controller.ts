// import IBlog from "../Components/Interfaces/IBlogData.interface";
import React from "react";

export const createBlog = (event: React.FormEvent<HTMLFormElement>): void => {
    //    fetch method for login
    event.preventDefault();
    const {title, body} = event.target as typeof event.target & {
        title: {value: string}
        body: {value: string}
    };
    alert(`You have published your new post called ${title.value}.`);
}