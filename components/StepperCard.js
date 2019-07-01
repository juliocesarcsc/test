// #region imports
import { Component }                    from 'react';
import Card from 'react-bootstrap/Card';
import HorizontalLinearStepper          from './HorizontalLinearStepper';
// #endregion

class StepperCard extends Component {
    // #region component lifecycle methods
    render() {
        return (
            <Card className="justify-content-center align-self-center mx-auto custom-card">
                <Card.Body>
                    <Card.Title className="custom-card-breadcrum">
                        <span className="underline-text">Assessment</span>>New 10Traits Assessment
                    </Card.Title>
                    <Card.Subtitle className="custom-card-title">
                        10TRAITS ASSESSMENT
                    </Card.Subtitle>
                    <HorizontalLinearStepper {...this.props}/>

                </Card.Body>
            </Card>
        );
    }    // #endregion
}
export default StepperCard;


