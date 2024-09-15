import useAuth from "../../hooks/useAuth";
import useConversation from "../../store/useConversation";

const Message = ({message}) => {
const {user} = useAuth();
const {selectedConversation} = useConversation();
const myMessage = message?.senderId === user?._id;
const textPoint = myMessage ? "chat-end" : "chat-start";
const profilePic = myMessage ? user.profilePic : selectedConversation.profilePic;
const textBgColor = myMessage ? "bg-teal-700" : "bg-zinc-800";

  return (
    <div className={`chat ${textPoint}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS chat bubble component"
            src={profilePic}
          />
        </div>
      </div>
      <div className={`chat-bubble text-white text-lg ${textBgColor}`}>
        {message?.message}
      </div>
      <div className="chat-footer opacity-50 flex gap-1 items-center">10:10</div>
    </div>
  );
};

export default Message;
