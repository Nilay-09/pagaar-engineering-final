


interface JobRoleCardOnLandingProps {
    jobTitle: string;
    numOfJobs:number;

  }

const JobRoleCardOnLanding :React.FC<JobRoleCardOnLandingProps> = ({ numOfJobs, jobTitle }) => {
  return (
    <div className="min-w-[16.1rem] h-fit rounded-lg border-[1px] border-[#28293D] p-6 shadow-box">
      <div className="w-full h-fit">
        <div className="flex items-baseline">
          <span className="poppins-bold text-[2.8244rem] text-[#28293D] leading-[2.8887rem]">
            {numOfJobs}
          </span>
          <span className="poppins-medium text-[0.7706rem] text-[#28293D] leading-[2.8887rem]">
            New Jobs
          </span>
        </div>
        <div className="w-full text-[1.125rem] text-[#28293D] poppins-bold">
          {jobTitle}
        </div>
      </div>
    </div>
  );
};

export default JobRoleCardOnLanding;
