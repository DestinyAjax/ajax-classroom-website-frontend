import Layout from '../components/Layout'
import Link from 'next/link'

const Index = () => {
    return (
        <div id="home-page">
            <Layout>
                <header className="py-5 mb-5">
                    <div className="container h-100">
                        <div className="row h-100 align-items-center">
                            <div className="col-lg-12">
                                <h1 className="display-4 text-white mt-5 mb-2">The Complete Web Development Guide 2019: Zero to Mastery</h1>
                                <p className="lead mb-5 text-white-50">Learn to code and become a web developer in 2019 with HTML, CSS, <br/>Javascript, React, Node.js, & more!</p>
                                <p className="created">
                                    <span><i className="fa fa-user"></i> Created By:</span> Destiny Ajakaiye  | 
                                    <span> <i className="fa fa-calendar">  Duration:</i></span> 60Days |
                                    <span> <i className="fa fa-home">  Platform:</i></span> WhatsApp |
                                </p>
                            </div>
                        </div>
                    </div>
                </header>

                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-sm-12 col-xs-12 mb-5">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title">What you'll learn</h4>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <ul>
                                                <li>Skills that will allow you to apply for jobs in these roles: Web Developer, Software Developer, 
                                                Front End Developer, Javascript Developer, or Full Stack Developer</li><br/>
                                                <li>Build your own websites and applications</li><br/>
                                                <li>Master fundamental concepts in web development</li>
                                            </ul>
                                        </div>
                                        <div className="col-md-6">
                                            <ul>
                                                <li>Learn the technologies that are actually being used behind tech companies in 2019</li><br/>
                                                <li>Build an e-commerce system that you can put in your portfolio plus many more apps (all code files provided)</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card mt-5">
                                <div className="card-body">
                                    <h4 className="card-title">Description</h4>
                                    <p>Becoming a web developer is one of the most scary skills 
                                    out there to learn; because of the amount of information on 
                                    the web it is quite difficult to to pin point the right resource 
                                    to use to aid your learning. The Complete Web Development Guide 
                                    2019 aims to solve this problem by providing concise resources 
                                    and convienient platform to help students learn faster.
                                    </p>
                                    <p>This course overs everything you need to know to be a web developer in 2019 from zero knowledge to be able to craft you own web pages and applications.
                                    </p>
                                    <p>In this course you will be taken through series of videos and exercises where you will be able to do the following things by the end:
                                    </p>
                                    <ul>
                                        <li>Build real complex applications and websites</li>
                                        <li>Build an e-commerce app together at the end of the course so you can add it to your portfolio</li>
                                        <li>Go into a job interview confident that you understand the fundamental building blocks of web development and the developer space in 2019</li>
                                        <li>Be able to go off on your own and grow your skills as a developer having built a solid foundation</li>
                                        <li>Learn how front-end, servers, and databases communicate and how they all fit together in the eco system</li>
                                        <li>Build your own startup landing page. </li>
                                        <li>Go off and remotely work by being a freelance developer and bid on projects.</li>
                                        <li>Know EXACLTY what a day in the life of a developer is like and what the day to day technologies and tools will be that you are using. </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="card mt-5">
                                <div className="card-body">
                                    <h4 className="card-title">Course Curriculum</h4>
                                    <ol>
                                        <li>SECTION 1 - Introduction</li>
                                        <li>SECTION 2 - How The Internet Works</li>
                                        <li>SECTION 3 - History Of The Web</li>
                                        <li>SECTION 4 - Introduction To HTML</li>
                                        <li>SECTION 5 - Introduction To CSS</li>
                                        <li>SECTION 6 - Bootstrap 4 and Template</li>
                                        <li>SECTION 7 - CSS Layouting Using Flexbox</li>
                                        <li>SECTION 8 - Career of A Web Developer</li>
                                        <li>SECTION 9 - Introduction To Javasript</li>
                                        <li>SECTION 10 - DOM Manipulation</li>
                                        <li>SECTION 11 - Command Line</li>
                                        <li>SECTION 12 - Development Environment</li>
                                        <li>SECTION 13 - Git + Github</li>
                                        <li>SECTION 14 - NPM + NPM Packages</li>
                                        <li>sECTION 15 - Final Product: An Ecommerce App</li>
                                        <li>SECTION 16 - Introduction To Backend and Frontend Developmemt</li>
                                        <li>SECTION 17 - Introduction to Databases</li>
                                        <li>SECTION 18 - Deployment and Production</li>
                                    </ol><hr />
                                </div>
                            </div>

                            <div className="card mt-5">
                                <div className="card-body">
                                    <h4 className="card-title">Requirements</h4>
                                    <ol>
                                        <li>A PC or a smart(Android or iPhone) mobile phone with internet connection</li>
                                        <li>No previous coding experience</li>
                                        <li>Be willing and ready to learn</li>
                                    </ol><hr /><br/>

                                    <h4 className="card-title">About the Instructor</h4>
                                    <div className="row">
                                        <div className="col-md-2">
                                            <p><img src="/static/images/ajakaiye.jpg" className="rounded-circle personal-image" alt="destiny-ajakaiye"/></p>
                                        </div>
                                        <div className="col-md-10">
                                            <p><a href="https://linkedin.com/in/destinyajax" target="_blank">Destiny Ajakaiye</a></p>
                                            <p>Destiny is the instructor of The Complete Web Development Guide 2019. 
                                            He is a software developer and the Head of Product Development at 
                                            Innocation Corner Lagos, Nigeria. He has been a Software Developer for 4 years, 
                                            and now he has decided to take all that he has learnt, to teaching programing skills.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-12 col-xs-12 mb-5">
                            <div className="card">
                                <img className="card-img-top" src="/static/images/ajax-classroom-web-development.jpg" alt="ajax classroom web development" />
                                <div className="card-body">
                                    <div className="current-price text-center">
                                        <p className="card-title">Course Price</p>
                                        <h2>₦2,000 <span className="discount"><strike>₦25,000</strike></span></h2>
                                    </div>
                                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSfaREMwwMsQEJAbJ6ZSj3TZa7v0lpmtExqcMOu4CD-8m3YoIg/viewform?usp=sf_link" target="_blank"><button className="btn-big" type="button">Register</button></a><hr/>
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
            <style jsx>{`
                .personal-image {
                    width: 100px;
                }

                .created {
                    font-weight: 600;
                    color: white;
                }

                .created span {
                    color: #F4D03F;
                }

                .discount {
                    font-size: 15px;
                    color: red;
                }
            `}</style>
        </div>
    );
}

export default Index;