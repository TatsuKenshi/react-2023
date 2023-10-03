import React from "react";
import Duties from "./Duties";

const JobInfo = ({ jobs, currentItem }) => {
  // these properties are extracted from the job which has the index equal to the number in the currentItem state
  const { company, dates, duties, title } = jobs[currentItem];

  return (
    <article className="job-info">
      <h3>{title}</h3>
      <span className="job-company">{company}</span>
      <p className="job-date">{dates}</p>
      <Duties duties={duties} />
    </article>
  );
};

export default JobInfo;
