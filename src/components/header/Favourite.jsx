import heart from "../../assets/heart.svg";

export default function Favourite({ onToggle }) {
  return (
    <div
      className="p-2 hover:bg-black/30 cursor-pointer flex gap-2 items-center rounded-md transition-all"
      onClick={onToggle}
    >
      <img src={heart} alt="" />
      <span>Favourite Locations</span>
    </div>
  );
}
