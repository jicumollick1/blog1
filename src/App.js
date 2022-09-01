import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import SearchBar from './component/SearchBar';
import TitleBar from './component/TitleBar';
import BlogPosts from './component/BlogPosts';
import store from './redux/store';
import { Provider } from 'react-redux/es/exports';

function App() {
  return (
    <Provider store={store}>

       
<Navbar></Navbar>
   <SearchBar></SearchBar>

    <section
        className="relative bg-gray-50 pt-8 pb-20 px-4 sm:px-6 lg:pt-16 lg:pb-16 lg:px-8"
    >
        <div className="absolute inset-0">
            <div className="bg-white h-1/3 sm:h-2/3"></div>
        </div>
        <div className="relative max-w-7xl mx-auto">
            <TitleBar></TitleBar>
            <BlogPosts></BlogPosts>

        
        </div>
    </section>

    </Provider>

  );
}

export default App;
