import React, { useState } from 'react';
import { FormControl, InputLabel, Select, MenuItem, Button,Link,Container } from '@mui/material';

const showTimes = ['10:00 AM', '2:00 PM', '6:00 PM'];
const seatNumbers = ['A1', 'A2', 'A3', 'B1', 'B2', 'B3'];

const BookingForm = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedSeat, setSelectedSeat] = useState('');

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };

  const handleSeatChange = (event) => {
    setSelectedSeat(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`You have booked a ticket for ${selectedDate} at ${selectedTime} in seat ${selectedSeat}.`);
  };

  return (
    <Container>
    <div><h1>Movie Ticket Booking Page</h1></div>
    <form onSubmit={handleSubmit}>
      <FormControl fullWidth>
        <InputLabel>Date</InputLabel>
        <Select value={selectedDate} onChange={handleDateChange}>
          <MenuItem value={new Date()}>Today</MenuItem>
          <MenuItem value={new Date(new Date().getTime() + 24 * 60 * 60 * 1000)}>Tomorrow</MenuItem>
          <MenuItem value={new Date(new Date().getTime() + 2 * 24 * 60 * 60 * 1000)}>Day after tomorrow</MenuItem>
        </Select>
      </FormControl>
      <br /><br />
      <FormControl fullWidth>
        <InputLabel>Show Time</InputLabel>
        <Select value={selectedTime} onChange={handleTimeChange}>
          {showTimes.map((showTime) => (
            <MenuItem key={showTime} value={showTime}>
              {showTime}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <br /><br />
      <FormControl fullWidth>
        <InputLabel>Seat Number</InputLabel>
        <Select value={selectedSeat} onChange={handleSeatChange}>
          {seatNumbers.map((seatNumber) => (
            <MenuItem key={seatNumber} value={seatNumber}>
              {seatNumber}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <br /><br />
      <Link to={'booking'} >
        <Button variant="contained" color="primary" type="submit">
        Book Ticket
      </Button>
      </Link>
    </form>
    <br /><br />
    </Container>
  );
};

export default BookingForm;
