import React from 'react';

function Resume() {
  const resumeURL = 'https://resume.io/r/eowy7b1OG'; // Replace with your resume URL

  return (
    <a href={resumeURL} target="_blank" rel="noopener noreferrer">
      <button>
        Hire Me
      </button>
    </a>
  );
}

export default Resume;
