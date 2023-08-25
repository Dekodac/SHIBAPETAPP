import evaSanchezPurpleShibabueno from "../assets/eva-sanchez-purple-shibabueno.gif";
import { useState, useEffect, useRef } from "react";
import axios  from 'axios';
import { useNavigate } from "react-router-dom"


export default function SignUpPage(){

    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [username, setUserName] = useState('');
    const [passw, setpass] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        console.log(email)
      };

    const handleUserNameChange = (e) => {
    setUserName(e.target.value);
    console.log(username)
    };

    const handlePasswordChange = (e) => {
    setpass(e.target.value);
    console.log(passw)
    };

    
    const handleSignInSubmit = async (event) => {
        try {
            const userData = {
                email: email,
                username: username,
                password: passw
            };
            const response = await axios.post('http://127.0.0.1:8000/signup/', userData);
            console.log('Registration successful:', response.data);
            localStorage.setItem("token", response.data.token);
            alert("Sign in successful!")
            navigate('/login')
        } catch (error) {
            console.error('Registration failed:', error);
            // Handle error response, display error message to the user
        }
        event.preventDefault();
    }



        

    return (
        <div style={{width: 1512, height: 982, position: 'relative', background: '#BEB378'}}>
    <div style={{width: 1512, height: 68, left: 0, top: 914, position: 'absolute'}}>
        <div style={{width: 1512, height: 65, left: 0, top: 0, position: 'absolute', background: '#E0C223'}} />
        <div style={{left: 639, top: 53, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 12, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>© 2023 Kodac Developement All Rights Reserved.</div>
    </div>
    <img style={{width: 216, height: 189, left: 648, top: 673, position: 'absolute', borderRadius: 155, border: '0.50px black solid'}} src={evaSanchezPurpleShibabueno} />
    <div style={{width: 876, height: 102, left: 344, top: 205, position: 'absolute', background: '#DBE1B9', borderRadius: 32}} />
    <div style={{width: 830, height: 75, left: 369, top: 220, position: 'absolute', textAlign: 'center', color: '#584cca', fontSize: 32, fontFamily: 'Laila', fontWeight: '700', letterSpacing: 1.44, wordWrap: 'break-word'}}>To sign up please enter your user information below</div>

    <div style={{width: 317, height: 197, left: 597, top: 364, position: 'absolute'}}>
        <div style={{width: 317, height: 197, left: 0, top: 0, position: 'absolute', background: '#DBE1B9', borderRadius: 13}} />
        
        <div style={{width: 105, height: 34, left: 5, top: 151, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 20, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Password:</div>

        <div style={{width: 109, height: 32, left: 5, top: 86, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 20, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Username:</div>
        <div style={{width: 170, height: 43, left: 114, top: 142, position: 'absolute'}}>
            <div style={{width: 170, height: 43, left: 0, top: 0, position: 'absolute', background: '#EFC983', borderRadius: 88}} />
            
            <div style={{width: 147, height: 25, left: 11, top: 9, position: 'absolute', background: 'white', borderRadius: 88}} />
            <input
                type="password"
                className="PasswordInput"
                style={{width: 140.72, height: 20.91, left: 11.52, top: 8.05, position: 'absolute', borderRadius: 66}}
                value={passw}
                onChange={handlePasswordChange}
            />
        </div>
        <div style={{width: 170, height: 43, left: 114, top: 77, position: 'absolute'}}>
            <div style={{width: 170, height: 43, left: 0, top: 0, position: 'absolute', background: '#EFC983', borderRadius: 66}} />
            <div style={{width: 147, height: 25, left: 11, top: 9, position: 'absolute', background: 'white', borderRadius: 66}} />
            <input
                type="username"
                className="userNameInput"
                style={{width: 140.72, height: 20.91, left: 11.52, top: 8.05, position: 'absolute', borderRadius: 66}}
                value={username}
                onChange={handleUserNameChange}
            />
        </div>
        <div style={{width: 82, height: 34, left: 5, top: 17, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 24, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Email:</div>
        <div style={{width: 170, height: 43, left: 114, top: 9, position: 'absolute'}}>
            <div style={{width: 170, height: 43, left: 0, top: 0, position: 'absolute', background: '#EFC983', borderRadius: 66}} />
            <div style={{width: 147, height: 25, left: 11, top: 9, position: 'absolute', background: 'white', borderRadius: 66}} />
            <input
                type="email"
                className="emailInput"
                style={{width: 140.72, height: 20.91, left: 11.52, top: 8.05, position: 'absolute', borderRadius: 66}}
                value={email}
                onChange={handleEmailChange}
            />
        </div>
    </div>
    <div style={{width: 178, height: 65, left: 979, top: 430, position: 'absolute'}}>
        <div style={{width: 178, height: 65, left: 0, top: 0, position: 'absolute', background: '#EEDAB6', borderRadius: 77, border: '0.50px black solid'}} />
        <div style={{width: 133, height: 33, left: 24, top: 13, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 24, fontFamily: 'Kiwi Maru', fontWeight: '500', wordWrap: 'break-word'}}><button onClick={handleSignInSubmit} style={{backgroundColor: '#EFC983', width: 150, height:35, borderRadius: 10, position: 'relative', right: 10, color: 'black', fontSize: 24, fontFamily: 'Inter'}}>Submit</button></div>
    </div>
</div>
    );
}