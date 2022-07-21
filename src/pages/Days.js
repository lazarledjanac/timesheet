import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { List, Week } from "../components";
import { useParams } from "react-router-dom";

export default function Days() {
  let { date } = useParams();

  const [totalHours, setTotalHours] = useState(0);

  const updateTotalHours = (hours) => {
    setTotalHours(hours);
  };

  useEffect(() => {
    updateTotalHours();
  }, []);
  return (
    <>
      <h2>
        <i className="ico timesheet">Days</i>
      </h2>
      <Week date={date} totalHours={totalHours} />
      <table className="default-table">
        <tbody>
          <tr>
            <th>
              Client <em>*(required field)</em>
            </th>
            <th>
              Project <em>*(required field)</em>
            </th>
            <th>Category</th>
            <th className="small">
              Time <em>*</em>
            </th>
            <th className="small">Overtime</th>
            <th></th>
          </tr>
          <List date={date} totalHours={(hours) => updateTotalHours(hours)} />
        </tbody>
      </table>

      <div className="total">
        <Link to={"../timesheet"}>
          <i></i>back to monthly view
        </Link>

        <span>
          Total hours: <em>{totalHours}</em>
        </span>
      </div>
    </>
  );
}
