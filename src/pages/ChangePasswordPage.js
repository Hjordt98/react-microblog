import Body from "../components/Body";
import Form from 'react-bootstrap/Form'
import InputField from "../components/InputField";
import { useState, useEffect, useRef } from "react";
import Button from 'react-bootstrap/Button'
import { useApi } from "../contexts/ApiProvider";
import { useNavigate } from "react-router-dom";
import { useFlash } from '../contexts/FlashProvider';

export default function ChangePasswordPage(){
    const [formErrors, setFormErrors] = useState({})
    const oldPasswordField = useRef();
    const passwordField = useRef();
    const password2Field = useRef();
    const api = useApi();
    const navigate = useNavigate();
    const flash = useFlash();

    useEffect(() => {
       oldPasswordField.current.focus();
    }, []);

    const onSubmit = async (ev) => {
        ev.preventDefault();
        if (passwordField.current.value != password2Field.current.value) {
            setFormErrors({password2: "Passwords don't match"})
        } 
        else {
            const response = await api.put('/me', {
                old_password: oldPasswordField.current.value,
                password: password2Field.current.value,
            });
            if (response.ok) {
                setFormErrors({});
                flash('Your password has been updated.', 'success');
                navigate('/');
            }
            else {
                setFormErrors(response.body.errors.json)
            }
        }
    };
    
    return(
        <Body sidebar>
            <h1>Change Your Password</h1>
            <Form onSubmit={onSubmit}>
                <InputField
                name="oldPassword" label="Old Password" type="password"
                error={formErrors.old_password} fieldRef={oldPasswordField} />
                <InputField
                name="password" label="Password" type="password"
                error={formErrors.password} fieldRef={passwordField}/>
                <InputField
                name="password2" label="Password" type="password"
                error={formErrors.password2} fieldRef={password2Field}/>
                <Button variant="primary" type="submit">Change Password</Button>
            </Form>
        </Body>
    );
}