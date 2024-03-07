import Wrapper from '../assets/wrappers/Job'
import {
  FaLocationArrow,
  FaCogs,
  FaBriefcase,
  FaCalendarAlt,
} from 'react-icons/fa'
import JobInfo from './JobInfo'

const ListedJob = ({
  redirectLink,
  requiredExperience,
  salary,
  imageUrl,
  location,
  companyName,
  skills,
  title,
}) => {
  return (
    <Wrapper>
      <header>
        <div className="main-icon">{companyName.charAt(0)}</div>
        <div className="info">
          <h5>{title}</h5>
          <p>{companyName}</p>
        </div>
      </header>
      <div className="content">
        <div className="content-center">
          <JobInfo icon={<FaLocationArrow />} text={location} />
          <JobInfo icon={<FaCalendarAlt />} text={requiredExperience} />
          <JobInfo icon={<FaBriefcase />} text={salary} />
          <JobInfo icon={<FaCogs />} text={skills} />
        </div>
        <footer>
          <div className="actions">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={redirectLink}
              className="btn btn-danger btn-block"
            >
              Apply
            </a>
          </div>
        </footer>
      </div>
    </Wrapper>
  )
}
export default ListedJob
