import React from 'react'

export default function ProfileSumPage(){
    return (
        <React.Fragment>
            <div className='row mt-4 mt-md-5'>
                <div className='d-none d-lg-block col-2'></div>
                <div className='col'>
                    <div className="card-img-top profile-card">
                        {/* <img src={require('../images/profile/annette-profile.jpg').default} alt="profile"/> */}
                        <div id='profile-img' className='img-fluid'></div>
                        <div className="card-body">
                            <p className="card-text text-center">
                                <h5>Entrepreneur</h5>
                                <h5>Product Management</h5>
                                <h5>Software Development</h5>
                            </p>
                        </div>
                    </div>
                </div>
                <hr className='d-block d-md-none h-line'></hr>
                <div className='col sum-text'>
                    <h2 className='mt-1 mt-lg-5'>Hi, I'm Annette</h2>
                    <p className='intro-text'>I am entreprennuer, product innovator and software developer.</p>
                    <p className='intro-text'>
                        I have strong passion about business, user experience and technology. Building innovative products and applications that help streamline business, user-friendly product solutions, keep track of industry trends and emerging technologies. 
                    </p>
                </div>
                <div className='d-none d-lg-block col-1'></div>
            </div>
        </React.Fragment>
    )
}

