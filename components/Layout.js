import Head from 'next/head'
import NavBar from './NavBar'
import FooterLink from './FooterLink'

const Layout = (props) => {
    return (
        <div>
            <Head>
                <title>Welcome to Ajax Classroom</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta name="description" content="" />
                <meta name="author" content="" />
                
                <link href="/static/css/bootstrap.min.css" rel="stylesheet"/>
                <link href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" rel="stylesheet"/>
                <link href="/static/css/business-frontpage.css" rel="stylesheet"/>
                <link href="/static/css/utilities.css" rel="stylesheet"/>

                <script src="/static/js/bootstrap.min.js" type="text/javascript"></script>
                <script src="/static/js/jquery.min.js" type="text/javascript"></script>                
            </Head>
            <div>
                <NavBar />
                <div>
                    {props.children}
                </div>
                <FooterLink />
            </div> 
        </div>
    );
}

export default Layout;