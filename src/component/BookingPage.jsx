import { useReducer } from 'react'
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
      case 'dateChange': return {times : [...currentTimes.times] } ;
    }
}

function BookingPage() {
  const [step,dispatch] = useReducer(reducer,{state : 1,prev: undefined})
  const [initializeTimes,dispatchtime] = useReducer(updateTimes,{times : ["17:00", "18:00", "19:00", "20:00", "21:00"]})
  return (
    <div className="mt-20 bg-[var(--surface)] h-[100hvh] p-6">
      <h1 className="font-heading text-[length:var(--text-display)] text-[var(--primary)] text-center">Reserve a Table</h1>
      <p className="text-center text-[var(--text)] my-4">Choose a date and time to book your table at Little Lemon.</p>
      <Steps step={step.state} dir={step.prev}/>
      {
        step.state === 1?(
          <BookingForm availableTimes={initializeTimes} updateTimes={dispatchtime}>
            <button
              type="button"
              className="w-full bg-[var(--secondary)] text-[var(--text)] font-[var(--weight-bold)] text-[length:var(--text-lead)] py-3 px-6 rounded-[var(--radius)] hover:bg-[var(--primary)] hover:text-white transition-all duration-300 cursor-pointer"
              aria-label="On Click"
              onClick={()=>dispatch({type:"increment"})}
            >
              Make Your Reservation
            </button>
          </BookingForm>
        ): step.state === 2? (
          <ConfirmationFrom>
            <button
              type="button"
              className="w-full bg-[var(--secondary)] text-[var(--text)] font-[var(--weight-bold)] text-[length:var(--text-lead)] py-3 px-6 rounded-[var(--radius)] hover:bg-[var(--primary)] hover:text-white transition-all duration-300 cursor-pointer"
              aria-label="On Click"
              onClick={()=>dispatch({type:"increment"})}
            >
              Make Your Reservation
            </button>
            <button
              type="button"
              className="w-full bg-[var(--secondary)] text-[var(--text)] font-[var(--weight-bold)] text-[length:var(--text-lead)] py-3 px-6 rounded-[var(--radius)] hover:bg-[var(--primary)] hover:text-white transition-all duration-300 cursor-pointer"
              aria-label="On Click"
              onClick={()=>dispatch({type:"decrement"})}
            >
              Previous
            </button>
          </ConfirmationFrom>
        ):(
          <Finish>
            <button
              type="button"
              className="w-full bg-[var(--secondary)] text-[var(--text)] font-[var(--weight-bold)] text-[length:var(--text-lead)] py-3 px-6 rounded-[var(--radius)] hover:bg-[var(--primary)] hover:text-white transition-all duration-300 cursor-pointer"
              aria-label="On Click"
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