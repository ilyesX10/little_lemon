import React from 'react'
import heroImage from '../assets/hero_img.jpg'
function Header() {
  return (
    <div className="min-h-[420px] p-4 bg-[var(--primary)] text-[var(--white)] mt-20">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <div className="container inline-flex flex-col mx-auto">
                <h1 className="font-heading font-[var(--weight-bold)] text-[length:var(--text-display)] text-[var(--secondary)]">Little Lemon</h1>
                <h2 className="font-heading font-[var(--weight-bold)] text-[length:var(--text-subtitle)] text-white">Chicago</h2>
                <p className="text-white max-w-[25ch] text-[length:var(--text-lead)]">We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                <div>
                    <button className="bg-[var(--secondary)] text-[length:var(--text-lead)] text-[var(--text)] font-[var(--weight-bold)] rounded-[var(--radius)] px-4 py-2 mt-4 hover:bg-white hover:text-[var(--secondary)] transition-colors duration-300">Reserve a Table</button>
                </div>
            </div>
            <div className="flex md:justify-end justify-center items-center relative">
                <img src={heroImage} alt="Little Lemon Restaurant" className="md:relative static md:top-20  w-[375px] h-[400px] rounded-[var(--radius)] shadow-lg" />
            </div>
        </div>
    </div>
  )
}

export default Header