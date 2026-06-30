import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

export const confirmationFormSchema = Yup.object({
  name: Yup.string()
    .matches(/^[^\d].*$/, 'Name cannot start with a number')
    .min(3, 'Name must be at least 3 characters')
    .required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  phone: Yup.string()
    .transform((value) => value === '' ? undefined : value)
    .matches(/^[\d\s\-\(\)\+]{7,15}$/, 'Invalid phone number'),
});

function ConfirmationForm({children,setName,setEmail,setPhone,dispatch}) {
  const fields = confirmationFormSchema;

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(fields)
  });

  const onSubmit = () => {
    dispatch({type:"increment"});
  }

  return (
    <form className="bg-white p-8 rounded-[var(--radius)] shadow-lg space-y-6 sm:max-w-xl max-w-sm mx-auto" aria-label="Confirmation Form">
      <div className="space-y-2">
        <label htmlFor="name" className="block font-[var(--weight-bold)] text-[var(--text)]">
          Name <span className="text-red-500">*</span>
        </label>
        <input
          {...register('name', {
            onChange: (e) => setName(e.target.value)
          })}
          placeholder="Yassine Dahmani"
          type="text"
          id="name"
          className={`${errors.name ? "border-red-500":""} w-full p-3 border-2 border-[var(--surface)] rounded-[var(--radius)]`}
        />
        {errors.name && <p className="text-red-500 px-3">{errors.name.message}</p>}
      </div>
      <div className="space-y-2">
        <label htmlFor="email" className="block font-[var(--weight-bold)] text-[var(--text)]">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          {...register('email', {
            onChange: (e) => setEmail(e.target.value)
          })}
          type="email"
          id="email"
          placeholder="Yassine@example.com"
          className={`${errors.email ? "border-red-500":""} w-full p-3 border-2 border-[var(--surface)] rounded-[var(--radius)]`}
        />
        {errors.email && <p className="text-red-500 px-3">{errors.email.message}</p>}
      </div>
      <div className="space-y-2">
        <label htmlFor="tel" className="block font-[var(--weight-bold)] text-[var(--text)]">
          Phone Number
        </label>
        <input
          {...register('phone', {
            onChange: (e) => setPhone(e.target.value)
          })}
          type="tel"
          placeholder="123-568-958"
          id="tel"
          className={`${errors.phone ? "border-red-500":""} w-full p-3 border-2 border-[var(--surface)] rounded-[var(--radius)]`}
        />
        {errors.phone && <p className="text-red-500 px-3">{errors.phone.message}</p>}
      </div>
      <button
        type="submit"
        className="w-full bg-[var(--secondary)] text-[var(--text)] font-[var(--weight-bold)] text-[length:var(--text-lead)] py-3 px-6 rounded-[var(--radius)] hover:bg-[var(--primary)] hover:text-white transition-all duration-300 cursor-pointer"
        aria-label="Submit Your Reservation"
        onClick={handleSubmit(onSubmit)}
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
    </form>
  )
}
export default ConfirmationForm
