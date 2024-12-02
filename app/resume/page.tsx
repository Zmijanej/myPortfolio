import React from 'react'
import ResumeButtons from '../components/resumeButtons';
import ProfessionalExperience from '../components/professionalExp';

export default function page() {
  return (  
    <div className='home'>
      <ResumeButtons/>
      <ProfessionalExperience/>
      <ResumeButtons/>
    </div>
  );
}
  