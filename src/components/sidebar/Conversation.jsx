const Conversation = () => {
  return (
    <>
      <div className="flex gap-2 items-center hover:bg-gray-800 rounded px-1 py-2 cursor-pointer">
        <div className="avatar online">
          <div className="w-12 rounded-full">
            <img
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-col flex-1">
            <p className="font-bold text-gray-200">Mh Monzil</p>
            <p>Last msg</p>
        </div>
      </div>
      <div className="divider my-0 py-0 h-1"></div>
    </>
  );
};

export default Conversation;
