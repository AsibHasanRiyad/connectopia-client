import bannerImage from '../../assets/5267.jpg'
import Button from '../Shared/Button';
import Search from './Search';

const Banner = () => {
    return (
        <div className="container py-8 md:py-16 mx-auto">
        <div className="items-center lg:flex">
            <div className="w-full lg:w-1/2">
                <div className="lg:max-w-lg">
                    <h1 className=" text-3xl md:text-4xl font-semibold text-gray-800 dark:text-white lg:text-5xl">Best place to express <br /> your <span className="text-blue-500 ">opinion</span></h1>
                    
                    <p className="my-4 text-gray-600 dark:text-gray-400 text-base md:text-xl text-justify">
                    Connect, Share, Explore: Your Social Universe Awaits! Dive into a world of ideas, moments, and conversations. Join us in shaping a vibrant community where every voice matters. Welcome to <span className="text-blue-500 ">Connectopia</span> where your story unfolds
                    </p>
                    <Button type={'primary'} title={"Post Your Idea"}></Button>
                </div>
            </div>

            <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
                <img className="w-full h-full lg:max-w-3xl" src={bannerImage} alt="Catalogue-pana.svg"/>
            </div>
        </div>
        <Search></Search>
    </div>
    );
};

export default Banner;