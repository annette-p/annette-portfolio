import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import jobExperiences from '../data/experiences.json'

export default function ExperiencePage(){
    return (
        <React.Fragment>
            <h3 className='text-center mt-4 mt-md-5 mb-3 mb-md-4 mb-lg-5'>Experiences</h3>
            <div className="container px-2 px-lg-4">
                {jobExperiences.map((jobExperience, jobIndex) => {
                    return (
                        <div key={jobIndex} className="row gx-5">
                            <div className="col-12 col-md-4 ms-0 ms-lg-4">
                                <div className="p-0 p-lg-3 mt-3 mt-lg-0 job-title">
                                    <h5 className='mb-3'>{jobExperience.title}</h5>
                                    <h6 className='duration'>{jobExperience.start} - {jobExperience.end}</h6>
                                </div>
                            </div>
                            <div className="d-none d-md-block col-1">
                                <FontAwesomeIcon icon={faCircle} className="circle-icon"/>
                            </div>
                            <div className="col">
                                <div className="mt-3 mt-md-0 p-0 p-md-3 me-0 me-lg-4">
                                    <h5>{jobExperience.company} 
                                        <span className='country'>({jobExperience.country})</span>
                                    </h5>
                                    <ul>
                                        {jobExperience.responsibilities.map ((responsibility, resIndex) => {
                                            return (
                                                <li key={resIndex}>{responsibility}</li>
                                            )
                                        })} 
                                    </ul> 
                                </div>
                            </div>
                            <hr className='d-block d-md-none experiences-hline'></hr>
                        </div>
                    )
                })}
                <div className='vertical-line experiences-hline'></div>
            </div>

        </React.Fragment>
    )
}



// {
//     "title": "",
//     "company": "",
//     "country": "",
//     "start": "",
//     "end": "",
//     "responsibilities": [
//         "",
//         "",
//         "",
//         "",
//         ""
//     ]
// }