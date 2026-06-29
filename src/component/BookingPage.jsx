import { useReducer,useState } from 'react'
import BookingForm from './BookingForm'
import Steps from './Steps'
import ConfirmationFrom from './ConfirmationFrom'
import Finish from './Finish'
function reducer(step,action){
    switch(action.type){
      case 'increment': return {state: step.state + 1,prev: step.state};
      case 'decrement': return {state: step.state - 1,prev: step.state};
    }
  }

function updateTimes(currentTimes,action){
    switch(action.type){
      case 'dateChange': return {times : action.payload } ;
    }
}
async function submitForm (date,time,nbrGuess,occasion) {
  const result = await submitAPI({
                  date: date,
                  time: time,
                  diners: nbrGuess,
                  occasion: occasion
                });
  console.log(
    date,
    time,
    nbrGuess,
    occasion,
    result
  )
  return result;
}
function BookingPage() {
  const [date,setDate] = useState(null)
  const [time,setTime] = useState(null)
  const [nbrGuess,setNbrGuess] = useState(0)
  const [occasion,setOccasion] = useState("")
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [phone,setPhone] = useState(0)
  const [step,dispatch] = useReducer(reducer,{state : 1,prev: undefined})
  const [initializeTimes,dispatchtime] = useReducer(updateTimes,{times : ["17:00", "18:00", "19:00", "20:00", "21:00"]})
  return (
    <div className="mt-20 bg-[var(--surface)] h-[100hvh] p-6">
      <h1 className="font-heading text-[length:var(--text-display)] text-[var(--primary)] text-center">Reserve a Table</h1>
      <p className="text-center text-[var(--text)] my-4">Choose a date and time to book your table at Little Lemon.</p>
      <Steps step={step.state} dir={step.prev}/>
      {
        step.state === 1?(
          <BookingForm
          availableTimes={initializeTimes.times}
          updateTimes={dispatchtime}
          setDate={setDate}
          setTime={setTime}
          setDiners={setNbrGuess}
          setOccasion={setOccasion}
          >
          <button
              type="button"
              className="w-full bg-[var(--secondary)] text-[var(--text)] font-[var(--weight-bold)] text-[length:var(--text-lead)] py-3 px-6 rounded-[var(--radius)] hover:bg-[var(--primary)] hover:text-white transition-all duration-300 cursor-pointer"
              aria-label="Make Your Reservation"
              onClick={()=>{
                submitForm(date,time,nbrGuess,occasion)
                dispatch({type:"increment"})
              }}
            >
              Make Your Reservation
            </button>
          </BookingForm>
        ): step.state === 2? (
          <ConfirmationFrom
            setName={setName}
            setEmail={setEmail}
            setPhone={setPhone}
          >
            <button
              type="button"
              className="w-full bg-[var(--secondary)] text-[var(--text)] font-[var(--weight-bold)] text-[length:var(--text-lead)] py-3 px-6 rounded-[var(--radius)] hover:bg-[var(--primary)] hover:text-white transition-all duration-300 cursor-pointer"
              aria-label="Submit Your Reservation"
              onClick={()=>dispatch({type:"increment"})}
            >
              Submit Your Reservation
            </button>
            <button
              type="button"
              className="w-full bg-[var(--secondary)] text-[var(--text)] font-[var(--weight-bold)] text-[length:var(--text-lead)] py-3 px-6 rounded-[var(--radius)] hover:bg-[var(--primary)] hover:text-white transition-all duration-300 cursor-pointer"
              aria-label="Previous"
              onClick={()=>dispatch({type:"decrement"})}
            >
              Previous
            </button>
          </ConfirmationFrom>
        ):(
          <Finish
            date={date}
            time={time}
            diners={nbrGuess}
            name={name}
          >
            <button
              type="button"
              className="w-full bg-[var(--secondary)] text-[var(--text)] font-[var(--weight-bold)] text-[length:var(--text-lead)] py-3 px-6 rounded-[var(--radius)] hover:bg-[var(--primary)] hover:text-white transition-all duration-300 cursor-pointer"
              aria-label="Previous"
              onClick={()=>dispatch({type:"decrement"})}
            >
              Previous
            </button>
          </Finish>
        )
         }
    </div>
  )
}

export default BookingPage