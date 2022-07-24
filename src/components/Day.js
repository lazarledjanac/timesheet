import React from "react";
import { useNavigate } from "react-router-dom";
import { DateTime } from "luxon";

export default function Day({ date }) {
  let navigate = useNavigate();
  const hours = 6;
  function addClass() {
    if (date > DateTime.now()) return "disable";
    if (hours == 0) return "";
    if (hours >= 6 && date.toFormat("y L") < DateTime.now().toFormat("y L"))
      return "positive previous";
    if (hours >= 6) return "positive";
    if (hours < 6 && date.toFormat("y L") < DateTime.now().toFormat("y L"))
      return "negative previous";
    if (hours < 6) return "negative";
  }
  return (
    <td className={addClass()}>
      <div className="date">
        <span>{date.toFormat("d")}.</span>
      </div>
      <div
        className="hours"
        onClick={() => {
          navigate(`/days/${date.toISODate()}`);
        }}
      >
        <a>Hours: {hours}</a>
      </div>
    </td>
  );
}
// klase za day: "positive", "positive previous", "negative" i "disable" i bez klase ako nema sati
