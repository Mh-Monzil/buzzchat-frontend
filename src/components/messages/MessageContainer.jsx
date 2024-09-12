import MessageInput from "./MessageInput";
import Messages from "./Messages";
import { SlOptions } from "react-icons/sl";
import { TiMessages } from "react-icons/ti";

const MessageContainer = () => {
  const noChatSelected = false;
  return (
    <div className="md:min-w-[550px] flex flex-col">
      {noChatSelected ? (
        <div className="flex items-center justify-center w-full h-full">
          <div className="px-4 text-center sm:text-lg md:text-2xl text-gray-200 font-semibold flex flex-col items-center gap-2">
            <p>Welcome to BuzzChat</p>
            <p>Select a chat to start messaging</p>
            <TiMessages className="text-3xl md:text-6xl text-center" />
          </div>
        </div>
      ) : (
        <>
          <div className="flex items-center justify-between border-b px-4 py-3">
            <div className="flex items-center gap-4">
              <div className="avatar">
                <div className="w-10 rounded-full">
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    alt=""
                  />
                </div>
              </div>
              <div className="text-sm">
                <p className="font-semibold">Mh Monzil</p>
              </div>
            </div>
            <button
              type="submit"
              className="btn btn-circle bg-transparent border-none hover:bg-[#111] flex items-center justify-center"
            >
              <SlOptions className="w-6 h-6 outline-none" />
            </button>
          </div>
          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
};

export default MessageContainer;
