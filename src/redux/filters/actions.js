

export const categorySearch = (category) => {
    return {
        type: 'category',
        payload: category, 
    }
}

export const authorImgSearch = (author_img) => {
    return {
        type: 'img_search',
        payload: author_img,
    }
} 

export const authorTitleSearch = (author_name) => {
    return {
        type: 'author_title_search',
        payload: author_name,
    }
} 

export const showBlogs = () => {
    return {
        type: 'show_all',
        
    }

}



