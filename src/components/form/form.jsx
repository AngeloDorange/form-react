import React, {useEffect, useRef} from 'react'
import { gsap } from "gsap";
import './form.css'


const Form = () =>{
    // store a reference to the box div
  const btn = useRef();
  const h = useRef();

  // wait until DOM has been rendered
  useEffect(() => {
    gsap.to("h1", { rotateX: "360", autoAlpha: 1,  ease: 1,  duration: 1.20, stagger: 1.5 }, "+=0.20")
    gsap.to(".btn", { rotateX: "-360", autoAlpha: 1,  ease: 1, duration: 1, stagger: 0.20 }, "+=0.30");
  });


    return (
       <section>
           <div className="title">
              <h3>Start for free</h3>
              <h1>Create new account<span>.</span></h1>
              <p>Already a member ? <a href="#">Log In</a></p>
           </div>

           <div className="container">
               <form action="#" method="post">
                   <div className="name">
                       <input type="text" name='name' placeholder='Name' required />
                       <input type="text" name='lastname' placeholder='Last name' required />
                   </div>
                   <input type="email" name="email" placeholder='Email' required />
                   <input type="password" name="password" placeholder='Password' required  />

                   <div className="form__btn">
                       <button className='btn'>Change method</button>
                       <button className='btn btn-primary'>Create account</button>
                   </div>
               </form>
           </div>
       </section>

    )
}

export default Form