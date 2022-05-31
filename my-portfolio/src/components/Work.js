import React from 'react';
import PeopleEatery from '../assets/PeopleEatery.jpeg';
import Movies from '../assets/Movies.jpeg';
import Weather from '../assets/WeatherApp.jpeg';
import NoteTaker from '../assets/NoteTaker.jpeg';
import EmployeeTracker from '../assets/EmployeeTracker.png';
import WorkScheduler from '../assets/WorkScheduler.png';

function Work() {
    return (
        <div>
        <h1 id="Work"><strong>Portfolio</strong></h1>

                <div class="Work">
                
                <div class='Projects'><h3>Restaurant Menu Application</h3>
                    <a href="https://people-eatery.herokuapp.com/"target="_blank">
                    <img class='image' src={PeopleEatery} alt="People-Eatery" /></a>
                    <a href="https://github.com/namideo/people_eatery">https://github.com/namideo/people_eatery</a>
                </div>

                <div class='Projects'><h3>Movie Search Engine</h3>
                    <a href="https://itzhefe.github.io/Movies-you-will-love/" target="_blank">
                    <img class='image' src={Movies} alt="Movies" /></a>
                    <a href="https://github.com/namideo/Movies-you-will-love">https://github.com/namideo/Movies-you-will-love</a>
                </div>

                <div class='Projects'><h3>Weather Dashboard</h3>
                    <a href="https://namideo.github.io/Weather-Dashboard/" target="_blank">
                    <img class='image' src={Weather} alt="Weather Dashboard" /></a>
                    <a href="https://github.com/namideo/Weather-Dashboard">https://github.com/namideo/Weather-Dashboard</a>
                </div>

                <div class='Projects'><h3>Note Taker</h3>
                    <a href="https://nicknotetaker-app.herokuapp.com/" target="_blank">
                    <img class='image' src={NoteTaker} alt="Note Taker" /></a>
                    <a href="https://github.com/namideo/Note-Taker-Express.js">https://github.com/namideo/Note-Taker-Express.js</a>
                </div>

                <div class='Projects'><h3>Employee Tracker</h3>
                    <a href="https://drive.google.com/file/d/1Y3BpTe45-oqsPqaBQxQonuX2o5STnLhh/view" target="_blank">
                    <img class='image' src={EmployeeTracker} alt="Employee-Tracker" /></a>
                    <a href="https://github.com/namideo/Employee-Tracker-SQL">https://github.com/namideo/Employee-Tracker-SQL</a>
                </div>

                <div class='Projects'><h3>Work Scheduler</h3>
                    <a href="https://namideo.github.io/Work-Schedular/" target="_blank">
                    <img class='image' src={WorkScheduler} alt="Work-Scheduler" /></a>
                    <a href="https://github.com/namideo/Work-Schedular">https://github.com/namideo/Work-Schedular</a>
                </div>

                </div>
        </div>
    );
}

export default Work;