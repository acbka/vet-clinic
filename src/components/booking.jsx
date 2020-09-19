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
   //let date = today.getDate();
   let month = today.getMonth();
   let monthName = months[month].name;
   let year = today.getFullYear();

   let currentDate = +new Date(); 

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
      nextMonthEnd = 6 - lastDayWeek + 1;
   }

   let calendar = [];

   if (prevMonthStart !== 0) {
      for (let i = prevMonthStart; i <= months[prevMonth].days; i++) {
         calendar.push({day: new Date(year, prevMonth, i), bcolor: "#f5f5f5", color: "#ccc"});
      }
      for (let i = 1; i <= months[month].days; i++) {
         calendar.push({day: new Date(year, month, i), bcolor: "#fff", color: "#000"})
      }
      for (let i = 1; i < nextMonthEnd; i++) {
         calendar.push({day: new Date(year, nextMonth, i), bcolor: "#f5f5f5", color: "#ccc"})
      }
   }

   const weekDays = week.map((item, index) => 
      <li className="week-day" key={index}>{item}</li>
   )

   const dates = calendar.map((item, index) => { 
      let disabledDate = +new Date(item.day) - currentDate; 
      return <p className="one-day" style={{backgroundColor: item.bcolor, color: item.color, cursor: disabledDate > 0? "pointer" : "not-allowed", pointerEvents: disabledDate > 0? "auto" : "none"}}  key={index}>{item.day.getDate()}</p>
   })

   return(
      <div className="booking">
         <div className="booking-container" >
            <h2 className="booking-title">Записаться на прием</h2>
            <div className="booking-calendar">
               {monthName} {year}
            </div>
            <ul className="week">
               {weekDays}
            </ul>
            <div className="calendar-body">
               {dates}
            </div>
         </div>
         <div className="booking-layer">
            <img src={layer} alt=""/>
         </div>
      </div>
   )
}