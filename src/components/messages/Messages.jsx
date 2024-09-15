import Message from "./Message";


const Messages = () => {
    return (
        <div className="p-4 flex-1 overflow-auto custom-scrollbar">
            <Message />
            <Message />
            <Message />
        </div>
    );
};

export default Messages;