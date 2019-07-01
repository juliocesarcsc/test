import { Component } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import {Card,  Form, Button} from 'react-bootstrap';

class AssesementCard extends Component {
    InputNameRef = React.createRef();
    InputNameRef2 = React.createRef();
    // #region component lifecycle methods
    goLogin = (evt) => {
        Router.push({pathname: '/tool-question', query: { name: this.InputNameRef.current.value, name2: this.InputNameRef2.current.value }})
        console.log(this.InputNameRef.current.value);
        console.log(this.InputNameRef2.current.value);
    }

    render() {
        console.log("render ")
        return (
            <Card className="justify-content-center align-self-center mx-auto custom-card">
                <Card.Body>
                    <Card.Title className="custom-navbar-brand">
                        10Traits tool
                    </Card.Title>
                    <Card.Text style={{marginRight : '50px !important'}}>
                        You have 10 powerfull traits to assess a relationchip. Each trait is paired with its
                        opposite.
                    </Card.Text>
                    <Card.Text>

                        You can evaluate jus one person or two.
                    </Card.Text>
                    <Form className="my-form">
                        <Form.Group style={{width:'245px'}}>
                            <Form.Label>Assessment Type</Form.Label>
                            <Form.Control as="select" size="sm" className="my-select">
                                <option>Relationship</option>
                                <option>Self</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group style={{width:'300px'}}>
                            <Form.Control ref={this.InputNameRef2} placeholder="Name of assessed person" type="text" size="sm"
                                          className="custom-input">

                            </Form.Control>
                        </Form.Group>

                        <Form.Group style={{width:'300px'}}>
                            <Form.Control ref={this.InputNameRef} placeholder="Name of other person" type="text" size="sm"
                                          className="custom-input">
                            </Form.Control>
                        </Form.Group>
                        {/*<Link href="/tool-question">*/}
                            <Button onClick={this.goLogin} size="sm" id="begin-btn">
                                Begin
                            </Button>
                        {/*</Link>*/}
                    </Form>

                </Card.Body>
            </Card>
        );
    }    // #endregion
}
export default AssesementCard;


