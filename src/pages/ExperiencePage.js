import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import jobExperiences from '../data/experiences.json'

export default function ExperiencePage(){
    return (
        <React.Fragment>
            <h3 className='text-center mt-5 mb-5'>Experiences</h3>
            <div class="container px-4">
                {jobExperiences.map(jobExperience => {
                    return (
                        <div class="row gx-5">
                            <div class="col-4 ms-4">
                                <div class="p-3 text-end">
                                    <h5 className='mb-3'>{jobExperience.title}</h5>
                                    <h6>{jobExperience.start} - {jobExperience.end}</h6>
                                </div>
                            </div>
                            <div class="col-1">
                                <FontAwesomeIcon icon={faCircle} className="circle-icon"/>
                            </div>
                            <div class="col">
                                <div class="p-3 me-4">
                                    <h5>{jobExperience.company} 
                                        <span className='country'>({jobExperience.country})</span>
                                    </h5>
                                    <ul>
                                        {jobExperience.responsibilities.map (responsibility => {
                                            return (
                                                <li>{responsibility}</li>
                                            )
                                        })} 
                                    </ul> 
                                </div>
                            </div>
                        </div>
                    )
                })}
                <div className='vertical-line'></div>
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