import assets from "../../assets/images/user.png"
const Banner = () => {
    return (
        <div className="bg-gradient-to-r from-indigo-50 to-indigo-100">
            <div className="flex justify-around container mx-auto ">
                <div className="my-auto">
                <h1 className="text-[80px] font-extrabold leading-[100px] text-[#1A1919]">One Step
                <br></br> Closer To Your <br></br><span className="bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text">Dream Job</span></h1>
                <p className="md:w-[520px] pt-6 text-lg font-medium leading-8 text-[#757575] pb-8">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <button className="text-left bg-gradient-to-r from-blue-400 to-purple-600 text-white px-7 py-5 rounded-lg text-xl font-extrabold">Get Started</button>
                </div>
                <div>
                    <img src={assets} alt="" className="h-[745px] w-auto" />
                </div>
            </div>
        </div>
    );
};

export default Banner;