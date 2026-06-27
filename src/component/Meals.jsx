import React from 'react'
import greekSalad from '../assets/greek_salad.jpg'
import bruchetta from '../assets/bruchetta.svg'
import lemonDessert from '../assets/lemon_dessert.jpg'
import { MdDeliveryDining } from "react-icons/md";

function Meals() {
  return (
    <section className="p-4 bg-transparent text-[var(--text)] mt-20">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <h2 className="font-heading font-[var(--weight-bold)] text-[length:var(--text-subtitle)]">This Week's Specials</h2>
        <button className="bg-[var(--secondary)] text-[length:var(--text-lead)] text-[var(--text)] font-[var(--weight-bold)] rounded-[var(--radius)] px-4 py-2 mt-4 hover:bg-[var(--primary)] hover:text-white transition-colors duration-300">Online Menu</button>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mt-4">
        <div className="flex flex-col space-y-4 bg-[var(--surface)] rounded-[var(--radius)] shadow-lg hover:-translate-y-2 transition-all">
          <img src={greekSalad} alt="Greek Salad" className="w-full object-cover h-[300px] rounded-t-[var(--radius)]" />
          <div className="flex justify-between items-center p-4">
            <h3 className="font-heading font-[var(--weight-bold)] text-[var(--text)] text-[length:var(--text-card-title)]">Greek Salad</h3>
            <span className="font-[var(--weight-bold)] text-[length:var(--text-card-title)] text-[var(--accent)]">$12.99</span>
          </div>
          <p className="text-[length:var(--text-body)] text-[var(--primary)] p-4 flex-grow">The famous Greek salad of crispy lettuce, peppers, tomatoes, and our Chicago special feta cheese, garnished with olive oil and red wine vinegar.</p>
          <a href="order a delivery" className="flex justify-start items-center p-4">
            <span className="font-[var(--weight-bold)] text-[length:var(--text-lead)] text-[var(--text)] mr-2">Order a delivery</span>
            <MdDeliveryDining className="text-[var(--text)] w-6 h-6" />
          </a>
        </div>
        <div className="flex flex-col space-y-4 bg-[var(--surface)] rounded-[var(--radius)] shadow-lg hover:-translate-y-2 transition-all">
          <img src={bruchetta} alt="Bruchetta" className="w-full object-cover h-[300px] rounded-t-[var(--radius)]" />
          <div className="flex justify-between items-center p-4">
            <h3 className="font-heading font-[var(--weight-bold)] text-[var(--text)] text-[length:var(--text-card-title)]">Bruchetta</h3>
            <span className="font-[var(--weight-bold)] text-[length:var(--text-card-title)] text-[var(--accent)]">$14.99</span>
          </div>
          <p className="text-[length:var(--text-body)] text-[var(--primary)] p-4 flex-grow">The perfect complement to your meal, our Bruchetta is made with fresh tomatoes, basil, and mozzarella cheese.</p>
          <a href="order a delivery" className="flex justify-start items-center p-4">
            <span className="font-[var(--weight-bold)] text-[length:var(--text-lead)] text-[var(--text)] mr-2">Order a delivery</span>
            <MdDeliveryDining className="text-[var(--text)] w-6 h-6" />
          </a>
        </div>
        <div className="flex flex-col space-y-4 bg-[var(--surface)] rounded-[var(--radius)] shadow-lg hover:-translate-y-2 transition-all">
            <img src={lemonDessert} alt="Lemon Dessert" className="w-full object-cover h-[300px] rounded-t-[var(--radius)]" />
            <div className="flex justify-between items-center p-4">
              <h3 className="font-heading font-[var(--weight-bold)] text-[var(--text)] text-[length:var(--text-card-title)]">Lemon Dessert</h3>
              <span className="font-[var(--weight-bold)] text-[length:var(--text-card-title)] text-[var(--accent)]">$16.99</span>
            </div>
            <p className="text-[length:var(--text-body)] text-[var(--primary)] p-4 flex-grow">The perfect ending to your meal, our Lemon Dessert is a refreshing blend of lemons, sugar, and cream.</p>
            <a href="order a delivery" className="flex justify-start items-center p-4">
                <span className="font-[var(--weight-bold)] text-[length:var(--text-lead)] text-[var(--text)] mr-2">Order a delivery</span>
                <MdDeliveryDining className="text-[var(--text)] w-6 h-6" />
            </a>
        </div>
      </div>
    </section>
  )
}

export default Meals