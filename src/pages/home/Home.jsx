import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";


const Home = () => {
    return (
        <div className="flex h-[800px] border rounded-lg">
            <Sidebar />
            <MessageContainer />
        </div>
    );
};

export default Home;