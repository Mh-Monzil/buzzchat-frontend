import useGetConversations from "../../hooks/useGetConversations";
import Conversation from "./Conversation";

const Conversations = () => {
  const { loading, conversations } = useGetConversations();
  
  return (
    <div className="py-2 flex flex-1 flex-col overflow-auto custom-scrollbar">
      {loading ? (
        <span className="loading loading-spinner mx-auto"></span>
      ) : (
        <>
          {conversations.map((conversation, idx) => (
            <Conversation
              key={conversation._id}
              conversation={conversation}
              lastIdx={idx === conversations.length - 1}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default Conversations;
