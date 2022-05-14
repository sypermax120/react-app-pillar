import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Login = ({users, setAuthUser}) => {
    // console.log('Login', users)

    let checkUser = {
        mail: '',
        pass: ''
    }
    
    const loginUser = ()=>{
        const find = users.find((user)=> user.mail === checkUser.mail)
        setAuthUser(find.mail)
        // console.log(find);
    }

    return(
    <Form>
        <Form.Group className="mb-3 Mail" controlId="formBasicEmail">
            <Form.Control type="mail" placeholder="Mail" onChange={e => (checkUser.mail= e.target.value )}/>
        </Form.Group>
        <Form.Group className="mb-3 Password" controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Password" onChange={e => (checkUser.pass= e.target.value )}/>
        </Form.Group>
        <Button variant="primary" type="reset" onClick={loginUser}>Log in</Button>
    </Form>
    );
}

export default Login