import React from 'react'
import BookingForm from './BookingForm'
function BookingPage() {
  return (
    <div className="mt-20 bg-[var(--surface)] h-[100vh]">
      <h1 className="font-heading text-[length:var(--text-display)] text-[var(--primary)] text-center p-4">Reserve a Table</h1>
      <p className="text-center text-[var(--text)] my-4">Choose a date and time to book your table at Little Lemon.</p>
      <BookingForm />
    </div>
  )
}

export default BookingPage