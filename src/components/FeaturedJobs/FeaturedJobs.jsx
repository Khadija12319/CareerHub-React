import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {

    const [jobs,setJobs] = useState([]);

    const [dataLength, setDataLength] = useState(4);
    useEffect( () => {
        fetch('../../../public/data/jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data));
    },[])
    return (
        <div className="container mx-auto">
            <div>
            <h2 className="text-5xl font-extrabold text-[#1A1919] text-center mt-[130px]">Featured Jobs</h2>
            <p className="text-center text-lg font-medium leading-7 text-[#757575] pt-4 mb-[32px]">
            Explore thousands of job opportunities with all the information you need. Its your future
            </p>
            </div>
            <div className="grid grid-cols-2 gap-6 pb-10">
                {jobs.slice(0,dataLength).map(job => <Job key={job.id} job={job}></Job>)}
            </div>
            <div className={dataLength === jobs.length && 'hidden'}>
                <button onClick={() => setDataLength(jobs.length)} className="btn btn-primary text-center">See All jobs</button>
            </div>
        </div>
    );
};

export default FeaturedJobs;