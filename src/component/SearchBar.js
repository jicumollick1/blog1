import React, { useState } from 'react';

const SearchBar = () => {

    const [text,setText] = useState('');

    // const handleInput = (text) => {
    //     setText(text);
    //     console.log(text);
    // }


    

    return (
        
    <div
    class="border mt-6 border-slate-200 flex items-center w-11/12 lg:w-1/2 mx-auto bg-gray-50 h-12 px-5 rounded-lg text-sm ring-emerald-200"
>
    <input
        class="outline-none border-none bg-gray-50 h-full w-full mr-2"
        type="search"
        name="search"
        placeholder="Search"
        value={text}
    
    />
    <img
        class="inline h-6 cursor-pointer"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Search_Icon.svg/1024px-Search_Icon.svg.png"
        alt="Search" 
    />
</div>
    );
};

export default SearchBar;