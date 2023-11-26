import useAnnouncement from "../../hooks/useAnnouncement";
import Announcements from "./Announcements";


const AnnouncementPage = () => {
    const [announcement] = useAnnouncement();
    // console.log(announcement);
    return (
        <div className=" col-span-2 my-6">
            <div className=" space-y-5">
            {
                announcement?.map(announcement => <Announcements key={ announcement._id} announcement={announcement}></Announcements> )
            }
            </div>
        </div>
    );
};

export default AnnouncementPage;