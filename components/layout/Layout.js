// #region imports
import { Component }      from 'react';
import Head               from 'next/head';
import Container          from 'react-bootstrap/Container';
import Header                 from './Header';
import Footer                 from './Footer';
// #endregion

class Layout extends Component {
    render() {
        const { children } = this.props;

        return (
            <div className="content-wrap">
                <Head>
                    <meta name="viewport" content="width=device-width, initial-scale=1"/>
                    <meta charSet="utf-8"/>
                    <link rel="stylesheet" href="static/css/bootstrap.min.css"/>
                    <link rel="stylesheet" href="static/css/custom.css"/>
                    <link rel="stylesheet" href="static/css/stepper.css"/>
                    <link rel="stylesheet" href="static/font-awesome/css/font-awesome.min.css"/>
                    <link rel="icon" href="static/favicon.ico"/>
                </Head>
                <Header/>
                {children}
                <Footer />
            </div>
        );
    }
}

export default Layout;
