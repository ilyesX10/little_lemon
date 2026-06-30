import {useState,useEffect} from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

function BookingForm({children,availableTimes,updateTimes,date,time,diners,occasion,setDate,setTime,setDiners,setOccasion,dispatch}) {
  async function getDates (date) {
    return await fetchAPI(date);
  }
  const handleDateChange = async (e) => {
    const selected = e.target.value;
    setDate(selected);
    const times = await getDates(new Date(selected));
    updateTimes({ type: 'dateChange', payload: times });
  }
  const fields = Yup.object({
    date: Yup.string().required('Date is required'),
    time: Yup.string().required('Time is required'),
    diners: Yup.number()
      .transform((value, originalValue) => originalValue === '' ? undefined : value)
      .min(1, 'At least 1 guest')
      .max(10, 'Maximum 10 guests')
      .required('Number of guests is required'),
    occasion: Yup.string().required('Occasion is required'),
  });
  const { register, handleSubmit,watch, formState: { errors } } = useForm({
    resolver: yupResolver(fields)
  });
    const watchedDiners = watch('diners');
    console.log('watched diners:', watchedDiners);
    console.log('errors:', errors);
  async function submitForm (date,time,diners,occasion) {
    const result = await submitAPI({
                    date: date,
                    time: time,
                    diners: diners,
                    occasion: occasion
                  });
    return result;
  }
    const onSubmit = async (data) => {
      const result = await submitAPI(data);
      console.log('form data:', data);
      if (result) {
        dispatch({ type: 'increment' });
      }
    }
  return (
    <form className="bg-white p-8 rounded-[var(--radius)] shadow-lg space-y-6 sm:max-w-xl max-w-sm mx-auto" aria-label="Booking Form">
      <div className="space-y-2">
        <label htmlFor="date" className="block font-[var(--weight-bold)] text-[var(--text)]">
          Date <span className="text-red-500">*</span>
        </label>
        <input
          onChange={handleDateChange}
          {...register('date')}
          type="date"
          id="date"
          name="date"
          className="w-full p-3 border-2 border-[var(--surface)] rounded-[var(--radius)] focus:border-[var(--primary)] outline-none"
        />
        {errors.date && <p className="text-red-500 px-3">{errors.date.message}</p>}
      </div>
      <div className="space-y-2">
        <label htmlFor="time" className="block font-[var(--weight-bold)] text-[var(--text)]">
          Time <span className="text-red-500">*</span>
        </label>
        <select
          onChange={(e)=>{setTime(prev=>e.target.value)}}
          {...register('time')}
          defaultValue=""
          id="time"
          name="time"
          className="w-full p-3 border-2 border-[var(--surface)] rounded-[var(--radius)] focus:border-[var(--primary)] outline-none"
        >
          <option value="" disabled>
              choose the time
          </option>
          {availableTimes.map((e) => {
            return (
              <option key={e} value={e}>
                {e}
              </option>
            );
          })}
        </select>
        {errors.time && <p className="text-red-500 px-3">{errors.time.message}</p>}
      </div>
      <div className="space-y-2">
        <label htmlFor="guests" className="block font-[var(--weight-bold)] text-[var(--text)]">
          Number of Guests <span className="text-red-500">*</span>
        </label>
        <input
          {...register('diners')}
           onChange={(e)=>{setDiners(prev=>e.target.value)}}
          type="number"
          id="guests"
          name="guests"
          min={1}
          max={10}
          className="w-full p-3 border-2 border-[var(--surface)] rounded-[var(--radius)] focus:border-[var(--primary)] outline-none"
        />
      </div>
      {errors.diners && <p className="text-red-500 px-3">{errors.diners.message}</p>}
      <div className="space-y-2">
        <label htmlFor="occasion" className="block font-[var(--weight-bold)] text-[var(--text)]">
          Occasion
        </label>
        <select
          onChange={(e)=>{setOccasion(prev=>e.target.value)}}
          {...register('occasion')}
          defaultValue=""
          id="occasion"
          name="occasion"
          className="w-full p-3 border-2 border-[var(--surface)] rounded-[var(--radius)] focus:border-[var(--primary)] outline-none"
        >
          <option value="" disabled>choose the occasion</option>
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
          <option value="Engagement">Engagement</option>
          <option value="Other">Other</option>
        </select>
        {errors.occasion && <p className="text-red-500 px-3">{errors.occasion.message}</p>}
        </div>
        <button
              type="button"
              className="w-full bg-[var(--secondary)] text-[var(--text)] font-[var(--weight-bold)] text-[length:var(--text-lead)] py-3 px-6 rounded-[var(--radius)] hover:bg-[var(--primary)] hover:text-white transition-all duration-300 cursor-pointer"
              aria-label="Make Your Reservation"
              onClick={
                handleSubmit(onSubmit)
              }
            >
              Make Your Reservation
          </button>
    </form>
  )
}
export default BookingForm