import React, {useEffect, useRef} from 'react'
import { gsap } from "gsap";
import './nav.css'


const Navigation = () =>{

      // store a reference to the box div
  
  const label = useRef();

  // wait until DOM has been rendered
  useEffect(() => {
    gsap.to("label", { rotationY: "360", autoAlpha: 1,  ease: 1, duration: 1.30, stagger: 1.5 }, "+=0.10");
  });

    return (
        <nav>
            <div className="logo">
              <label><span>i</span>CHAT</label>
            </div>

           <a href="#">About us</a>
           <a href="#">Join</a>

           

        </nav>
    )
}

export default Navigation