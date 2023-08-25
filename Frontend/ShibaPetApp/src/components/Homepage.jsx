import Shibagif from "../assets/eva-sanchez-purple-shibabueno.gif";
import { Link } from "react-router-dom";
import React from "react";
import { useContext } from "react";
import { LoginContext } from "./LoginContext";



export default function HomePage(){
  const {loginStatus} = useContext(LoginContext);


if (loginStatus !== 'success'){
    return (

<div style={{width: 1512, height: 982, position: 'relative', background: '#BEB378'}}>
  <div style={{width: 1512, height: 65, left: 0, top: 914, position: 'absolute'}}>
    <div style={{width: 1512, height: 65, left: 0, top: 0, position: 'absolute', background: '#E0C223'}} />
    <div style={{left: 36, top: 0, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 12, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}/>
    <div style={{left: 588, top: 32, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 16, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>© 2023 Kodac Developement All Rights Reserved.</div>
  </div>
  <img style={{ width: '216px', height: '189px', left: '648px', top: '491px', position: 'absolute', borderRadius: '170px', border: '0.50px black solid' }} src={Shibagif} alt="ShibaGif" />
  <div style={{width: 876, height: 102, left: 344, top: 205, position: 'absolute'}}>
    <div style={{width: 876, height: 102, left: 0, top: 0, position: 'absolute', background: '#DBE1B9', borderRadius: 32}} />
    <div style={{left: 288, top: 59, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 32, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>ポジティブ</div>
    <div style={{left: 498, top: 59, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 32, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>樹皮!</div>
    <div style={{width: 830, height: 75, left: 22, top: 3, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 40, fontFamily: 'Indie Flower', fontWeight: '400', wordWrap: 'break-word'}}>Welcome To Pawsitive Borks!</div>
  </div>
  <div style={{width: 125, height: 42, left: 546, top: 385, position: 'absolute'}}>
    <div style={{width: 125, height: 42, left: 0, top: 0, position: 'absolute', background: '#EFC983', borderRadius: 47, border: '0.50px black solid'}} />
    <Link to={"/login"}>
    <div style={{width: 101, height: 25, left: 12, top: 8, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 24, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word'}}>Login</div>
    </Link>
  </div>
  <div style={{width: 125, height: 42, left: 693, top: 727, position: 'absolute'}}>
    <div style={{width: 125, height: 42, left: 0, top: 0, position: 'absolute', background: '#EFC983', borderRadius: 47, border: '0.50px black solid'}} />
    <Link to={"/about"}>
    <div style={{width: 101, height: 25, left: 12, top: 8, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 24, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word'}}>About </div>
    </Link>
  </div>
  <div style={{width: 125, height: 42, left: 842, top: 384, position: 'absolute'}}>
    <div style={{width: 125, height: 42, left: 0, top: 0, position: 'absolute', background: '#EFC983', borderRadius: 74, border: '0.50px black solid'}} />
    <Link to={"/signup"}>
    <div style={{width: 101, height: 25, left: 12, top: 8, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 24, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word'}}>Sign up</div>
    </Link>
  </div>
</div>
    )}
    else {
      return (
        <div style={{width: 1512, height: 982, position: 'relative', background: '#BEB378'}}>
  <div style={{width: 1512, height: 65, left: 0, top: 914, position: 'absolute'}}>
    <div style={{width: 1512, height: 65, left: 0, top: 0, position: 'absolute', background: '#E0C223'}} />
    <div style={{left: 36, top: 0, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 12, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}/>
    <div style={{left: 588, top: 32, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 16, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>© 2023 Kodac Developement All Rights Reserved.</div>
  </div>
  <img style={{ width: '216px', height: '189px', left: '648px', top: '491px', position: 'absolute', borderRadius: '170px', border: '0.50px black solid' }} src={Shibagif} alt="ShibaGif" />
  <div style={{width: 876, height: 102, left: 344, top: 205, position: 'absolute'}}>
    <div style={{width: 876, height: 102, left: 0, top: 0, position: 'absolute', background: '#DBE1B9', borderRadius: 32}} />
    <div style={{left: 288, top: 59, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 32, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>ポジティブ</div>
    <div style={{left: 498, top: 59, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 32, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>樹皮!</div>
    <div style={{width: 830, height: 75, left: 22, top: 3, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 40, fontFamily: 'Indie Flower', fontWeight: '400', wordWrap: 'break-word'}}>Welcome To Pawsitive Borks!</div>
  </div>
  <div style={{width: 125, height: 42, left: 546, top: 385, position: 'absolute'}}>
    <div style={{width: 125, height: 42, left: 0, top: 0, position: 'absolute', background: '#EFC983', borderRadius: 47, border: '0.50px black solid'}} />
    <Link to={"/account"}>
    <div style={{width: 101, height: 25, left: 12, top: 8, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 24, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word'}}>Account Details</div>
    </Link>
  </div>
  <div style={{width: 125, height: 42, left: 693, top: 727, position: 'absolute'}}>
    <div style={{width: 125, height: 42, left: 0, top: 0, position: 'absolute', background: '#EFC983', borderRadius: 47, border: '0.50px black solid'}} />
    <Link to={"/about"}>
    <div style={{width: 101, height: 25, left: 12, top: 8, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 24, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word'}}>About </div>
    </Link>
  </div>
  <div style={{width: 125, height: 42, left: 842, top: 384, position: 'absolute'}}>
    <div style={{width: 125, height: 42, left: 0, top: 0, position: 'absolute', background: '#EFC983', borderRadius: 74, border: '0.50px black solid'}} />
    <Link to={"/userInventory"}>
    <div style={{width: 101, height: 25, left: 12, top: 8, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 24, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word'}}>Your inventory</div>
    </Link>
  </div>
</div>
      )
    }
}