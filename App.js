// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
// import React, { useState } from 'react';

// // Sample data for jobs and candidates
// const jobs = [
//   { id: 1, title: 'Job 1', description: 'Job 1 description' },
//   { id: 2, title: 'Job 2', description: 'Job 2 description' },
//   // Add more jobs as needed
// ];

// const candidates = [
//   { id: 1, name: 'Candidate 1', skills: ['React', 'JavaScript'] },
//   { id: 2, name: 'Candidate 2', skills: ['JavaScript', 'HTML', 'CSS'] },
//   // Add more candidates as needed
// ];

// const App = () => {
//   const [selectedJob, setSelectedJob] = useState(null);

//   const handleJobClick = (jobId) => {
//     setSelectedJob(jobId);
//   };

//   const getEligibleCandidates = () => {
//     if (selectedJob) {
//       const job = jobs.find((job) => job.id === selectedJob);
//       const eligibleCandidates = candidates.filter((candidate) =>
//         candidate.skills.includes(job.title)
//       );

//       return eligibleCandidates.sort((a, b) => b.skills.length - a.skills.length);
//     }

//     return [];
//   };

//   return (
//     <div className="container">
//       <h1>Job List</h1>
//       <ul className="job-list">
//         {jobs.map((job) => (
//           <li
//             key={job.id}
//             className={selectedJob === job.id ? 'selected' : ''}
//             onClick={() => handleJobClick(job.id)}
//           >
//             {job.title}
//           </li>
//         ))}
//       </ul>

//       {selectedJob && (
//         <div>
//           <h2>Job Details</h2>
//           <p>{jobs.find((job) => job.id === selectedJob).description}</p>

//           <h2>Eligible Candidates</h2>
//           <ul className="candidate-list">
//             {getEligibleCandidates().map((candidate) => (
//               <li key={candidate.id}>{candidate.name}</li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default App;

import React, { useState } from "react";

// Dummy data
const jobs = [
  {
    id: 1,
    title: "Software Engineer",
    description: "We are hiring a software engineer with experience in React and Node.js.",
  },
  {
    id: 2,
    title: "Data Analyst",
    description: "We are seeking a data analyst proficient in SQL and Python.",
  },
  {
    id: 3,
    title: "UI/UX Designer",
    description: "We are looking for a creative UI/UX designer with expertise in Adobe XD.",
  },
];

const candidates = [
  {
    id: 1,
    name: "John Doe",
    skills: ["React", "Node.js", "JavaScript"],
  },
  {
    id: 2,
    name: "Jane Smith",
    skills: ["SQL", "Python", "Data Analysis"],
  },
  {
    id: 3,
    name: "Alice Johnson",
    skills: ["Adobe XD", "UI Design", "Photoshop"],
  },
];

const JobList = ({ jobs, onSelectJob }) => {
  return (
    <div>
      <h2>Job List</h2>
      <ul>
        {jobs.map((job) => (
          <li key={job.id} onClick={() => onSelectJob(job)}>
            {job.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

const JobDetails = ({ selectedJob }) => {
  return (
    <div>
      <h2>Job Details</h2>
      {selectedJob ? (
        <div>
          <h3>{selectedJob.title}</h3>
          <p>{selectedJob.description}</p>
        </div>
      ) : (
        <p>Select a job to view its details.</p>
      )}
    </div>
  );
};

const CandidateList = ({ candidates }) => {
  const sortedCandidates = [...candidates].sort((a, b) => {
    return b.skills.length - a.skills.length;
  });

  return (
    <div>
      <h2>Candidate List</h2>
      <ul>
        {sortedCandidates.map((candidate) => (
          <li key={candidate.id}>
            <strong>{candidate.name}</strong> - Skills: {candidate.skills.join(", ")}
          </li>
        ))}
      </ul>
    </div>
  );
};

const HRPage = () => {
  const [selectedJob, setSelectedJob] = useState(null);

  const handleSelectJob = (job) => {
    setSelectedJob(job);
  };

  return (
    <div>
      <h1>HR Page</h1>
      <div className="container">
        <div className="column">
          <JobList jobs={jobs} onSelectJob={handleSelectJob} />
        </div>
        <div className="column">
          <JobDetails selectedJob={selectedJob} />
        </div>
        <div className="column">
          <CandidateList candidates={candidates} />
        </div>
      </div>
    </div>
  );
};

export default HRPage;