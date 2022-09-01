


const initialState = [
    {
        id: 1,
        blog_img : 'https://image.shutterstock.com/image-photo/workspace-desk-keyboard-office-working-260nw-572386132.jpg',
        blog_category : 'Article',
        blog_title : 'Boost your conversion rate',
        author_img : 'https://pbs.twimg.com/profile_images/874172653405327360/QyysiBs5_400x400.jpg',
        author_name: 'Learn with sumit',
        publish_date: '11 Jul, 2022 · 6 min read', 
        show: true
    },
    {
        id: 2,
        blog_img : 'https://blog.educationecosystem.com/wp-content/uploads/2018/12/javascript-depositphotos-opt700_sm3dt7-1280x720.jpg',
        blog_category : 'Programming',
        blog_title : 'Learn javascript in 30 days',
        author_img : 'https://yt3.ggpht.com/tBEPr-zTNXEeae7VZKSZYfiy6azzs9OHowq5ZvogJeHoVtKtEw2PXSwzMBKVR7W0MI7gyND8=s900-c-k-c0x00ffffff-no-rj',
        author_name: 'Mosh hamidani',
        publish_date: '11 Jul, 2022 · 6 min read', 
        show: true
    },
    {
        id: 3,
        blog_img : 'https://cdn.searchenginejournal.com/wp-content/uploads/2021/08/the-ultimate-guide-to-digital-marketing-61726311bf393-sej-1520x800.png',
        blog_category : 'Digital Marketting',
        blog_title : 'Learn digital marketting with popi',
        author_img : 'https://pbs.twimg.com/profile_images/1320630637582192640/M0I1n2sA_400x400.jpg',
        author_name: 'Popi Baishnab',
        publish_date: '11 Jul, 2022 · 6 min read', 
        show: true
    },
    {
        id: 4,
        blog_img : 'https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://cdn.filestackcontent.com/lkYCN9UvRNFaLzywghPu',
        blog_category : 'Programming',
        blog_title : 'Learn c++ in 30 days',
        author_img : 'https://avatars.githubusercontent.com/u/5550850?v=4',
        author_name: 'Brad Traversy',
        publish_date: '11 Jul, 2022 · 7 min read', 
        show: true
    },
    {
        id: 5,
        blog_img : 'https://image.shutterstock.com/image-photo/workspace-desk-keyboard-office-working-260nw-572386132.jpg',
        blog_category : 'Article',
        blog_title : 'Boost your conversion rate',
        author_img : 'https://pbs.twimg.com/profile_images/874172653405327360/QyysiBs5_400x400.jpg',
        author_name: 'Learn with sumit',
        publish_date: '11 Jul, 2022 · 6 min read', 
        show: true
    }, {
        id: 6,
        blog_img : 'https://blog.educationecosystem.com/wp-content/uploads/2018/12/javascript-depositphotos-opt700_sm3dt7-1280x720.jpg',
        blog_category : 'Programming',
        blog_title : 'Learn javascript in 30 days',
        author_img : 'https://yt3.ggpht.com/tBEPr-zTNXEeae7VZKSZYfiy6azzs9OHowq5ZvogJeHoVtKtEw2PXSwzMBKVR7W0MI7gyND8=s900-c-k-c0x00ffffff-no-rj',
        author_name: 'Mosh hamidani',
        publish_date: '11 Jul, 2022 · 6 min read', 
        show: true
    },
    {
        id: 7,
        blog_img : 'https://cdn.searchenginejournal.com/wp-content/uploads/2021/08/the-ultimate-guide-to-digital-marketing-61726311bf393-sej-1520x800.png',
        blog_category : 'Digital Marketting',
        blog_title : 'Learn digital marketting with popi',
        author_img : 'https://pbs.twimg.com/profile_images/1320630637582192640/M0I1n2sA_400x400.jpg',
        author_name: 'Popi Baishnab',
        publish_date: '11 Jul, 2022 · 6 min read', 
        show: true
    },
    {
        id: 8,
        blog_img : 'https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://cdn.filestackcontent.com/lkYCN9UvRNFaLzywghPu',
        blog_category : 'Programming',
        blog_title : 'Learn c++ in 30 days',
        author_img : 'https://avatars.githubusercontent.com/u/5550850?v=4',
        author_name: 'Brad Traversy',
        publish_date: '11 Jul, 2022 · 7 min read', 
        show: true
    },
];

const reducer = (state = initialState, action) => {

    let updatedState = state;

    switch (action.type) {
        case 'category' :
        return  updatedState.filter((category) => category.blog_category === action.payload);

        case 'img_search': 

        console.log('img-search');
        return updatedState.filter((img) => img.author_img === action.payload);
        case 'author_title_search': 

        return updatedState.filter((author) => author.author_name === action.payload);

        case 'show_all': 
        return initialState.map(item => item.show=true && item);

        case "FILTER_BY_TITLE":
            const filteredBlogs= initialState.map(item=>{
                const titleArray= item.blog_title.toLocaleLowerCase().split(" "); //["Learn" ,"c++", "in"," 30"," days"]
                if(titleArray.includes(action.payload.toLocaleLowerCase())) {
                    item.show= true;
                }else{
                    item.show= false;
                }
                return item;
            })            
            return filteredBlogs ;

        default:
            return state;
    }


    return state;
}


export default reducer;

