import customFetch, { checkForUnauthorizedResponse } from '../../utils/axios'

export const getAllListedJobsThunk = async (_, thunkAPI) => {
  const { searchTerm } = thunkAPI.getState().listedJobs

  let url = `/jobs/listedJobs`
  if (searchTerm) {
    url = url + `?search=${searchTerm}`
  }
  try {
    const resp = await customFetch.get(url)
    return resp.data
  } catch (error) {
    return checkForUnauthorizedResponse(error, thunkAPI)
  }
}
