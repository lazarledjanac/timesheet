import { createSlice } from "@reduxjs/toolkit";
import { DateTime } from "luxon";
import { reportsMock } from "../mock/reports.mock";

const initialState = reportsMock;

export const reportSlice = createSlice({
  name: "reports",
  initialState: { value: initialState },
  reducers: {
    addReport: (state, action) => {
      state.value.push(action.payload);
    },
    getAllReports: (state) => {
      state.value = initialState;
    },
    filterReports: (state, action) => {
      const { member, client, project, category, startDate, endDate } =
        action.payload;
      function reportsFilter(report) {
        return (
          (member == "" || report.member == member) &&
          (client == "" || report.client == client) &&
          (project == "" || report.project == project) &&
          (category == "" || report.category == category) &&
          (startDate == "" || DateTime.fromISO(report.date) >= startDate) &&
          (action.payload.endDate == "" ||
            DateTime.fromISO(report.date) <= endDate)
        );
      }
      state.value = state.value.filter(reportsFilter);
    },
  },
});
export const { addReport, getAllReports, filterReports } = reportSlice.actions;
export default reportSlice.reducer;
