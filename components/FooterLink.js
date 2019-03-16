import Link from 'next/link'
import '../static/css/business-frontpage.css'

const FooterLink = () => (
    <div>
        <footer className="py-5">
            <div className="container">
                <p className="m-0 text-center text-white">Copyright &copy; Ajax Classroom. All Rights Reserved.</p>
            </div>
        </footer>
        <style jsx>{`
            footer {
                background-color: #273746;
            }
        `}</style>
    </div>
);

export default FooterLink;