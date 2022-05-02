import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from "react-icons/fa";
import {FiUsers} from "react-icons/fi";

const About = () =>{
    return (
        <section className="" id="about">

            <h5 className="">Get To Know</h5>
          <h2 className=""> About Me</h2>
            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="About image"/>
                    </div>
                </div>
                <div className="about__content">
                    <div className="about__cards">
                        <article className="about__card">
                            <FaAward className='about_icon'/>
                            <h5>Experience</h5>
                            <small className="">3+ Years</small>
                        </article>

                        <article className="about__card">
                            <FiUsers className='about_icon'/>
                            <h5>Clients</h5>
                            <small className="">200+ Worldwide</small>
                        </article>

                        <article className="about__card">
                            <FaAward className='about_icon'/>
                            <h5>Projects</h5>
                            <small className="">80+ Completed</small>
                        </article>
                    </div>

                    <p>
                        ‘’Toute l'éthique médicale repose finalement sur le caractère moral du médecin Dans ces
                        moments de décision clinique, lorsque personne ne regarde, la moralité du médecin est la
                        dernière sauvegarde du patient.
                    </p>
                    <a href="#contact" className="btnbtn-primary">Let's Talk</a>

                </div>
            </div>
        </section>


    )
}
export default About