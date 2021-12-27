import React from 'react'

export default function ProfileSumPage(){
    return (
        <React.Fragment>
            <div className='row mt-5'>
                <div className='col-2'></div>
                <div className='col'>
                    <div className="card-img-top profile-card">
                        {/* <img src={require('../images/profile/annette-profile.jpg').default} alt="profile"/> */}
                        <div id='profile-img' className='img-fluid'></div>
                        <div className="card-body">
                            <p className="card-text text-center">
                                <h5>Entrepreneur</h5>
                                <h5>Product Management</h5>
                                <h5>Software Application Development</h5>
                            </p>
                        </div>
                    </div>
                </div>
                <div className='col'>
                    <h2>Hi, I'm Annette</h2>
                    <p>I am entreprennuer, product innovator and coder.</p>
                    <p>
                        I have strong passion about business, user experience and technology. Building innovative products and application that help streamline business, user-friendly product solutions, keep track on industry trends and emerging technologies. 
                    </p>
                </div>
                <div className='col-1'></div>
            </div>
        </React.Fragment>
    )
}

