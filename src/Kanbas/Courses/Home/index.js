import Modules from "../Modules";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./index.css";

function Home() {
  
  return (
    <div className="row">
      <div className="col-8">
        <Modules />
      </div>
      <div className="col-4">
        <div>
          <ul className="list-group normal-text">
            <li className="list-group-item list-group-item-secondary list-group-item-action mb-1">
              Import Existing Content
            </li>
            <li className="list-group-item list-group-item-secondary list-group-item-action mb-1">
              Import From Commons
            </li>
            <li className="list-group-item list-group-item-secondary list-group-item-action mb-1">
              Choose Home Page
            </li>
            <li className="list-group-item list-group-item-secondary list-group-item-action mb-1">
              View Course Stream
            </li>
            <li className="list-group-item list-group-item-secondary list-group-item-action mb-1">
              New Announcement
            </li>
            <li className="list-group-item list-group-item-secondary list-group-item-action mb-1">
              New Analytics
            </li>
            <li className="list-group-item list-group-item-secondary list-group-item-action mb-1">
              View Course Notifications
            </li>
          </ul>
        </div>
        <div className="todo-list">
          <h5>To Do</h5>
          <hr />
          <div>
            <div>
              <FontAwesomeIcon icon={faCircle} />
              <button className="ms-1" type="button">
                A1 - ENV + HTML
              </button>
              <div className="float-end">
                <span className="x">X</span>
              </div>
            </div>
            <p className="ms-4 x">100 points &#x2022; Sep 18 at 11:59 pm</p>
          </div>
          <div>
            <div>
              <FontAwesomeIcon className="" icon={faCircle} />
              <button className="ms-1" type="button">
                A2 - CSS + BOOTSTRAP
              </button>
              <div className="float-end">
                <span className="x">X</span>
              </div>
            </div>
            <p className="ms-4 x">100 points &#x2022; Oct 4 at 11:59 pm</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;