import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'

export default function ExperiencePage(){
    return (
        <React.Fragment>
            <h3 className='text-center mt-5 mb-5'>Experiences</h3>
            <div class="container px-4">
                <div class="row gx-5">
                    {/* <div class="col-1"></div> */}
                    <div class="col-4 ms-5">
                        <div class="p-3 text-end">
                            <h5 className='mb-3'>Founder, Product Manager, Designer</h5>
                            <h6>03/2021 - present</h6>
                        </div>
                    </div>
                    <div class="col-1">
                        <FontAwesomeIcon icon={faCircle} className="circle-icon mt-4"/>
                    </div>
                    <div class="col">
                        <div class="p-3">
                            <h5>Sophisticated Me</h5>
                            <ul>
                                <li>Manage product lifecycle from ideation to launch and growth</li>
                                <li>Pilot customer engagement for every prototypes and sample pieces (MVPs) of new product development to get market-fit products</li>
                                <li>Successful in customer discovery, get early adopters and maintain customers loyalty</li>
                            </ul> 
                        </div>
                    </div>
                    <div class="col-1"></div>
                </div>
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
//     "responsibility": [
//         "",
//         "",
//         "",
//         "",
//         ""
//     ]
// }