import React, { useRef, useState } from "react"
import axios from "axios"
import {Route, Link } from "react-router-dom"
import {
  Scheduler,
  AgendaView,
  TimelineView,
  DayView,
  WeekView,
  MonthView,
} from "@progress/kendo-react-scheduler";

import logo from "../../assets/topLogo.png";
import "@progress/kendo-theme-default/dist/all.css";

import { sampleData, displayDate } from "./events-utc.js";
import "./style.scss";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db} from "../../firebase";
//import Calendar from "@ericz1803/react-google-calendar";
import { css } from "@emotion/react";
import Calendar from 'react-calendar'

const user = auth.currentUser;
const { v4:uuidV4 } = require('uuid') 

const Profile = () => {
  const [value, onChange] = useState(new Date());
  const [user] = useAuthState(auth);
  return (
    <div className="Profile">
      <div className="navBar">
        <img src={logo} alt="Logo" className="logo" />
        <div className="navBarRight">
          <div>
            <a href="/people" className="navBarRedirect">
              People
            </a>
            <Link to={`/workout/${uuidV4()}`} className="navBarRedirect">
              Join Room
            </Link>
            <a href = "/login" className="navBarRedirect">
              Log Out
            </a>
          </div>
          <img
            src="https://i.stack.imgur.com/dr5qp.jpg"
            alt="User Profile Pic"
            className="profilePic"
          />
        </div>
      </div>
      <div className="profileInfo">
        <div className="alignment">
          <div className="greeting">
            <p>Welcome,</p>
            <span>Rishav</span>
          </div>
          <div className="calendarContainer">
            <p>Rishav's Calendar</p>
            <div>
              <Calendar
                onChange={onChange}
                value={value}
              />
            </div>
          </div>
        </div>


        <div>
          <div className="leaderboardScores">
            <p className="title">Leaderboard</p>
            <div id="indstatdiv">
              <div id="indname">Varun Venkatesh</div>
              <div id="indstat">450</div>
            </div>
            <hr />
            <div id="indstatdiv">
              <div id="indname">Rishav Nair</div>
              <div id="indstat">275</div>
            </div>
            <hr />
            <div id="indstatdiv">
              <div id="indname">Hardik Pampati</div>
              <div id="indstat">230</div>
            </div>
            <hr />
            <div id="indstatdiv">
              <div id="indname">Test User</div>
              <div id="indstat">100</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;