import React, { useCallback} from 'react';
import { useDispatch } from 'react-redux/es/exports';


const SearchBar = () => {
    const dispatch = useDispatch();

    const handleChange = (value) => {
        dispatch({
            type: "FILTER_BY_TITLE",
            payload: value
        })
    }

    const debounce = (func) => {
        let timer;
        return function (...args) {
          const context = this;
          if (timer) clearTimeout(timer);
          timer = setTimeout(() => {
            timer = null;
            func.apply(context, args);
          }, 1000);
        };
      };

      const optimizedFn = useCallback(debounce(handleChange), []);


    return (

    <div
    class="border mt-6 border-slate-200 flex items-center w-11/12 lg:w-1/2 mx-auto bg-gray-50 h-12 px-5 rounded-lg text-sm ring-emerald-200"
>
    <input
        class="outline-none border-none bg-gray-50 h-full w-full mr-2"
        type="search"
        name="search"
        placeholder="Search"
        onChange={(e) => optimizedFn(e.target.value)}
    
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