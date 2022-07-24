import React, { useEffect, useState } from "react";
import { DateTime } from "luxon";
import { useNavigate } from "react-router-dom";
import TableRow from "../components/TableRow";

export default function TimeSheet() {
  let navigate = useNavigate();
  const now = DateTime.now();
  let year = now.year;
  let month = now.toFormat("LL");
  const [firstCalendarDay, setFirstCalendarDay] = useState(
    DateTime.fromISO(
      `${year}-W${DateTime.fromISO(`${year}-${month}`).weekNumber}-1`
    )
  );

  const [currentMonth, setCurrentMonth] = useState(now);

  const [totalHours, setTotalHours] = useState(0);

  let numberOfRows = () => {
    if (firstCalendarDay.toFormat("d LLLL") == "1 February") {
      return 4;
    } else if (
      firstCalendarDay.plus({ days: 7 }).startOf("months").toFormat("ccc") ==
        "Sat" ||
      firstCalendarDay.plus({ days: 7 }).startOf("months").toFormat("ccc") ==
        "Sun"
    )
      return 6;
    else return 5;
  };
  let renderRows = () => {
    let tableRows = [];
    for (let i = 0; i < numberOfRows(); i++) {
      tableRows.push(
        <TableRow
          date={firstCalendarDay.plus({ weeks: i })}
          key={firstCalendarDay + i}
        />
      );
    }
    return tableRows;
  };

  const previousMonth = () => {
    if (firstCalendarDay.minus({ weeks: 1 }).daysInMonth == 28)
      setFirstCalendarDay(firstCalendarDay.minus({ weeks: 4 }));
    else if (firstCalendarDay.toFormat("d") == 1)
      setFirstCalendarDay(firstCalendarDay.minus({ weeks: 5 }));
    else if (
      firstCalendarDay.startOf("months").toFormat("ccc") == "Sat" ||
      firstCalendarDay.startOf("months").toFormat("ccc") == "Sun"
    ) {
      setFirstCalendarDay(firstCalendarDay.minus({ weeks: 5 }));
    } else setFirstCalendarDay(firstCalendarDay.minus({ weeks: 4 }));
  };

  const nextMonth = () => {
    if (firstCalendarDay.daysInMonth == 28) {
      setFirstCalendarDay(firstCalendarDay.plus({ weeks: 4 }));
    } else if (
      firstCalendarDay.plus({ weeks: 1 }).endOf("months").toFormat("ccc") ==
      "Sun"
    ) {
      setFirstCalendarDay(firstCalendarDay.plus({ weeks: 5 }));
    } else if (numberOfRows() == 5) {
      setFirstCalendarDay(firstCalendarDay.plus({ weeks: 4 }));
    } else {
      setFirstCalendarDay(firstCalendarDay.plus({ weeks: 5 }));
    }
  };
  useEffect(() => {
    navigate(`/timesheet/${now.monthLong}`);
  }, []);
  useEffect(() => {
    navigate(`/timesheet/${currentMonth.monthLong}`);
  }, [currentMonth]);

  return (
    <>
      <h2>
        <i className="ico timesheet"></i>TimeSheet
      </h2>
      <div className="grey-box-wrap">
        <div className="top">
          <a
            className="prev"
            onClick={() => {
              setCurrentMonth(currentMonth.minus({ months: 1 }));
              navigate(`/timesheet/${currentMonth.toFormat("LLLL yyyy")}`);
              previousMonth();
            }}
          >
            <i className="zmdi zmdi-chevron-left"></i>previous month
          </a>
          <span className="center">{currentMonth.toFormat("LLLL yyyy")}</span>
          <a
            className="next"
            onClick={() => {
              setCurrentMonth(currentMonth.plus({ months: 1 }));
              navigate(`/timesheet/${currentMonth.toFormat("LLLL yyyy")}`);
              nextMonth();
            }}
          >
            next month<i className="zmdi zmdi-chevron-right"></i>
          </a>
        </div>
        <div className="bottom"></div>
      </div>
      <table className="month-table">
        <tbody>
          <tr className="head">
            <th>monday</th>
            <th>tuesday</th>
            <th>wednesday</th>
            <th>thursday</th>
            <th>friday</th>
            <th>saturday</th>
            <th>sunday</th>
          </tr>
          {renderRows()}
        </tbody>
      </table>
      <div className="total">
        <span>
          Total hours: <em>{totalHours}</em>
        </span>
      </div>
    </>
  );
}
