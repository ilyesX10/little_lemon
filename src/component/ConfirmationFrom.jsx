function ConfirmationForm({children}) {
  return (
    <form className="bg-white p-8 rounded-[var(--radius)] shadow-lg space-y-6 sm:max-w-xl max-w-sm mx-auto" aria-label="Confirmation Form">
      <div className="space-y-2">
        <label htmlFor="name" className="block font-[var(--weight-bold)] text-[var(--text)]">
          Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="w-full p-3 border-2 border-[var(--surface)] rounded-[var(--radius)] focus:border-[var(--primary)] outline-none"
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="email" className="block font-[var(--weight-bold)] text-[var(--text)]">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full p-3 border-2 border-[var(--surface)] rounded-[var(--radius)] focus:border-[var(--primary)] outline-none"
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="tel" className="block font-[var(--weight-bold)] text-[var(--text)]">
          Phone Number
        </label>
        <input
          type="tel"
          id="tel"
          name="tel"
          className="w-full p-3 border-2 border-[var(--surface)] rounded-[var(--radius)] focus:border-[var(--primary)] outline-none"
        />
      </div>
      {children}
    </form>
  )
}
export default ConfirmationForm
