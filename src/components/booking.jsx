import React from 'react'
import '../css/booking.css'
import layer from '../img/layer1.png'

export const Booking = () => {

   const week = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"]

   const months = [
      {name: "January",
      days: 31},
      {name: "February",
      days: 28},
      {name: "March",
      days: 31},
      {name: "April",
      days: 30},
      {name: "May",
      days: 31},
      {name: "June",
      days: 30},
      {name: "July",
      days: 31},
      {name: "August",
      days: 31},
      {name: "September",
      days: 30},
      {name: "October",
      days: 31},
      {name: "November",
      days: 30},
      {name: "December",
      days: 31},
   ]

   let today = new Date();
   let date = today.getDate();
   let month = today.getMonth();
   let monthName = months[month].name;
   let year = today.getFullYear();
   let day = today.getDay();

   let firstDay = new Date(year, month, 1);
   let firstDayWeek = firstDay.getDay();

   let prevMonth = month - 1;
   if (prevMonth < 0) prevMonth = 11;

   let nextMonth = month + 1;
   if (nextMonth > 11) nextMonth = 0;

   let prevMonthStart = 0;
   let nextMonthEnd = 0;

   if (firstDayWeek !== 0) {
      prevMonthStart = months[prevMonth].days - firstDayWeek + 1; 
   }

   let lastDay = new Date(year, month, months[month].days);
   let lastDayWeek = lastDay.getDay();
   if (lastDayWeek !== 6) {
      nextMonthEnd = 6 - lastDayWeek + 1;  console.log("rrr", nextMonthEnd)
   }

   let calendar = [];

   if (prevMonthStart !== 0) {
      for (let i = prevMonthStart; i <= months[prevMonth].days; i++) {
         calendar.push({day: i, color: "grey"})
      }
      for (let i = 1; i <= months[month].days; i++) {
         calendar.push({day: i, color: "black"})
      }
      for (let i = 1; i < nextMonthEnd; i++) {
         calendar.push({day: i, color: "grey"})
      }
   }
   console.log("rrr", calendar)

   

   






   return(
      <div className="booking">
         <div className="booking-container">
            <h2 className="booking-title">Записаться на прием</h2>
            <table className="booking-calendar">
		         <thead>		
			         <tr className="month">
				         <th colSpan="7">
					         <span className="monthName">{monthName} {year}</span>
					         <p  data-goto="2020-09-01" className="page-right"></p>				
                     </th>
                  </tr>
                  <tr className="days">
                     <th>mon</th>
                     <th>tue</th>
                     <th>wed</th>
                     <th>thu</th>
                     <th>fri</th>
                     <th>sat</th>				
                     <th>sun</th>			
                  </tr>
               </thead>
               <tbody>

                  
                  <tr className="week">
                     <td data-date="2020-07-27" className="prev-month prev-date">
                        <span className="date">
                           <span className="number">27</span>
                        </span>
                     </td>
                     <td data-date="2020-07-28" className="prev-month prev-date">
                        <span className="date">
                           <span className="number">28</span>
                        </span>
                     </td>
                     <td data-date="2020-07-29" className="prev-month prev-date">
                        <span className="date">
                           <span className="number">29</span>
                        </span>
                     </td>
                     <td data-date="2020-07-30" className="prev-month prev-date">
                        <span className="date">
                           <span className="number">30</span>
                        </span>
                     </td> 
                     <td data-date="2020-07-27" className="prev-month prev-date">
                        <span className="date">
                           <span className="number">27</span>
                        </span>
                     </td>
                     <td data-date="2020-07-27" className="prev-month prev-date">
                        <span className="date">
                           <span className="number">27</span>
                        </span>
                     </td>
                     <td data-date="2020-07-27" className="prev-month prev-date">
                        <span className="date">
                           <span className="number">27</span>
                        </span>
                     </td>           
                  </tr>		
                  <tr className="week">
                     <td data-date="2020-07-27" className="prev-month prev-date">
                        <span className="date">
                           <span className="number">27</span>
                        </span>
                     </td>
                     <td data-date="2020-07-28" className="prev-month prev-date">
                        <span className="date">
                           <span className="number">28</span>
                        </span>
                     </td>
                     <td data-date="2020-07-29" className="prev-month prev-date">
                        <span className="date">
                           <span className="number">29</span>
                        </span>
                     </td>
                     <td data-date="2020-07-30" className="prev-month prev-date">
                        <span className="date">
                           <span className="number">30</span>
                        </span>
                     </td> 
                     <td data-date="2020-07-27" className="prev-month prev-date">
                        <span className="date">
                           <span className="number">27</span>
                        </span>
                     </td>
                     <td data-date="2020-07-27" className="prev-month prev-date">
                        <span className="date">
                           <span className="number">27</span>
                        </span>
                     </td>
                     <td data-date="2020-07-27" className="prev-month prev-date">
                        <span className="date">
                           <span className="number">27</span>
                        </span>
                     </td>           
                  </tr>		
                  <tr className="week">
                     <td data-date="2020-07-27" className="prev-month prev-date">
                        <span className="date">
                           <span className="number">27</span>
                        </span>
                     </td>
                     <td data-date="2020-07-28" className="prev-month prev-date">
                        <span className="date">
                           <span className="number">28</span>
                        </span>
                     </td>
                     <td data-date="2020-07-29" className="prev-month prev-date">
                        <span className="date">
                           <span className="number">29</span>
                        </span>
                     </td>
                     <td data-date="2020-07-30" className="prev-month prev-date">
                        <span className="date">
                           <span className="number">30</span>
                        </span>
                     </td> 
                     <td data-date="2020-07-27" className="prev-month prev-date">
                        <span className="date">
                           <span className="number">27</span>
                        </span>
                     </td>
                     <td data-date="2020-07-27" className="prev-month prev-date">
                        <span className="date">
                           <span className="number">27</span>
                        </span>
                     </td>
                     <td data-date="2020-07-27" className="prev-month prev-date">
                        <span className="date">
                           <span className="number">27</span>
                        </span>
                     </td>           
                  </tr>		
                  <tr className="week">
                     <td data-date="2020-07-27" className="prev-month prev-date">
                        <span className="date">
                           <span className="number">27</span>
                        </span>
                     </td>
                     <td data-date="2020-07-28" className="prev-month prev-date">
                        <span className="date">
                           <span className="number">28</span>
                        </span>
                     </td>
                     <td data-date="2020-07-29" className="prev-month prev-date">
                        <span className="date">
                           <span className="number">29</span>
                        </span>
                     </td>
                     <td data-date="2020-07-30" className="prev-month prev-date">
                        <span className="date">
                           <span className="number">30</span>
                        </span>
                     </td> 
                     <td data-date="2020-07-27" className="prev-month prev-date">
                        <span className="date">
                           <span className="number">27</span>
                        </span>
                     </td>
                     <td data-date="2020-07-27" className="prev-month prev-date">
                        <span className="date">
                           <span className="number">27</span>
                        </span>
                     </td>
                     <td data-date="2020-07-27" className="prev-month prev-date">
                        <span className="date">
                           <span className="number">27</span>
                        </span>
                     </td>           
                  </tr>		
                  <tr className="week">
                     <td data-date="2020-07-27" className="prev-month prev-date">
                        <span className="date">
                           <span className="number">27</span>
                        </span>
                     </td>
                     <td data-date="2020-07-28" className="prev-month prev-date">
                        <span className="date">
                           <span className="number">28</span>
                        </span>
                     </td>
                     <td data-date="2020-07-29" className="prev-month prev-date">
                        <span className="date">
                           <span className="number">29</span>
                        </span>
                     </td>
                     <td data-date="2020-07-30" className="prev-month prev-date">
                        <span className="date">
                           <span className="number">30</span>
                        </span>
                     </td> 
                     <td data-date="2020-07-27" className="prev-month prev-date">
                        <span className="date">
                           <span className="number">27</span>
                        </span>
                     </td>
                     <td data-date="2020-07-27" className="prev-month prev-date">
                        <span className="date">
                           <span className="number">27</span>
                        </span>
                     </td>
                     <td data-date="2020-07-27" className="prev-month prev-date">
                        <span className="date">
                           <span className="number">27</span>
                        </span>
                     </td>           
                  </tr>		
               </tbody>
            </table>
         </div>
         
         <div className="booking-layer">
            <img src={layer} alt=""/>
         </div>
      </div>
   )
}