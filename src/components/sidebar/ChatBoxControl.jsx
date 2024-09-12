import { BiLogOut } from "react-icons/bi";

const ChatBoxControl = () => {
  return (
    <div className="flex items-center justify-between mt-6">
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
        <BiLogOut className="w-6 h-6 outline-none" />
      </button>
    </div>
  );
};

export default ChatBoxControl;
