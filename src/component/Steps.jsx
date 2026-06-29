import React from 'react'

function Steps({step,dir}) {
  return (
    <div className='flex space-x-2 justify-center items-center w-full p-6'>
        <div className={`${step === 1 && "animate-shine"} flex justify-center items-center text-[var(--surface)] rounded-full w-12 h-12 bg-[var(--accent-light)] font-[var(--weight-bold)]`}>
            1
        </div>
        <div className='bar h-1 w-16  bg-[var(--accent-light)] rounded-sm'>
            <div className={`${step === 2 && dir === 1 && "animate-progress"} ${step === 1 && dir === 2 && "animate-progressReverse"} progressBar h-1 w-0 bg-[var(--accent)] rounded-sm`}/>
        </div>
        <div className={`${step === 2 && "animate-shine"} flex justify-center items-center text-[var(--surface)] rounded-full w-12 h-12 bg-[var(--accent-light)] font-[var(--weight-bold)]`}>
            2
        </div>
        <div className='bar h-1 w-16  bg-[var(--accent-light)] rounded-sm'>
            <div className={`${step === 3  && dir === 2 && "animate-progress"} ${step === 2 && dir === 3 && "animate-progressReverse"} progressBar h-1 w-0 bg-[var(--accent)] rounded-sm`}/>
        </div>
        <div className={`${step === 3 &&  "animate-shine"} flex justify-center items-center text-[var(--surface)] rounded-full w-12 h-12 bg-[var(--accent-light)] font-[var(--weight-bold)]`}>
            3
        </div>
    </div>
  )
}

export default Steps