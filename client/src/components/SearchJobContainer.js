import { FormRow } from '../components'
import Wrapper from '../assets/wrappers/DashboardFormPage'
import { useDispatch, useSelector } from 'react-redux'
import { handleChange } from '../features/ListedJob/ListedJobSlice'

const SearchJobContainer = () => {
  const { searchTerm, isLoading } = useSelector((store) => store.listedJobs)
  const dispatch = useDispatch()

  const handleSearch = (e) => {
    if (isLoading) return
    dispatch(handleChange({ name: e.target.name, value: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // dispatch(searchJob({ searchTerm }))
  }

  return (
    <Wrapper>
      <form className="form">
        <h3>Listed Jobs</h3>
        <div className="form-center">
          <FormRow
            type="text"
            value={searchTerm}
            handleChange={handleSearch}
          />
          <button
            type="submit"
            className="btn btn-block submit-btn"
            onClick={handleSubmit}
          >
            submit
          </button>
        </div>
      </form>
    </Wrapper>
  )
}
export default SearchJobContainer
