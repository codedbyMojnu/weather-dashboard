import { useState } from "react";
import Favourite from "./Favourite";
import FavoriteModal from "./FavouriteModal";
import Logo from "./Logo";
import SearchInput from "./SearchInput";

export default function Header({ onSearch }) {
  const [showModal, setShowModal] = useState(false);

  function handleFavouriteClick() {
    setShowModal(!showModal);
  }
  return (
    <header className="">
      <nav className="container flex items-center justify-between py-6">
        <Logo />
        <div className="flex items-center gap-4 relative">
          <SearchInput onSearch={onSearch} />
          <Favourite onToggle={handleFavouriteClick} />
          {showModal && <FavoriteModal />}
        </div>
      </nav>
    </header>
  );
}
