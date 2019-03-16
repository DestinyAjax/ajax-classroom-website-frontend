import Head from 'next/head'
import TopMenu from './TopMenu'
import FooterLink from './FooterLink'

const Layout = (props) => {
    return (
        <div>
            <Head>
                <title>Welcome to Ajax Classroom</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta name="description" content="Ajax classroom is a platform that provide WhatsApp courses on web development and programming in both English and pidgin language." />
                <meta name="author" content="Destiny Ajakaiye" />
                <link rel="icon" href="/static/images/favicon.png" />

                <link href="/static/css/style.css" rel="stylesheet"/>
                <link href="/static/css/bootstrap.min.css" rel="stylesheet"/>
                <link href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" rel="stylesheet"/>
                <link href="/static/css/utilities.css" rel="stylesheet"/>

                <script src="/static/js/jquery.min.js" type="text/javascript"></script>
                <script src="/static/js/bootstrap.min.js" type="text/javascript"></script>
                
                <script async src="https://www.googletagmanager.com/gtag/js?id=UA-86460942-11"></script>
                <script src="/static/js/analytics.js"></script>
            </Head>
            <TopMenu />
            <div>
                {props.children}
            </div>
            <FooterLink />
        </div>
    );
}

export default Layout;