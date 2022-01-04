import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import educationLists from '../data/educations.json'

export default function EducationPage(){
    return (
        <React.Fragment>
            <h3 className='text-center mt-4 mt-md-5 mb-3 mb-md-4 mb-lg-5'>Educations</h3>
            <div className="container px-2 px-lg-4">
                {educationLists.map((education, eduIndex) => {
                    return (
                        <div key={eduIndex} className="row gx-5">
                            <div className="col-12 col-md-4 ms-0 ms-lg-4">
                                <div className="p-0 p-lg-3 mt-3 mt-lg-0 job-title">
                                    <h5 className='mb-3'>{education.course}</h5>
                                    <h6 className='duration'>{education.start} - {education.end}</h6>
                                </div>
                            </div>
                            <div className="d-none d-md-block col-1">
                                <FontAwesomeIcon icon={faCircle} className="circle-icon"/>
                            </div>
                            <div className="col">
                                <div className="mt-3 mt-md-0 p-0 p-md-3 me-0 me-lg-4">
                                    <h5>{education.institution} 
                                        <span className='country'>({education.country})</span>
                                    </h5>
                                    {education.hasOwnProperty("modules") ? 
                                        <div>
                                            <div className='mt-3 fw-bold'>Modules</div>
                                            <ul>
                                                {education.modules.map ((module, moduleIndex) => {
                                                    return (
                                                        <li key={moduleIndex}>{module}</li>
                                                    )
                                                })} 
                                            </ul>
                                        </div> 
                                    : null}
                                     
                                    {/* https://stackoverflow.com/a/5737136 */}
                                    {Object.keys(education.details).map((key, detailIndex) => {
                                        return (
                                            <div key={detailIndex}>
                                                <div className='mt-3 fw-bold'>{key}</div>
                                                <div>{education.details[key]}</div>
                                            </div>
                                        )
                                    })}
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
//     "course": "",
//     "institution": "",
//     "country": "Singapore",
//     "start": "08/2021",
//     "end": "12/2021",
//     "modules": [
//         "",
//         "",
//         ""
//     ],
//     "details":{
//         "": "",
//         "": ""
//     }
// }