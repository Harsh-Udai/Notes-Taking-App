import React,{Component} from 'react';
import './Design/main.css';
import AnimatedText from 'react-animated-text-content';
import GoogleSignup from './googleSignup';
import Infi from '../Assets/infinite.gif';
import Content from './content';


export default function main(){

    return (
        <div className='cont'>
            <div className='headImg'>
                
            </div>
            <div>
                <picture>
                    <img width="120px" src={Infi}></img>
                </picture>
            </div>
            <div>
                <div className='headText'>
                    <AnimatedText
                        type='words'
                        interval={0.04}
                        duration={0.8}
                        animation={{
                        y: '250px',
                        ease: 'ease',
                        }}
                    >
                       " Hello World "
                    </AnimatedText>

                </div>
                
                <div>
                <div className='headText'>
                    <AnimatedText
                        type='words'
                        interval={0.04}
                        duration={0.8}
                        animation={{
                        y: '250px',
                        ease: 'ease',
                        }}
                    >
                        Infinity
                    </AnimatedText>

                </div>
                <div>
                    <GoogleSignup />
                </div>
                </div>
                <div>
                    <Content />
                </div>
            </div>
                
        </div>
    )
}