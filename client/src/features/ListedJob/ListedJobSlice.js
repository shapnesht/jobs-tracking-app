import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getAllListedJobsThunk } from './listedJobThunk'
import { toast } from 'react-toastify'

export const getAllListedJobs = createAsyncThunk(
  'allJobs/getListedJobs',
  getAllListedJobsThunk
)

const listedJobsSlice = createSlice({
  name: 'listedJobs',
  initialState: { jobs: [], searchTerm: '', isLoading: false },
  reducers: {
    handleChange: (state, { payload: { name, value } }) => {
      state[name] = value
    },
  },
  extraReducers: {
    [getAllListedJobs.pending]: (state) => {
      state.isLoading = true
    },
    [getAllListedJobs.fulfilled]: (state, { payload }) => {
      // console.log(payload)
      state.isLoading = false
      state.jobs = payload.jobs
    },
    [getAllListedJobs.rejected]: (state, { payload }) => {
      state.isLoading = false
      toast.error(payload)
    },
  },
})

export default listedJobsSlice.reducer
export const { searchJob, handleChange } = listedJobsSlice.actions
