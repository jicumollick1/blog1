import React from 'react';
import { useDispatch} from 'react-redux/es/exports';
import { showBlogs } from '../redux/filters/actions';

const TitleBar = () => {
    
    const dispatch = useDispatch();

    const showAllBlogs = () => {
        dispatch(showBlogs());
      
    }

    return (
        <div class="text-center">
                <h2
                    class="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl"
                >
                    ALL BLOGS ARE HERE
                </h2>
                <p
                    class="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4"
                >
                    Lorem ipsum dolor sit amet consectetur, adipisicing
                    elit. Ipsa libero labore natus atque, ducimus sed.
                </p>
                <p class="text-sm font-medium text-indigo-600">
                    <span
                        class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800 my-5"  onClick={ () => showAllBlogs()}
                    >
                        All Blogs
                    </span>
                </p>
            </div>
    );
};

export default TitleBar;