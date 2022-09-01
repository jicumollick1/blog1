import React from 'react';

import { categorySearch, authorImgSearch, authorTitleSearch } from '../redux/filters/actions';
import { useDispatch } from 'react-redux/es/exports';

const SingleBlog = ({blog}) => {

    const dispatch = useDispatch();


    const handleCategory = (category) => {
        dispatch(categorySearch(category))
        // console.log('click marer');
    }

    const handleImg = (author_img) => {
        dispatch(authorImgSearch(author_img));
        // console.log(' handle Img');
    }

    const handleAuthorSearch = (author_name) => {
        dispatch(authorTitleSearch(author_name));
        // console.log(' handle Img');
    }
    const {id, blog_img, blog_category, blog_title, author_img, author_name, publish_date} = blog;
    return (
        
        <div
        class="flex flex-col rounded-lg shadow-lg overflow-hidden"
    >
        <div class="flex-shrink-0">
            <img
                class="h-48 w-full object-cover"
                src={`${blog_img}`}
                alt=""
            />
        </div>

        <div
            class="flex-1 bg-white p-6 flex flex-col justify-between"
        >
            <div class="flex-1">
                <p class="text-sm font-medium text-indigo-600">
                    <span
                        class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800" onClick={ () =>  handleCategory(blog_category)}
                    >
                        {blog_category}
                    </span>
                </p>
                <a href="#" class="block mt-1">
                    <p
                        class="text-xl font-semibold text-gray-900"
                    >
                        {blog_title}
                    </p>
                </a>
            </div>
            <div class="mt-6 flex items-center">
                <div class="flex-shrink-0">
                    <img
                        class="h-10 w-10 rounded-full"
                        src= {` ${ author_img }`}
                        alt="alter"
                        onClick={ () =>  handleImg(author_img)}
                    />
                </div>
                <div class="ml-3">
                    <p
                        class="text-sm font-medium text-gray-900 hover:underline"
                        onClick={ () =>  handleAuthorSearch(author_name)}
                    >
                        {author_name}
                    </p>
                    <div
                        class="flex space-x-1 text-sm text-gray-500"
                    >
                        <time datetime="2020-03-16"
                            > {publish_date}
                        </time>
                        <span aria-hidden="true">
                            &middot;
                        </span>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default SingleBlog;