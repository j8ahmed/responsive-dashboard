import './style.scss';
import { SideBar } from '../../components/'
// import { useState } from 'react';

const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT",];
const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

const courses = [
    {
        name: "math",
        img: "",
    },
    {
        name: "art",
        img: "",
    },
    {
        name: "history",
        img: "",
    },
    {
        name: "biology",
        img: "",
    },
    {
        name: "chemistry",
        img: "",
    },
    {
        name: "physics",
        img: "",
    },
]

// get the next day of the week (sunday - monday) = (0 - 6)
const getNextDayOfWeek = (day) => {
    const d = new Date();
    d.setDate( d.getDate() + ((day + (7 - d.getDay()) % 7) || 7) )
    return d
}

const schedule = [
    {
        date: getNextDayOfWeek(1),
        className: "Math"
    },
    {
        date: getNextDayOfWeek(2),
        className: "art"
    },
    {
        date: getNextDayOfWeek(4),
        className: "history"
    },
    {
        date: getNextDayOfWeek(5),
        className: "Physics"
    },
]

export default function HomePage() {
    return (
        <main id="home-page" className="page-container">
            <div id="content-container">
                <div className="">
                    <h2>Popular Courses</h2>
                    <div className="courses-container">
                        {
                            courses.map((course, i) => {
                                const {name} = course;
                                return (
                                    <div 
                                        key={i} 
                                        className={`course-item c${i+1}`}
                                    >
                                        <h3 className="course-name">{name}</h3>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

                <section id="schedule" className="">
                    <h2>Weekly Schedule</h2>

                    <div id="schedule-container">
                        {
                            schedule.map((classEvent, i) => {
                                const {date, className} = classEvent;
                                return (
                                    <div key={i} className="schedule-item">
                                        <h3 className="date">
                                            <span id="monthday">{date.getDate()}</span>
                                            <span id="weekday">{days[date.getDay()]}</span>
                                        </h3>
                                        <h3 className="class-name">{className}</h3>
                                    </div>
                                )
                            })
                        }
                    </div>
                </section>
            </div>

            <SideBar/>
        </main>
    )
}
