import { useDispatch, useSelector } from 'react-redux'
import Wrapper from '../assets/wrappers/JobsContainer'
import ListedJob from './ListedJob'
import { useEffect } from 'react'
import { getAllListedJobs } from '../features/ListedJob/ListedJobSlice'
import Loading from './Loading'

const JobListingsContainer = () => {
  const { jobs, isLoading, searchTerm } = useSelector(
    (store) => store.listedJobs
  )
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllListedJobs())
  }, [])

  if (isLoading) {
    return <Loading />
  }

  if (!jobs || jobs.length === 0) {
    return (
      <Wrapper>
        <h2>No jobs to display...</h2>
      </Wrapper>
    )
  }

  return (
    <Wrapper>
      <div className="jobs">
        {jobs?.map((job) => {
          return <ListedJob {...job} key={job?._id} />
        })}
      </div>
    </Wrapper>
  )
}
export default JobListingsContainer
