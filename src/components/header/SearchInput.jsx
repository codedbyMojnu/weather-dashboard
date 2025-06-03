import { useState } from "react";
import search from "../../assets/search.svg";

export default function SearchInput({ onSearch }) {
  const [text, setText] = useState("");
  return (
    <form action="#">
      <div className="flex items-center space-x-2 py-2 px-3 group focus-within:bg-black/30 transition-all border-b border-white/50 focus-within:border-b-0 focus-within:rounded-md">
        <input
          className="bg-transparent  placeholder:text-white text-white w-full text-xs md:text-base outline-none border-none"
          type="search"
          placeholder="Search Location"
          onChange={(e) => setText(e.target.value)}
          required
        />
        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            if (text.trim().length > 3) {
              onSearch(text);
            }
          }}
        >
          <img src={search} />
        </button>
      </div>
    </form>
  );
}
