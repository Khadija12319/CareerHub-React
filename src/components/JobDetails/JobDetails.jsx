import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";
import { CiDollar } from "react-icons/ci";
import "../../App.css"
import { saveJobApplication } from "../Utility/Localstorage";
// import PropTypes from 'prop-types';

const JobDetails = () => {

    const notify = () => {
        saveJobApplication(idInt);
        toast("You have Applied successfully!")
    };
    const jobs = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id ===idInt)
    return (
        <div>
           <div className="bg-gradient-to-r from-indigo-50 to-indigo-100 mb-[130px]">
           <div className="bg-gradient-to-r from-indigo-50 to-indigo-100 background">
                <h3 className="pt-[123px] pb-[140px] text-center text-[#1A1919] text-[32px] font-extrabold">Job Details</h3>
           </div>
           </div>
           <div className="container mx-auto mb-[130px]">
                <div className="grid grid-cols-4 gap-6">
                    <div className="col-span-3">
                        <h2>Job Description: <span>{job.job_description}</span></h2>
                        <h2>Job Responsibility: <span>{job.job_responsibility}</span></h2>
                        <h3>Educational Requirements:</h3>
                        <p>{job.educational_requirements}</p>
                        <h3>Experiences:</h3>
                        <p>{job.experiences}</p>
                    </div>
                    <div className="col-span-1">
                         <div>
                            <div className="bg-gradient-to-r from-indigo-50 to-indigo-100 p-[30px]">
                                <h2>Job Details</h2>
                                <hr />
                                <p><CiDollar /> Salary : {job.salary} (Per Month)</p>
                                <p><MdOutlineCalendarMonth /> Job Title : {job.job_title}</p>
                                <h2>Contact Information</h2>
                                <hr />
                                <p><FiPhone /> Phone : {job.contact_information.phone}</p>
                                <p><MdOutlineMail /> Email : {job.contact_information.email}</p>
                                <p><CiLocationOn /> Address : {job.contact_information.address}</p>
                            </div>
                            <div>
                                <button onClick={notify} className="w-full btn mt-6 btn-primary">Apply Now</button>
                                <ToastContainer></ToastContainer>
                            </div>
                        </div>
                    </div>
                </div>
           </div>
        </div>
    );
};



export default JobDetails;