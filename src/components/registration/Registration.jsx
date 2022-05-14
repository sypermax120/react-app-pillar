import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import Register from "./Register";
import Login from "./Login";

const Registration = (props) => {
        // console.log(props)

        return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Registration
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Tabs defaultActiveKey="Login" id="uncontrolled-tab-example" className="mb-3">
                    <Tab eventKey="Login" title="Log in">
                        <Login users={props.users} setAuthUser={props.setAuthUser}/>
                    </Tab>
                    <Tab eventKey="Register" title="Register">
                        <Register users={props.users} setUsers={props.setUsers}/>
                    </Tab>
                </Tabs>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
        );    
}

export default Registration