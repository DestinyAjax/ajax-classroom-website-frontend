import Link from 'next/link'

const TopMenu = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
                <div className="container">
                    <Link href="#">
                        <a className="navbar-brand"><img src="../static/images/logo.png" className="logo"/></a>
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link href="#"><a className="nav-link">Home<span className="sr-only">(current)</span></a></Link>
                            </li>
                            <li className="nav-item"><Link href="/registration"><a className="nav-link">Registration</a></Link></li>
                            <li className="nav-item"><Link href="/faqs"><a className="nav-link">FAQs</a></Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
            <style jsx>{`
                .logo {
                    width: 100px;
                }

                nav.navbar {
                    background-color: white; 
                }
                
                nav.navbar a {
                    color: #273746;
                    font-weight: 600;
                }

                nav.navbar a:hover {
                    color: #16A085;
                }
            `}</style>
        </div>
    );
}

export default TopMenu;