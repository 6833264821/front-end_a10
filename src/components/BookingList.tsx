"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

export default function BookingList() {
  const bookItems = useSelector((state: RootState) => state.bookSlice.bookItems);

  return (
    <div>
      {bookItems.length === 0 ? (
        <div>No Venue Booking</div>
      ) : (
        <div>
          {bookItems.map((item, index) => (
            <div key={index}>
              <p>{item.nameLastname}</p>
              <p>{item.tel}</p>
              <p>{item.venue}</p>
              <p>{item.bookDate}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
