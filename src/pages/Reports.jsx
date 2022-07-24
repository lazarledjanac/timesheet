import React, { useEffect, useState } from "react";
import ListOfReports from "../components/ListOfReports";
import { DateTime } from "luxon";
import { ExportCSV, PrintComponent, PDF, Dropdown } from "../components";
import { useSelector, useDispatch } from "react-redux";
import { getAllReports, filterReports } from "../features/Reports";

function Reports() {
  const dispatch = useDispatch();
  const { clientList } = useSelector((state) => state.clients);
  const { projectList } = useSelector((state) => state.projects);
  const { memberList } = useSelector((state) => state.members);
  const reportList = useSelector((state) => state.reports.value);

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [member, setMember] = useState("");
  const [client, setClient] = useState("");
  const [project, setProject] = useState("");
  const [category, setCategory] = useState("");
  const [totalHours, setTotalHours] = useState();

  function sumTotalHours() {
    let hours = 0;
    for (let i = 0; i < reportList.length; i++) {
      hours += reportList[i].time;
    }
    setTotalHours(hours);
  }
  function reportsFilter(report) {
    return (
      (member == "" || report.member == member) &&
      (client == "" || report.client == client) &&
      (project == "" || report.project == project) &&
      (category == "" || report.category == category) &&
      (startDate == "" || DateTime.fromISO(report.date) >= startDate) &&
      (endDate == "" || DateTime.fromISO(report.date) <= endDate)
    );
  }
  function search() {
    reportList.filter(reportsFilter);
  }

  useEffect(() => {
    sumTotalHours();
  }, [reportList]);
  return (
    <>
      <h2>
        <i className="ico report"></i>Reports
      </h2>
      <div className="grey-box-wrap reports">
        <form>
          <ul className="form">
            <Dropdown
              label="Team Member:"
              objects={memberList}
              onChange={(e) => setMember(e.target.value)}
            />
            <li>
              <label>Category:</label>
              <select onChange={(e) => setCategory(e.target.value)}>
                <option value="">All</option>
                <option>Front-End-Development</option>
                <option>Web Design</option>
                <option>Back-End</option>
              </select>
            </li>
          </ul>
          <ul className="form">
            <Dropdown
              label="Client:"
              objects={clientList}
              onChange={(e) => setClient(e.target.value)}
            />
            <li>
              <label>Start date:</label>
              <input
                type="date"
                className="in-text datepicker"
                onChange={(e) => setStartDate(DateTime.fromISO(e.target.value))}
              />
            </li>
          </ul>
          <ul className="form last">
            <Dropdown
              label="Project:"
              objects={projectList}
              onChange={(e) => setProject(e.target.value)}
            />

            <li>
              <label>End date:</label>
              <input
                type="date"
                className="in-text datepicker"
                onChange={(e) => setEndDate(DateTime.fromISO(e.target.value))}
              />
            </li>
            <li>
              <input
                readOnly
                type="reset"
                className="btn orange right "
                defaultValue="Reset"
                style={{ width: "90px", height: "28px" }}
                onClick={() => {
                  dispatch(getAllReports());
                }}
              />
              <input
                readOnly
                type="search"
                className="btn green right"
                value="Search"
                style={{ width: "44px", height: "26px" }}
                onClick={() => {
                  dispatch(
                    filterReports({
                      member,
                      client,
                      project,
                      category,
                      startDate,
                      endDate,
                    })
                  );
                }}
              />
            </li>
          </ul>
        </form>
      </div>
      <ListOfReports />
      <div className="total">
        <span>
          Report total: <em>{totalHours}</em>
        </span>
      </div>
      <div className="grey-box-wrap reports">
        <div className="btns-inner">
          <PrintComponent />
          <a
            className="btn white"
            style={{ marginRight: 20 }}
            onClick={() => {
              PDF();
            }}
          >
            <span>Create PDF</span>
          </a>
          <ExportCSV fileName="REPORTS" />
        </div>
      </div>
    </>
  );
}
export default Reports;
