import { configureStore } from '@reduxjs/toolkit'
import jobSlice from './features/job/jobSlice'
import userSlice from './features/user/userSlice'
import allJobsSlice from './features/allJobs/allJobsSlice'
import ListedJobSlice from './features/ListedJob/ListedJobSlice'
export const store = configureStore({
  reducer: {
    user: userSlice,
    job: jobSlice,
    allJobs: allJobsSlice,
    listedJobs: ListedJobSlice,
  },
})
