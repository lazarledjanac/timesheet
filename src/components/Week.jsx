import { useEffect, useState } from "react";
import { DateTime } from "luxon";
import { useNavigate } from "react-router-dom";
import Weekday from "./Weekday";

export default function Week({ date }) {
  let navigate = useNavigate();
  date = DateTime.fromISO(date);
  const weekNumber = date.toFormat("WW");
  const year = date.toFormat("kkkk");
  let weekdays = [];

  useEffect(() => {
    setActiveState({
      ...activeState,
      activeDay: activeState.objects[date.toFormat("c")],
    });
  }, []);

  const [activeState, setActiveState] = useState({
    activeDay: null,
    objects: weekdays,
  });
  function toggleActive(index) {
    setActiveState({
      ...activeState,
      activeDay: activeState.objects[index],
    });
  }

  function toggleActiveStyles(index) {
    if (activeState.objects[index] === activeState.activeDay) {
      return "li active";
    } else {
      return "";
    }
  }
  const previousWeek = () => {
    date = date.minus({ weeks: 1 });
    navigate(`/days/${date.toISODate()}`);
  };
  const nextWeek = () => {
    date = date.plus({ weeks: 1 });
    navigate(`/days/${date.toISODate()}`);
  };

  for (let i = 1; i < 8; i++) {
    weekdays.push(
      <Weekday
        date={date}
        i={i}
        onClick={() => toggleActive(i)}
        className={toggleActiveStyles(i)}
      />
    );
  }
  const firstDayOfTheWeek = {
    month: DateTime.fromISO(`${year}-W${weekNumber}-${1}`).toFormat("LLLL"),
    day: DateTime.fromISO(`${year}-W${weekNumber}-${1}`).toFormat("d"),
  };
  const lastDayOfTheWeek = {
    month: DateTime.fromISO(`${year}-W${weekNumber}-${7}`).toFormat("LLLL"),
    day: DateTime.fromISO(`${year}-W${weekNumber}-${7}`).toFormat("d"),
  };

  return (
    <div className="grey-box-wrap">
      <div className="top">
        <a
          className="prev"
          onClick={() => {
            previousWeek();
          }}
        >
          <i className="zmdi zmdi-chevron-left"></i>previous week
        </a>
        <span className="center">
          {firstDayOfTheWeek.month},{firstDayOfTheWeek.day} -{" "}
          {lastDayOfTheWeek.month},{lastDayOfTheWeek.day} {year} (week{" "}
          {weekNumber})
        </span>
        <a
          className="next"
          onClick={() => {
            nextWeek();
          }}
        >
          next week<i className="zmdi zmdi-chevron-right"></i>
        </a>
      </div>
      <div className="bottom">
        <ul className="days">{weekdays}</ul>
      </div>
    </div>
  );
}
