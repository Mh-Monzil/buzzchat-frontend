import { IoSearchSharp } from "react-icons/io5";

const SearchBox = () => {
    return (
        <form className=" flex items-center gap-2 relative mb-2">
            <input type="text" placeholder="Search..." className="w-full bg-[#1D232A] px-5 py-3 rounded-full border border-teal-600 text-white" />
            <button type="submit" className="absolute right-0 btn btn-circle bg-transparent border-none hover:bg-[#111]">
                <IoSearchSharp className="w-6 h-6 outline-none" />
            </button>
        </form>
    );
};

export default SearchBox;