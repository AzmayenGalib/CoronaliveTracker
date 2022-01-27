/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";

export default function Covid() {
  const [helth, setData] = useState([]);
  const [test, setTest] = useState([]);
  const [effecte, setEffect] = useState([]);
  const [deth, setDeth] = useState([]);
  const [lhelth, setlhelth] = useState([]);
  const [leffect, setleffect] = useState([]);
  const [ldeth, setldeth] = useState([]);

  let date = new Date();
  let bar = date.getDay();
  let month = date.getMonth();
  let dat = date.getDate();
  let year = date.getFullYear();
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June ",
    "July",
    "Augest",
    "September",
    "October",
    "November",
    "December",
  ];
  let day = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "thursday",
    "Friday",
    "Saturday",
  ];

  const getdata = async () => {
    try {
      // eslint-disable-next-line no-unused-vars
      let resdata = await fetch("https://disease.sh/v3/covid-19/countries");
      let jsdata = await resdata.json();

      setData(jsdata[15].recovered);
      setTest(jsdata[15].tests);
      setEffect(jsdata[15].cases);
      setDeth(jsdata[15].deaths);
      setlhelth(jsdata[15].todayRecovered)
      setleffect(jsdata[15].todayCases)
      setldeth(jsdata[15].todayDeaths)

      console.log(jsdata[15]);
    } catch (err) {}
  };

  useEffect(() => {
    getdata();
  }, []);
  return (
    <div>
      <div className="live"></div>
      <h1 className="head">Bangladesh covid 19 live update</h1>
      <div className="board">
        <div className="box helth">
          <p>
            Total recovered
            <p id="numhelth">+{helth}</p>
            {day[bar] + " "}
            {months[month] + " "}
            {dat + " "}
            {year}
          
            <br></br>
            Number of recoveries from covid-19
          </p>
        </div>
        <div className="box test">
          <p>
            Total tests
            <p id="numtest">+{test}</p>
            {day[bar] + " "}
            {months[month] + " "}
            {dat + " "}
            {year}
            
            <br></br>
            Number of tests of covid-19
          </p>
        </div>
        <div className="box deth">
          <p>
            Total enfected
            <p id="numen">+{effecte}</p>
            {day[bar] + " "}
            {months[month] + " "}
            {dat + " "}
            {year}
            
            <br></br>
            Number of active cases of covid-19
            <br></br>
          </p>
        </div>
        <div className="box deth">
          <p>
            Total deaths
            <p id="numdeth">+{deth}</p>
            {day[bar] + " "}
            {months[month] + " "}
            {dat + " "}
            {year}
            
            <br></br>
            Number of deaths caused by covid-19
          </p>
        </div>
      </div>




      <h1 className="head">Today covid 19 live update</h1>
      <div id="lbord" className="lboard" >
      <div id="lbox" className="box helth lb">
          <p>
            Today recovered
            <p id="numhelth">+{lhelth}</p>
            {day[bar] + " "}
            {months[month] + " "}
            {dat + " "}
            {year}
            <br></br>
            
            Number of recoveries from covid-19
          </p>
          
        </div>
        <div id="lbox"  className="box deth lb">
          <p>
            Today enfected
            <p id="numen">+{leffect}</p>
            {day[bar] + " "}
            {months[month] + " "}
            {dat + " "}
            {year}
            
            <br></br>
            Number of active cases of covid-19
            <br></br>
          </p>
        </div>
        <div id="lbox"  className="box deth lb">
          <p>
            Today deaths
            <p id="numdeth">+{ldeth}</p>
            {day[bar] + " "}
            {months[month] + " "}
            {dat + " "}
            {year}
            
            <br></br>
            Number of deaths caused by covid-19
          </p>
        </div>
      </div>
    </div>
  );
}
