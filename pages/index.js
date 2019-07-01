// #region imports
import { Component }          from 'react';
import Layout                 from '../components/layout/Layout';
import AssesementCard         from '../components/AssesementCard';
import Jumbotron              from 'react-bootstrap/Jumbotron';
import Button                 from 'react-bootstrap/Button';
import Router                 from 'next/router';
// #endregion

class Index extends Component {
    render() {
        return (
            <Layout>
                <div className="content">
                    <AssesementCard />
                </div>
            </Layout>
        );
    }

    // #endregion

    // # region go login click
    goLogin = (event) => {
        if (event) {
            event.preventDefault();
            Router.push('/login');
        }
    }
    // #endregion
}

export default Index;
