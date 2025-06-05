import temp from "../assets/icons/temp-max.svg";
import minTemp from "../assets/icons/temp-min.svg";

export default function getImage(key, value) {
    switch (key) {
        case "tempreture":
            return { title: "তাপমাত্রা", value, img: temp }

        case "minTempreture":
            return { title: "সর্বনিম্ন তাপমাত্রা", value, img: minTemp }

        default:
            return []

    }
}