import './style.scss';
import { SideBar } from '../../components/'
// import { useState } from 'react';

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

export default function HomePage() {
    return (
        <main id="home-page" className="page-container">
            <div className="">
                <div className="">
                    <h2>Popular Courses</h2>
                    <div className="courses-container">
                        {
                            courses.map((course, i) => {
                                const {name} = course;
                                return (
                                    <div 
                                        key={i} 
                                        className="course-item math"
                                        style={{gridArea: `c${i+1}`}}
                                    >
                                        <h3 className="course-name">{name}</h3>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

                <div className="">
                    <h2>Weekly Schedule</h2>

                    <div className="">
                        {}
                        <div className="">
                            <h3 className="">class 1</h3>
                        </div>
                        <div className="">
                            <h3 className="">class 2</h3>
                        </div>
                        <div className="">
                            <h3 className="">class 3</h3>
                        </div>
                        <div className="">
                            <h3 className="">class 4</h3>
                        </div>
                    </div>
                </div>

                <div className="">
                    <h2>Recent Results</h2>

                    <div className="">
                        {}
                        <div className="">
                            <h3 className="">Biology Lab: A+</h3>
                        </div>
                        <div className="">
                            <h3 className="">Math exam: B</h3>
                        </div>
                        <div className="">
                            <h3 className="">History assignment: A</h3>
                        </div>
                    </div>
                </div>
            </div>

            <SideBar/>
        </main>
    )
}
