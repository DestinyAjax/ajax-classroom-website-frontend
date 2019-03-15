import Layout from '../components/Layout'

const Index = () => {
    return (
        <div id="home-page">
            <Layout>
                <header className="py-5 mb-5">
                    <div className="container h-100">
                        <div className="row h-100 align-items-center">
                            <div className="col-lg-12">
                                <h1 className="display-4 text-white mt-5 mb-2">The Complete Web Developer in 2019: Zero to Mastery</h1>
                                <p className="lead mb-5 text-white-50">Learn to code and become a web developer in 2019 with HTML, CSS, <br/>Javascript, React, Node.js, Machine Learning & more!</p>
                            </div>
                        </div>
                    </div>
                </header>

                <div className="container">
                    <div className="row">
                        <div className="col-md-8 mb-5">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title">What you'll learn</h4>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <ul>
                                                <li>Skills that will allow you to apply for jobs in these roles: Web Developer, Software Developer, 
                                                Front End Developer, Javascript Developer, or Full Stack Developer</li><br/>
                                                <li>Build your own websites and applications</li>
                                            </ul>
                                        </div>
                                        <div className="col-md-6">
                                            <ul>
                                                <li>Skills that will allow you to apply for jobs in these roles: Web Developer, Software Developer, 
                                                Front End Developer, Javascript Developer, or Full Stack Developer</li><br/>
                                                <li>Build your own websites and applications</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card mt-5">
                                <div className="card-body">
                                    <h4 className="card-title">Course Content</h4>
                                    <div id="accordion">
                                        <div className="card">
                                            <div className="card-header" id="headingOne" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                <h5 className="mb-0"><button className="btn btn-link" >#1 - Introduction</button></h5>
                                            </div>

                                            <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                                                <div className="card-body">
                                                    
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-5">
                            <div className="card h-100">
                                <img className="card-img-top" src="/static/images/ajax-classroom-web-development.jpg" alt="" />
                                <div className="card-body">
                                    <div className="current-price text-center">
                                        <h5 className="card-title">Course Price</h5>
                                        <h2>N2,000</h2>
                                    </div>
                                    <button className="btn-big" type="button" disabled>Register</button><hr/>
                                    <h6>Course package</h6>
                                    <p className="course-packages">
                                        <i className="fa fa-arrow-circle-right"></i> Free vidoes and transcript on all topics<br/>
                                        <i className="fa fa-arrow-circle-right"></i> Free articles<br/>
                                        <i className="fa fa-arrow-circle-right"></i> Free downloadable resources<br/>
                                        <i className="fa fa-arrow-circle-right"></i> Free mentoring access<br/>
                                        <i className="fa fa-arrow-circle-right"></i> Access on both mobile and PC<br/>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
            
        </div>
    );
}

export default Index;