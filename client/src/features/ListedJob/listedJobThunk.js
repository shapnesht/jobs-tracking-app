import axios from 'axios'
import { checkForUnauthorizedResponse } from '../../utils/axios'

export const getAllListedJobsThunk = async (_, thunkAPI) => {
  const { searchTerm } = thunkAPI.getState().listedJobs

  let url = `/api/v1/jobs/listedJobs?search=${searchTerm}`

  try {
    const resp = await axios.get(url)
    return resp.data
  } catch (error) {
    return checkForUnauthorizedResponse(error, thunkAPI)
  }
}
