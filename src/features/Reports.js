import { createSlice } from "@reduxjs/toolkit";
import { DateTime } from "luxon";
import { reportsMock } from "../mock/reports.mock";

const initialState = {
  reportList: reportsMock,
  filteredReports: [],
  startDate: null,
  endDate: null,
  member: "",
  client: "",
  project: "",
  category: "",
  totalHours: 0,
};

export const reportSlice = createSlice({
  name: "reports",
  initialState,
  reducers: {
    addReport: (state, action) => {
      state.reportList.push(action.payload);
    },
    getAllReports: (state) => {
      function reportsFilter(report) {
        return (
          (state.member === "" || report.member === state.member) &&
          (state.client === "" || report.client === state.client) &&
          (state.project === "" || report.project === state.project) &&
          (state.category === "" || report.category === state.category) &&
          (state.startDate === null ||
            DateTime.fromISO(report.date) >= state.startDate) &&
          (state.endDate === null ||
            DateTime.fromISO(report.date) <= state.endDate)
        );
      }
      state.filteredReports = state.reportList.filter(reportsFilter);
    },
    resetReports: (state) => {
      state.filteredReports = state.reportList;
    },
    changeMember: (state, { payload }) => {
      if (payload === "") state.member = payload;
      state.member = payload;
    },
    changeClient: (state, { payload }) => {
      state.client = payload;
    },
    changeProject: (state, { payload }) => {
      state.project = payload;
    },
    changeCategory: (state, { payload }) => {
      state.category = payload;
    },
    changeStartDate: (state, { payload }) => {
      state.startDate = payload;
      console.log(state.startDate);
    },
    changeEndDate: (state, { payload }) => {
      state.endDate = payload;
    },
    sumTotalHours: (state) => {
      let hours = 0;
      for (let i = 0; i < state.filteredReports.length; i++) {
        hours += state.filteredReports[i].time;
      }
      state.totalHours = hours;
    },
  },
});
export const {
  addReport,
  getAllReports,
  sumTotalHours,
  changeMember,
  changeClient,
  changeProject,
  changeCategory,
  changeEndDate,
  changeStartDate,
  resetReports,
} = reportSlice.actions;
export default reportSlice.reducer;
