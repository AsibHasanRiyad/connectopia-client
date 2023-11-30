
import useAnnouncement from "../../hooks/useAnnouncement";
import Announcements from "./Announcements";

const AnnouncementPage = () => {
  const [announcement] = useAnnouncement();
  console.log(announcement.length);
  // console.log(announcement);
  if (announcement.length === 0) {
    return (
      <div className="container px-6 py-16 mx-auto">
        <div className="items-center lg:flex">
          <div className="w-full lg:w-1/2">
            <div className="lg:max-w-lg">
              <h1 className="text-3xl font-semibold text-gray-100 dark:text-white lg:text-5xl">
                No <span className="text-green-500">Announcement</span>{" "}
                available right now
              </h1>
            </div>
          </div>

          <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
            <img
              className="w-full h-full max-w-md"
              src="https://merakiui.com/images/components/Email-campaign-bro.svg"
              alt="email illustration vector art"
            />
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className=" col-span-2 my-6">
      <div className=" space-y-5">
        {announcement?.map((announcement) => (
          <Announcements
            key={announcement._id}
            announcement={announcement}
          ></Announcements>
        ))}
      </div>
    </div>
  );
};

export default AnnouncementPage;
