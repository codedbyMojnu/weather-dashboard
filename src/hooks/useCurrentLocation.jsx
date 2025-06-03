import { useEffect, useState } from "react";

export default function useCurrentLocation() {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  useEffect(() => {
    if (!navigator.geolocation) {
      console.log("এই ব্রাউজার লোকেশন সাপোর্ট করে না");
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);

  return { latitude, longitude };
}
