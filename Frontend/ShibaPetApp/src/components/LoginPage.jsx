import ShibaGifPicture from "../assets/eva-sanchez-purple-shibabueno.gif";
import { useState } from "react";

export default function LoginPage(){

    const [email, setEmail] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
      };



    return (
        <div style={{width: 1512, height: 982, position: 'relative', background: '#BEB378'}}>
    <div style={{width: 1512, height: 68, left: 0, top: 914, position: 'absolute'}}>
        <div style={{width: 1512, height: 65, left: 0, top: 0, position: 'absolute', background: '#E0C223'}} />

        <div style={{left: 639, top: 53, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 12, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>© 2023 Kodac Developement All Rights Reserved.</div>
    </div>
    <div style={{width: 216, height: 189, left: 648, top: 673, position: 'absolute', borderRadius: 155, border: '0.50px black solid' }} src={ShibaGifPicture} alt="ShibaGif" />
    
    <div style={{width: 876, height: 102, left: 344, top: 205, position: 'absolute'}}>
        <div style={{width: 876, height: 102, left: 0, top: 0, position: 'absolute', background: '#DBE1B9', borderRadius: 32}} />
        <div style={{width: 830, height: 75, left: 25, top: 15, position: 'absolute', textAlign: 'center', color: '#EFC983', fontSize: 36, fontFamily: 'Laila', fontWeight: '700', letterSpacing: 1.62, wordWrap: 'break-word'}}>Please enter your user information below</div>
    </div>
    <div style={{width: 351, height: 160, left: 606, top: 404, position: 'absolute'}}>
        <div style={{width: 351, height: 160, left: 0, top: 0, position: 'absolute', background: '#DBE1B9', borderRadius: 13}} />
        <div style={{width: 116.26, height: 27.61, left: 6, top: 104, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 20, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Password:</div>
        <div style={{width: 90.79, height: 27.61, left: 19, top: 23, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 24, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Email:</div>
        <div style={{width: 209, height: 48, left: 122, top: 13, position: 'absolute'}}>
            <div style={{width: 209, height: 48, left: 0, top: 0, position: 'absolute', background: '#EFC983', borderRadius: 66}} />

            <input
                type="email"
                className="passwordInput"
                style={{width: 180.72, height: 27.91, left: 11.52, top: 8.05, position: 'absolute', borderRadius: 66}}
                value={email}
                onChange={handleEmailChange}
            />
        </div>
        <div style={{width: 209, height: 48, left: 122, top: 94, position: 'absolute'}}>
            <div style={{width: 209, height: 48, left: 0, top: 0, position: 'absolute', background: '#EFC983', borderRadius: 66}} />
            <div style={{width: 180.72, height: 27.91, left: 13.52, top: 10.05, position: 'absolute', background: 'white', borderRadius: 66}} />
        </div>
    </div>
    <div style={{width: 178, height: 65, left: 997, top: 452, position: 'absolute'}}>
        <div style={{width: 178, height: 65, left: 0, top: 0, position: 'absolute', background: '#EEDAB6', borderRadius: 77, border: '0.50px black solid'}} />
        <div style={{width: 133, height: 33, left: 24, top: 13, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 24, fontFamily: 'Kiwi Maru', fontWeight: '500', wordWrap: 'break-word'}}>Submit</div>
    </div>
</div>


    );
}