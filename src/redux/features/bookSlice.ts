import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface BookingItem {
  nameLastname: string;
  tel: string;
  venue: string;
  bookDate: string;
}

interface BookState {
  bookItems: BookingItem[];
}

const initialState: BookState = {
  bookItems: [],
};

const bookSlice = createSlice({
  name: "bookSlice",
  initialState,
  reducers: {
    addBooking: (state, action: PayloadAction<BookingItem>) => {
      const newBooking = action.payload;
      
      // Find if this venue+date combination already exists
      const existingIndex = state.bookItems.findIndex(
        (item) => item.venue === newBooking.venue && item.bookDate === newBooking.bookDate
      );
      
      if (existingIndex >= 0) {
        // Replace existing booking with same venue+date
        state.bookItems[existingIndex] = newBooking;
      } else {
        // Add new booking if no duplicate
        state.bookItems.push(newBooking);
      }
    },
    removeBooking: (state, action: PayloadAction<BookingItem>) => {
      const bookingToRemove = action.payload;
      
      // Remove the booking that matches all fields
      state.bookItems = state.bookItems.filter(
        (item) =>
          !(
            item.nameLastname === bookingToRemove.nameLastname &&
            item.tel === bookingToRemove.tel &&
            item.venue === bookingToRemove.venue &&
            item.bookDate === bookingToRemove.bookDate
          )
      );
    },
  },
});

export const { addBooking, removeBooking } = bookSlice.actions;
export { bookSlice };
export default bookSlice.reducer;
