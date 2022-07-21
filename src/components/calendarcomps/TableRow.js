import React from "react";
import Day from "./Day";

export default function TableRow({ date }) {
  let tableRow = [];
  for (let i = 0; i < 7; i++) {
    tableRow.push(<Day date={date.plus({ days: i })} key={date + i} />);
  }
  return <tr>{tableRow}</tr>;
}
