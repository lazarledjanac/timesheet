import React, { useEffect } from "react";
import ListOfReports from "../components/ListOfReports";
import { DateTime } from "luxon";
import { ExportCSV, PrintComponent, PDF, Dropdown } from "../components";
import { useSelector, useDispatch } from "react-redux";
import {
  getAllReports,
  resetReports,
  changeMember,
  changeClient,
  changeProject,
  changeCategory,
  changeEndDate,
  changeStartDate,
  sumTotalHours,
  clearStartDate,
  clearEndDate,
} from "../features/Reports";

function Reports() {
  const dispatch = useDispatch();
  const { filteredReports, totalHours } = useSelector((store) => store.reports);

  useEffect(() => {
    dispatch(getAllReports());
  }, []);
  useEffect(() => {
    dispatch(sumTotalHours());
  }, [filteredReports]);

  return (
    <>
      <h2>
        <i className="ico report"></i>Reports
      </h2>
      <div className="grey-box-wrap reports">
        <form>
          <ul className="form">
            <Dropdown
              list="members"
              label="Team Member"
              onChange={(e) => dispatch(changeMember(e.target.value))}
            />
            <li>
              <label>Category:</label>
              <select
                onChange={(e) => dispatch(changeCategory(e.target.value))}
              >
                <option value="">All</option>
                <option>Front-End-Development</option>
                <option>Web Design</option>
                <option>Back-End</option>
              </select>
            </li>
          </ul>
          <ul className="form">
            <Dropdown
              list="clients"
              label="Client"
              onChange={(e) => dispatch(changeClient(e.target.value))}
            />
            <label>Start Date:</label>
            <li style={{ display: "inline-flex" }}>
              <input
                type="date"
                className="in-text datepicker"
                onChange={(e) =>
                  dispatch(changeStartDate(DateTime.fromISO(e.target.value)))
                }
              />
              <button
                onClick={() => {
                  dispatch(clearStartDate());
                }}
              >
                Clear
              </button>
            </li>
          </ul>
          <ul className="form last">
            <Dropdown
              list="projects"
              label="Project"
              onChange={(e) => dispatch(changeProject(e.target.value))}
            />

            <label>End date:</label>
            <li style={{ display: "inline-flex" }}>
              <input
                type="date"
                className="in-text datepicker"
                onChange={(e) =>
                  dispatch(changeEndDate(DateTime.fromISO(e.target.value)))
                }
              />
              <button
                onClick={() => {
                  dispatch(clearEndDate());
                }}
              >
                Clear
              </button>
            </li>
            <li>
              <input
                readOnly
                type="reset"
                className="btn orange right "
                value="Reset"
                style={{ width: "90px", height: "28px" }}
                onClick={() => {
                  dispatch(resetReports());
                }}
              />
              <input
                readOnly
                type="search"
                className="btn green right"
                value="Search"
                style={{ width: "44px", height: "26px" }}
                onClick={() => {
                  dispatch(getAllReports());
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
