import React from 'react';
import bodyStyles from '../MainLayout/Body.module.css';
import { createBlog } from "../../../Controllers/blog.controller";

const Create = (): JSX.Element => {

    return(
        <div className={bodyStyles.readView}>
            <h1>New Post</h1>
            <form
                className={bodyStyles.createBlogForm}
                id='createBlog'
                onSubmit={createBlog}
            >
                <input
                    className={`${bodyStyles.textInput} ${bodyStyles.blogTitle}`}
                    type="text"
                    id='title'
                    name='title'
                    placeholder='Title of Blog'
                />
                <textarea
                    className={`${bodyStyles.textAreaInput}`}
                    form='createBlog'
                    id='body'
                    name='body'
                    rows={10}
                    placeholder={'What\'s on your mind..?'}
                />
                <div
                    className={bodyStyles.buttonSection}
                >
                    <input
                        className={`${bodyStyles.formButton} ${bodyStyles.submitButton} ${bodyStyles.createBlogFormButtons}`}
                        type="submit"
                        value='Create Post'
                    />
                    <input
                        className={`${bodyStyles.formButton} ${bodyStyles.createBlogFormButtons}`}
                        type='button'
                        value='Cancel Post'
                    />
                </div>
            </form>
        </div>
    );
}

export default Create;