import { Helmet } from "react-helmet-async";
import Banner from "../../components/Banner/Banner";
import Post from "../../components/Post/Post";
import Tags from "../../components/Tags/Tags";
import useAnnouncement from "../../hooks/useAnnouncement";
import SearchProvider from "../../provider/searchProvider";
// import useAuth from "../../hooks/useAuth";
import { ParallaxBanner } from "react-scroll-parallax";
import Container from "../../components/Container";
import HomeAnnouncement from "../Announcement/HomeAnnouncement";
import Stats from "../../components/Stats/Stats";

const Home = () => {
  const [announcement] = useAnnouncement();
  // const {user} = useAuth();
  // console.log(user);
  // console.log(announcement?.length);

  return (
    <SearchProvider>
      <div>
        <Helmet>
          <title>Home</title>
        </Helmet>
        <ParallaxBanner
          layers={[
            {
              image: "",
              speed: -20,
            },
            {
              speed: -30,
              children: (
                <div className="absolute inset-0 flex items-center justify-center">
                  <h1
                    data-aos="fade-down"
                    data-aos-offset="100"
                    data-aos-easing="ease-in-sine"
                    data-aos-duration="1000"
                    className=" text-4xl md:text-6xl lg:text-8xl text-[#E57E77] text-center mb-56 font-thin"
                  >
                    Drive into the world of communication
                  </h1>
                </div>
              ),
            },
            {
              image:
                "https://i.ibb.co/MDDMyqQ/Pngtree-riverside-landscape-sun-hill-3912508-1.png",
              speed: -10,
            },
          ]}
          className="aspect-[2/1] rounded"
        />
        <Container>
          <Banner></Banner>
          <div className=" grid grid-cols-1 md:grid-cols-7 ">
            <Post></Post>
            <div className=" col-span-3">
              <Tags></Tags>
              {announcement?.length > 0 ? (
                <div>
                  <h1 className=" text-4xl text-green-500 font-semibold mt-10 mb-5">
                    Announcements:
                  </h1>
                  <HomeAnnouncement></HomeAnnouncement>
                </div>
              ) : (
                <div>
                  <div className="flex w-full overflow-hidden bg-white rounded-lg shadow-md    my-6">
                    <div className="flex items-center justify-center w-12 bg-red-500">
                      <svg
                        className="w-6 h-6 text-white fill-current"
                        viewBox="0 0 40 40"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M20 3.36667C10.8167 3.36667 3.3667 10.8167 3.3667 20C3.3667 29.1833 10.8167 36.6333 20 36.6333C29.1834 36.6333 36.6334 29.1833 36.6334 20C36.6334 10.8167 29.1834 3.36667 20 3.36667ZM19.1334 33.3333V22.9H13.3334L21.6667 6.66667V17.1H27.25L19.1334 33.3333Z" />
                      </svg>
                    </div>

                    <div className="px-4 py-2 -mx-3">
                      <div className="mx-3">
                        <span className="font-semibold text-3xl text-red-500 dark:text-red-400">
                          Announcement!
                        </span>
                        <p className="text-sm text-gray-600 mt-3  ">
                          No announcement is available
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div
           data-aos="fade-up"
           data-aos-offset="100"
           data-aos-easing="ease-in-sine"
           data-aos-duration="1000"
          className=" py-6">
            <h1 className=" text-green-500 text-5xl text-center font-bold mb-5">Site Stats</h1>
            <Stats />
          </div>
        </Container>
      </div>
    </SearchProvider>
  );
};

export default Home;
