import React, { useEffect, useState } from "react";
import DaysListItem from "../calendarcomps/DaysListItem";

export default function List({ date, totalHours }) {
  const [show, setShow] = useState(true);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const [time, setTime] = useState(0);
  const [overTime, setOverTime] = useState(0);
  const [time1, setTime1] = useState(0);
  const [overTime1, setOverTime1] = useState(0);
  const [time2, setTime2] = useState(0);
  const [overTime2, setOverTime2] = useState(0);
  const [time3, setTime3] = useState(0);
  const [overTime3, setOverTime3] = useState(0);
  const [time4, setTime4] = useState(0);
  const [overTime4, setOverTime4] = useState(0);

  const addTime = (e) => {
    setTime(e.target.value);
  };
  const addOverTime = (e) => {
    setOverTime(e.target.value);
  };
  const addTime1 = (e) => {
    setTime1(e.target.value);
  };
  const addOverTime1 = (e) => {
    setOverTime1(e.target.value);
  };
  const addTime2 = (e) => {
    setTime2(e.target.value);
  };
  const addOverTime2 = (e) => {
    setOverTime2(e.target.value);
  };
  const addTime3 = (e) => {
    setTime3(e.target.value);
  };
  const addOverTime3 = (e) => {
    setOverTime3(e.target.value);
  };
  const addTime4 = (e) => {
    setTime4(e.target.value);
  };
  const addOverTime4 = (e) => {
    setOverTime4(e.target.value);
  };
  useEffect(() => {
    totalHours(
      parseFloat(time) +
        parseFloat(overTime) +
        parseFloat(time1) +
        parseFloat(overTime1) +
        parseFloat(time2) +
        parseFloat(overTime2) +
        parseFloat(time3) +
        parseFloat(overTime3) +
        parseFloat(time4) +
        parseFloat(overTime4)
    );
  }, [
    time,
    overTime,
    time1,
    overTime1,
    time2,
    overTime2,
    time3,
    overTime3,
    time4,
    overTime4,
  ]);

  return (
    <>
      {show && (
        <DaysListItem
          date={date}
          addTime={(e) => addTime(e)}
          addOverTime={(e) => addOverTime(e)}
          onChange={() => {
            setShow1(true);
          }}
          onDelete={() => {
            setShow(false);
            setTime(0);
            setOverTime(0);
          }}
          onClose={() => {
            setShow(false);
          }}
        />
      )}
      {show1 && (
        <DaysListItem
          date={date}
          addTime={(e) => addTime1(e)}
          addOverTime={(e) => addOverTime1(e)}
          onChange={() => {
            setShow2(true);
          }}
          onDelete={() => {
            setShow1(false);
            setTime1(0);
            setOverTime1(0);
          }}
          onClose={() => {
            setShow1(false);
          }}
        />
      )}
      {show2 && (
        <DaysListItem
          date={date}
          addTime={(e) => addTime2(e)}
          addOverTime={(e) => addOverTime2(e)}
          onChange={() => {
            setShow3(true);
          }}
          onDelete={() => {
            setShow2(false);
            setTime2(0);
            setOverTime2(0);
          }}
          onClose={() => {
            setShow2(false);
          }}
        />
      )}
      {show3 && (
        <DaysListItem
          date={date}
          addTime={(e) => addTime3(e)}
          addOverTime={(e) => addOverTime3(e)}
          onChange={() => {
            setShow4(true);
          }}
          onDelete={() => {
            setShow3(false);
            setTime3(0);
            setOverTime3(0);
          }}
          onClose={() => {
            setShow3(false);
          }}
        />
      )}
      {show4 && (
        <DaysListItem
          date={date}
          addTime={(e) => addTime4(e)}
          addOverTime={(e) => addOverTime4(e)}
          onChange={() => {
            setShow(true);
          }}
          onDelete={() => {
            setShow4(false);
            setTime4(0);
            setOverTime4(0);
          }}
          onClose={() => {
            setShow4(false);
          }}
        />
      )}
    </>
  );
}
