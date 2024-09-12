import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";


const Home = () => {
    return (
        <div className="flex max-h-[800px] border rounded-lg">
            <Sidebar />
            <MessageContainer />
        </div>
    );
};

export default Home;