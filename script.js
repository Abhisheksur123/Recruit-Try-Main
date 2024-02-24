// Function to create a new job listing element
function createJobListing(jobDetails) {
  const jobListing = document.createElement('li');
  jobListing.innerHTML = `
    <h3>${jobDetails.role}</h3>
    <p><strong>Company:</strong> ${jobDetails.company}</p>
    <p><strong>Role:</strong> ${jobDetails.role}</p>
    <p><strong>Salary:</strong> ${jobDetails.salary}</p>
    <p><strong>Location:</strong> ${jobDetails.location}</p>
    <a href="#" class="read-more">Read More</a>
  `;
  return jobListing;
}

// Get the form element by its ID and add a submit event listener
const recruiterSignupForm = document.getElementById('recruiter-signup-form');
recruiterSignupForm.addEventListener('submit', handleRecruiterSignup);

// Function to handle the form submission when a recruiter signs up
function handleRecruiterSignup(event) {
  event.preventDefault();

  // Get the form data
  const companyName = document.getElementById('enterprise-name').value;
  const jobRole = document.getElementById('position').value;
  const salary = document.getElementById('salary').value;
  const location = document.getElementById('location').value;

  // Create a jobDetails object with the form data
  const jobDetails = {
    company: companyName,
    role: jobRole,
    salary: salary,
    location: location,
  };

  // Open the jobs.html page in a new window
  const jobsPage = window.open('jobs.html');

  // Wait for the jobs.html page to fully load
  jobsPage.onload = function () {
    // Get the job list element on the jobs.html page
    const jobListOnJobsPage = jobsPage.document.getElementById('job-list');

    // Create a new job listing element with the provided details
    const newJobListing = createJobListing(jobDetails);

    // Add the new job listing at the top of the existing job list on jobs.html
    jobListOnJobsPage.insertBefore(newJobListing, jobListOnJobsPage.firstChild);
  };

  // Clear the form fields after submission
  document.getElementById('enterprise-name').value = '';
  document.getElementById('position').value = '';
  document.getElementById('salary').value = '';
  document.getElementById('location').value = '';
}
