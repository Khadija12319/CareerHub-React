import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../Utility/Localstorage";


const AppliedJobs = () => {
    const jobs = useLoaderData();
    const [appliedJobs, setAppliedJobs] = useState([]);
    useEffect(() => {
        const storedJobIds = getStoredJobApplication();
            if(jobs.length > 0){
                const jobsApplied =[];
                for (const id of storedJobIds){
                    const job =jobs.find(job => job.id === id);
                    if(job){
                        jobsApplied.push(job);
                    }
                }
                setAppliedJobs(jobsApplied);
            }
    }, []);  
    return (
        <div>
            <h4></h4>
        </div>
    );
};

export default AppliedJobs;