import React from "react";
import { useState } from "react";
import "./App.css";

export default function Validation() {
  const [date, setDate] = useState("");
  const [date2, setDate2] = useState("");
  const [mnth, setMnth] = useState("");
  const [mnth2, setMnth2] = useState("");
  const [year, setYear] = useState("");
  const [year2, setYear2] = useState("");
  const [errorD, setError] = useState("");

  function inputDate(e) {
    setDate(e.target.value);
    setError("Invalid Date");
  }
  function inputYr(e) {
    setYear(e.target.value);
    setError("Invalid Year");
  }
  function inputMnth(e) {
    setMnth(e.target.value);
    setError("Invalid Month");
  }

  function inputDate2(e) {
    setDate2(e.target.value);
    setError("Invalid Date");
  }
  function inputYr2(e) {
    setYear2(e.target.value);
    setError("Invalid Year");
  }
  function inputMnth2(e) {
    setMnth2(e.target.value);
    setError("Invalid Month");
  }

  function addData() {
    if (date === "") {
      setError("Date Empty");
    } else if (date2 === "") {
      setError("Date Empty");
    } else if (mnth === "") {
      setError("Month Empty");
    } else if (mnth2 === "") {
      setError("Month Empty");
    } else if (year === "") {
      setError("Year Empty");
    } else if (year2 === "") {
      setError("Year Empty");
    } else {
      if (
        date <= 31 &&
        date !== "" &&
        date > 0 &&
        date2 <= 31 &&
        date2 !== "" &&
        date2 > 0 &&
        mnth <= 12 &&
        mnth !== "" &&
        mnth > 0 &&
        mnth2 <= 12 &&
        mnth2 !== "" &&
        mnth2 > 0 &&
        year <= 2050 &&
        year !== "" &&
        +year.length === 4 &&
        year2 <= 2050 &&
        year2 !== "" &&
        +year2.length === 4
      ) {
        console.log("Data Saved");
      }
    }
  }

  return (
    <div className="container">
      <div className="main">
        <div className="left-div">
          <h4>Start Date : </h4>
          <div className="left-in">
            <div className="dd">
              <div>
                <input onChange={inputDate} placeholder="DD" />
              </div>
              {date === "" && errorD === "Date Empty" ? (
                <div className="notification">{errorD}</div>
              ) : date <= 31 ? null : (
                <div className="notification">{errorD}</div>
              )}
            </div>

            <div>
              <input onChange={inputMnth} placeholder="MM" />
              {mnth === "" && errorD === "Month Empty" ? (
                <div className="notification">{errorD}</div>
              ) : mnth <= 12 ? null : (
                <div className="notification">{errorD}</div>
              )}
            </div>

            <div>
              <input className="yr" onChange={inputYr} placeholder="YR" />
              {year === "" && errorD === "Month Empty" ? (
                <div className="notification">{errorD}</div>
              ) : year <= 2050 ? null : (
                <div className="notification">{errorD}</div>
              )}
            </div>
          </div>
        </div>

        <div className="right-div">
          <h4>Probation Date : </h4>
          <div className="right-in">
            <div>
              <input onChange={inputDate2} placeholder="DD" />
              {date2 === "" && errorD === "Date Empty" ? (
                <div className="notification">{errorD}</div>
              ) : date2 <= 31 ? null : (
                <div className="notification">{errorD}</div>
              )}
            </div>
            <div>
              <input onChange={inputMnth2} placeholder="MM" />
              {mnth2 === "" && errorD === "Month Empty" ? (
                <div className="notification">{errorD}</div>
              ) : mnth2 <= 12 ? null : (
                <div className="notification">{errorD}</div>
              )}
            </div>
            <div>
              <input className="yr" onChange={inputYr2} placeholder="YR" />
              {year2 === "" && errorD === "Month Empty" ? (
                <div className="notification">{errorD}</div>
              ) : year2 <= 2050 ? null : (
                <div className="notification">{errorD}</div>
              )}
            </div>
          </div>
        </div>
        <div className="bottom">
          <button onClick={addData}>Add</button>
        </div>
      </div>
    </div>
  );
}
