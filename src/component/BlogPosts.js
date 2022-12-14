import React from 'react';
import { useSelector } from 'react-redux';
import SingleBlog from './SingleBlog';




const BlogPosts = () => {
    const blogs = useSelector((state) => state.filter);
    return (
         
          <div
          class="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none"
      >

        {
            blogs.map((blog)=> (
               blog.show &&  <SingleBlog blog={blog} key={blog.id}></SingleBlog>
            ))
        }

          
       
      </div>
    );
};

export default BlogPosts;