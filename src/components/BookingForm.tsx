"use client";

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import { addBooking, removeBooking } from "@/redux/features/bookSlice";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import DateReserve from "@/components/DateReserve";
import { useState } from "react";

type UserProfile = {
  name: string;
  email: string;
  tel: string;
  createdAt: string;
};

type BookingFormProps = {
  profile: UserProfile | null;
};

export default function BookingForm({ profile }: BookingFormProps) {
  const dispatch = useDispatch<AppDispatch>();
  const bookItems = useSelector((state: RootState) => state.bookSlice.bookItems);

  const [formData, setFormData] = useState({
    nameLastname: profile?.name || "",
    tel: profile?.tel || "",
    venue: "",
    bookDate: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSelectChange = (e: any) => {
    setFormData({
      ...formData,
      venue: e.target.value,
    });
  };

  const handleDateChange = (date: string) => {
    setFormData({
      ...formData,
      bookDate: date,
    });
  };

  const handleBooking = () => {
    if (formData.nameLastname && formData.tel && formData.venue && formData.bookDate) {
      dispatch(addBooking(formData));
      // Reset form
      setFormData({
        nameLastname: profile?.name || "",
        tel: profile?.tel || "",
        venue: "",
        bookDate: "",
      });
    }
  };

  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-8 md:px-6">
      <h1 className="text-3xl font-semibold text-slate-800">Venue Booking</h1>

      {profile ? (
        <section className="mt-4 rounded-lg border border-stone-300 bg-stone-50 p-4 text-sm text-slate-800">
          <p><span className="font-semibold">Name:</span> {profile.name}</p>
          <p><span className="font-semibold">Email:</span> {profile.email}</p>
          <p><span className="font-semibold">Tel:</span> {profile.tel}</p>
          <p>
            <span className="font-semibold">Member Since:</span>{" "}
            {new Date(profile.createdAt).toLocaleDateString()}
          </p>
        </section>
      ) : null}

      <form className="mt-6 flex flex-col gap-4">
        <TextField
          name="nameLastname"
          label="Name-Lastname"
          variant="standard"
          value={formData.nameLastname}
          onChange={handleInputChange}
        />
        <TextField
          name="tel"
          label="Contact-Number"
          variant="standard"
          value={formData.tel}
          onChange={handleInputChange}
        />

        <FormControl variant="standard" sx={{ minWidth: 240 }}>
          <InputLabel id="venue-label">Venue</InputLabel>
          <Select
            id="venue"
            labelId="venue-label"
            value={formData.venue}
            onChange={handleSelectChange}
          >
            <MenuItem value="Bloom">The Bloom Pavilion</MenuItem>
            <MenuItem value="Spark">Spark Space</MenuItem>
            <MenuItem value="GrandTable">The Grand Table</MenuItem>
          </Select>
        </FormControl>

        <DateReserve onDateChange={handleDateChange} />

        <Button
          name="Book Venue"
          variant="contained"
          onClick={handleBooking}
        >
          Book Venue
        </Button>
      </form>

      {/* Display Bookings */}
      <section className="mt-8">
        <h2 className="text-2xl font-semibold text-slate-800">My Bookings</h2>
        {bookItems.length === 0 ? (
          <p className="mt-4 text-slate-600">No Venue Booking</p>
        ) : (
          <div className="mt-4 space-y-2">
            {bookItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between rounded-lg border border-stone-300 bg-stone-50 p-4"
              >
                <div>
                  <p><span className="font-semibold">Name:</span> {item.nameLastname}</p>
                  <p><span className="font-semibold">Tel:</span> {item.tel}</p>
                  <p><span className="font-semibold">Venue:</span> {item.venue}</p>
                  <p><span className="font-semibold">Date:</span> {item.bookDate}</p>
                </div>
                <Button
                  variant="outlined"
                  color="error"
                  onClick={() => dispatch(removeBooking(item))}
                >
                  Remove
                </Button>
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
