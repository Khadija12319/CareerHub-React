import { CiLocationOn } from "react-icons/ci";
import { CiDollar } from "react-icons/ci";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
const Job = ({job}) => {
    const {logo, job_title, company_name,remote_or_onsite,job_type,location,salary,id} =job;
    return (
        <div className="border-[1px] border-[#E8E8E8] rounded-lg ">
            <div className="p-10">
                <img src={logo} alt="" />
                <p>{job_title}</p>
                <p>{company_name}</p>
                <div className="flex gap-4">
                    <button>{remote_or_onsite}</button>
                    <button>{job_type}</button>
                </div>
                <div className="flex gap-6">
                    <div className="flex gap-2 justify-center items-center">
                    <CiLocationOn />
                    <span>{location}</span>
                    </div>
                    <div className="flex gap-2 justify-center items-center">
                    <CiDollar />
                    <span>Salary : {salary}</span>
                    </div>
                </div>
                <Link to={`/job/${id}`}><button className="btn">View Details</button></Link>
            </div>
        </div>
    );
};

Job.propTypes={
    job: PropTypes.object,
}

export default Job;