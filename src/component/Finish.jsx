function Finish({children}) {
  return (
    <div className="bg-white p-6 rounded-[var(--radius)] shadow-lg sm:max-w-xl max-w-sm mx-auto text-center space-y-4">
      <div className="w-20 h-20 bg-[var(--primary)] rounded-full flex items-center justify-center mx-auto">
        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <h2 className="font-heading text-[length:var(--text-subtitle)] text-[var(--primary)]">
        Booking Confirmed!
      </h2>
      <p className="text-[var(--text)] text-[length:var(--text-lead)]">
        Thank you for your reservation. We look forward to serving you at Little Lemon.
      </p>
      <div className="p-4 space-y-2 text-left">
        <div className="flex justify-between bg-[var(--surface)] rounded-[var(--radius)] p-4 ">
          <span className="font-[var(--weight-bold)] text-[var(--text)]">Date</span>
          <span className="text-[var(--text)]">August 15, 2026</span>
        </div>
        <div className="flex justify-between bg-[var(--surface)] rounded-[var(--radius)] p-4 ">
          <span className="font-[var(--weight-bold)] text-[var(--text)]">Time</span>
          <span className="text-[var(--text)]">7:00 PM</span>
        </div>
        <div className="flex justify-between bg-[var(--surface)] rounded-[var(--radius)] p-4 ">
          <span className="font-[var(--weight-bold)] text-[var(--text)]">Guests</span>
          <span className="text-[var(--text)]">4 guests</span>
        </div>
      </div>
      {children}
    </div>
  )
}
export default Finish
