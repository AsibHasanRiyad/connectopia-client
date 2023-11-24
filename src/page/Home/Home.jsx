import Banner from "../../components/Banner/Banner";
import Post from "../../components/Post/Post";
import Tags from "../../components/Tags/Tags";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className=" grid grid-cols-1 md:grid-cols-6">
        <Post></Post>
        <Tags></Tags>
      </div>
    </div>
  );
};

export default Home;
