
function BookingForm({children}) {
  return (
    <form className="bg-white p-8 rounded-[var(--radius)] shadow-lg space-y-6 sm:max-w-xl max-w-sm mx-auto" aria-label="Booking Form">
      <div className="space-y-2">
        <label htmlFor="date" className="block font-[var(--weight-bold)] text-[var(--text)]">
          Date <span className="text-red-500">*</span>
        </label>
        <input
          type="date"
          id="date"
          name="date"
          className="w-full p-3 border-2 border-[var(--surface)] rounded-[var(--radius)] focus:border-[var(--primary)] outline-none"
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="time" className="block font-[var(--weight-bold)] text-[var(--text)]">
          Time <span className="text-red-500">*</span>
        </label>
        <select
          id="time"
          name="time"
          className="w-full p-3 border-2 border-[var(--surface)] rounded-[var(--radius)] focus:border-[var(--primary)] outline-none"
        >
          <option value="" selected>Select a time</option>
          <option value="">17:00</option>
          <option value="">18:00</option>
          <option value="">19:00</option>
          <option value="">20:00</option>
        </select>
      </div>
      <div className="space-y-2">
        <label htmlFor="guests" className="block font-[var(--weight-bold)] text-[var(--text)]">
          Number of Guests <span className="text-red-500">*</span>
        </label>
        <input
          type="number"
          id="guests"
          name="guests"
          min={1}
          max={10}
          className="w-full p-3 border-2 border-[var(--surface)] rounded-[var(--radius)] focus:border-[var(--primary)] outline-none"
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="occasion" className="block font-[var(--weight-bold)] text-[var(--text)]">
          Occasion
        </label>
        <select
          id="occasion"
          name="occasion"
          className="w-full p-3 border-2 border-[var(--surface)] rounded-[var(--radius)] focus:border-[var(--primary)] outline-none"
        >
          <option>Birthday</option>
          <option>Anniversary</option>
          <option>Engagement</option>
          <option>Other</option>
        </select>
      </div>
      {children}
    </form>
  )
}
export default BookingForm
