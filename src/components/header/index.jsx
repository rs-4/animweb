import { forwardRef, useState, useLayoutEffect , useRef} from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './style.module.scss';
import Magnetic from '../magnetic';
import gsap from 'gsap';

const Header = forwardRef(function index(props, ref) {

    const button = useRef(null)

    useLayoutEffect( () => {
        gsap.registerPlugin(ScrollTrigger)
        gsap.to(button.current, {
            scrollTrigger: {
                trigger: button.current,
                start: 0,
                end: window.innerHeight,
                onLeave: () => {gsap.to(button.current, {scale: 1, duration: 0.25, ease: "power1.out"})},
                onEnterBack: () => {gsap.to(button.current, {scale: 0, duration: 0.25, ease: "power1.out"})}
            }
        })
    }, [])


  return (




    <div className={styles.header}>
        <Magnetic>
          <div ref={button} className={styles.burger}>
            <div ref={ref} className={styles.bounds}></div>
          </div>
        </Magnetic>
    </div>
  )}
)

export default Header