import React from "react";
import Report from "./Report";
import { useSelector } from "react-redux";

const ListOfReports = React.forwardRef((props, ref) => {
  const { filteredReports } = useSelector((state) => state.reports);

  return (
    <table className="default-table" ref={ref}>
      <tbody>
        <tr>
          <th>Date</th>
          <th>Team member</th>
          <th>Client</th>
          <th>Project</th>
          <th>Category</th>
          <th className="small">Time</th>
        </tr>
        {filteredReports.map((report, index) => (
          <Report
            key={index}
            date={report.date}
            member={report.member}
            client={report.client}
            project={report.project}
            category={report.category}
            time={report.time}
          />
        ))}
      </tbody>
    </table>
  );
});
export default ListOfReports;
