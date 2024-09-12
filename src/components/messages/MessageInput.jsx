import { IoSend } from "react-icons/io5";
import { RiAttachment2 } from "react-icons/ri";

const MessageInput = () => {
  return (
    <div>
      <form className="px-4 my-3">
        <div className="w-full flex items-center gap-2">
          <button
            type="submit"
            className=" btn btn-circle bg-transparent border-none hover:bg-[#111]"
          >
            <RiAttachment2 className="w-6 h-6 outline-none" />
          </button>
          <input
            type="text"
            className="border text-sm rounded-lg block w-full px-4 py-2.5 bg-[##1D232A] border-teal-600 text-white
                    "
            placeholder="Type a message..."
          />
          <button
            type="submit"
            className="btn btn-circle bg-transparent border-none hover:bg-[#111]"
          >
            <IoSend className="w-5 h-5 outline-none" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default MessageInput;
