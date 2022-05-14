import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Register = ({users, setUsers}) => {
        // console.log('Register', props)

    let newUser = {
        id: null,
        firstName: '',
        secondName: '',
        mail: '',
        pass: ''
    }
    
    const createUser = ()=>{
        users.push(newUser)
        setUsers(users)
        // console.log(props);
    }

    return(
    <Form>
        <Form.Group className="mb-3" controlId="formGridFirstName">
            <Form.Control type="text" placeholder="First name" onChange={e => (newUser.firstName= e.target.value )}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGridLastName">
            <Form.Control type="text" placeholder="Last name" onChange={e => (newUser.secondName= e.target.value )}/>
        </Form.Group>
        <Form.Group className="mb-3 Mail" controlId="formBasicEmail">
            <Form.Control type="mail" placeholder="Mail" onChange={e => (newUser.mail= e.target.value )}/>
        </Form.Group>
        <Form.Group className="mb-3 Password" controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Password" onChange={e => (newUser.pass= e.target.value )}/>
        </Form.Group>
        <Button variant="primary" type="reset" onClick={createUser}>Regiter</Button>
    </Form>
    );
}

export default Register