const jobData = [
    {jobRole: "Cybersecurity Analyst", experienceReq: [1, 2, 3], openRoles: 32000},
    {jobRole: "Threat Intelligence Analyst", experienceReq: [2, 3, 4], openRoles: 15000},
    {jobRole: "Cloud Security Engineer", experienceReq: [3, 4, 5], openRoles: 25000},
    {jobRole: "Incident Response Manager", experienceReq: [4, 5, 6], openRoles: 18000},
    {jobRole: "Governance & Compliance Specialist", experienceReq: [5], openRoles: 10000},
    {jobRole: "Security Architect", experienceReq: [7], openRoles: 8000}
];


// jobData contains a list of cybersecurity job roles, showing how many open positions each role has 
// and what experience levels are needed.
// - Each item in the list is an object with three parts:
//   1. jobRole: The name of the job (e.g., "Cybersecurity Analyst").
//   2. experienceReq: The experience levels (years) needed for the job (e.g., [1, 2, 3] means 1-3 years).
//   3. openRoles: The number of open positions available for that role.
// This setup helps us see the open positions by job and the range of experience levels required, 
// so we can analyze where the biggest gaps might be for each experience level.