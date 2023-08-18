import React from 'react';
import ShibaGifPicture from "../assets/eva-sanchez-purple-shibabueno.gif";
import { Link } from 'react-router-dom';

export default function AboutPage() {
  return (
<div style={{width: 1512, height: 982, position: 'relative', background: '#BEB378'}}>
    <div style={{width: 1512, height: 65, left: 0, top: 914, position: 'absolute'}}>
        <div style={{width: 1512, height: 65, left: 0, top: 0, position: 'absolute', background: '#E0C223'}} />
        <div style={{left: 588, top: 32, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 16, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>© 2023 Kodac Developement All Rights Reserved.</div>
    </div>
    <img style={{width: 216, height: 189, left: 648, top: 491, position: 'absolute', borderRadius: 170, border: '0.50px black solid'}} src={ShibaGifPicture} />
    <div style={{width: 830, height: 75, left: 341, top: 38, position: 'absolute'}}>
        <div style={{width: 474, height: 49, left: 175, top: 0, position: 'absolute', background: '#DBE1B9', borderRadius: 32}} />
        <div style={{width: 830, height: 75, left: 0, top: 0, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 40, fontFamily: 'Indie Flower', fontWeight: '400', wordWrap: 'break-word'}}>About Pawsitive Borks: </div>
    </div>
    <div style={{width: 125, height: 42, left: 693, top: 727, position: 'absolute'}}>
        <div style={{width: 125, height: 42, left: 0, top: 0, position: 'absolute', background: '#EFC983', borderRadius: 47, border: '0.50px black solid'}} />
        <Link to={'/'}>
        <div style={{width: 101, height: 25, left: 12, top: 8, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 24, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word'}}>Return</div>
        </Link>
    </div>
    <div style={{width: 864, height: 370, left: 324, top: 113, position: 'absolute', background: 'rgba(255, 240.12, 240.12, 0.78)', borderRadius: 34, border: '0.50px black solid'}} />
    <div style={{width: 826, height: 270, left: 345, top: 140, position: 'absolute', textAlign: 'center'}}><span style={{color: 'black', fontSize: 32, fontFamily: 'Indie Flower', fontWeight: '400', wordWrap: 'break-word'}}>Hi, My name is Dakota and have a small place in my heart for shiba inus so I decided to build a character game for them! </span><span style={{color: 'black', fontSize: 40, fontFamily: 'Indie Flower', fontWeight: '400', wordWrap: 'break-word'}}>O</span><span style={{color: 'black', fontSize: 32, fontFamily: 'Indie Flower', fontWeight: '400', wordWrap: 'break-word'}}>nce you sign up, you can create a shiba with different attributes and will be given a shiba character based on the attributes you gave! Pretty cool huh? Try it out now! Each shiba can get up to 100 experience points, and unlock several tricks to perform!</span></div>
</div>
  );
}

