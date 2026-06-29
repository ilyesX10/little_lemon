import { AiFillCheckCircle } from "react-icons/ai";
function Finish({children,date,time,diners,name}) {
  return (
    <div className="bg-white p-6 rounded-[var(--radius)] shadow-lg sm:max-w-xl max-w-sm mx-auto text-center space-y-4">
      <AiFillCheckCircle className="text-7xl text-[var(--primary)] mx-auto"/>
      <h2 className="font-heading text-[length:var(--text-subtitle)] text-[var(--primary)]">
        Booking Confirmed!
      </h2>
      <p className="text-[var(--text)] text-[length:var(--text-lead)]">
        Thank you <span className="font-[var(--weight-bold)]">{name}</span> for your reservation. We look forward to serving you at Little Lemon.
      </p>
      <div className="p-4 space-y-2 text-left">
        <div className="flex justify-between bg-[var(--surface)] rounded-[var(--radius)] p-4 ">
          <span className="font-[var(--weight-bold)] text-[var(--text)]">Date</span>
          <span className="text-[var(--text)]">{date}</span>
        </div>
        <div className="flex justify-between bg-[var(--surface)] rounded-[var(--radius)] p-4 ">
          <span className="font-[var(--weight-bold)] text-[var(--text)]">Time</span>
          <span className="text-[var(--text)]">{time}</span>
        </div>
        <div className="flex justify-between bg-[var(--surface)] rounded-[var(--radius)] p-4 ">
          <span className="font-[var(--weight-bold)] text-[var(--text)]">Guests</span>
          <span className="text-[var(--text)]">{diners} guests</span>
        </div>
      </div>
      {children}
    </div>
  )
}
export default Finish
