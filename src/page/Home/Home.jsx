import Banner from "../../components/Banner/Banner";
import Post from "../../components/Post/Post";
import Tags from "../../components/Tags/Tags";
import useAnnouncement from "../../hooks/useAnnouncement";
import useAuth from "../../hooks/useAuth";
import AnnouncementPage from "../Announcement/AnnouncementPage";

const Home = () => {
  const [announcement] = useAnnouncement();
  const {user} = useAuth();
  console.log(user);
  console.log(announcement?.length);
  
  return (
    <div>
      <Banner></Banner>
      <div className=" grid grid-cols-1 md:grid-cols-7 ">
        <Post></Post>
        <div className=" col-span-3">
          <Tags></Tags>
          {announcement?.length > 0 ? (
            <div>
              <h1 className=" text-3xl font-bold my-6">Announcement:</h1>
              <AnnouncementPage></AnnouncementPage>
            </div>
          ) : (
            <div>
              <div className="flex w-full overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800 my-6">
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
                    <p className="text-sm text-gray-600 mt-3 dark:text-gray-200">
                      No announcement is available
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
