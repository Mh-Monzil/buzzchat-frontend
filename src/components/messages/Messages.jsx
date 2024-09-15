import useGetMessages from "../../hooks/useGetMessages";
import useConversation from "../../store/useConversation";
import MessageSkeleton from "../skeletons/MessageSkeleton";
import Message from "./Message";

const Messages = () => {
  const { selectedConversation } = useConversation();
  const { messages, loading } = useGetMessages();
  console.log("messages", messages);
  return (
    <div className="p-4 flex-1 overflow-auto custom-scrollbar">
      {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}

      {!loading && messages.length === 0 && (
        <div className="flex flex-col items-center mt-10">
          <div className="avatar online">
            <div className="w-16 rounded-full">
              <img src={selectedConversation?.profilePic} alt="" />
            </div>
          </div>
          <h2 className="text-lg font-medium mt-2">
            {selectedConversation?.fullName}
          </h2>
          <p>Send a message to start the conversation</p>
        </div>
      )}

      {!loading &&
        messages.length > 0 &&
        messages.map((message, idx) => <Message key={idx} message={message} />)}
    </div>
  );
};

export default Messages;
