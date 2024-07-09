import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button';
import { FaFacebookF } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";



const Template = () => {
  return (
    <div className='main  m-auto col-10 border'style={{boxShadow:"0px 0px 10px gray"}}>
        <div className="navbar">
            <h5 className="logo ms-4 pt-5">QUETS</h5>
            <div className="nav ">
                <ul className='d-flex '>
                    <li className='list-unstyled p-2'>HOME</li>
                    <li className='list-unstyled p-2'>ABOUT</li>
                    <li className='list-unstyled p-2'>CONTACT</li>
                    <li className='list-unstyled p-2 me-5'>BLOG</li>
                </ul>
            </div>
        </div>
        <div className="content   d-flex p-3">
            <div className=" left col-5 m-auto m-3">
                <h2 className='text-start'>Grow your skills, <br />
                define your future                  
                </h2>
                <p className='text-start text-secondary'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur odio earum provident, delectus quidem.</p>
                <div className='text-start'>
                <button className='m-1 btn btn-dark'>EXPLORE COURES</button>
                <button className='m-1 btn btn-secondary'>LEARN MORE</button>
                </div>
                <div className="icons d-flex p-2 m-2">
                    <div className="facebook p-2 text-primary  fs-5"><FaFacebookF /></div>
                    <div className="instagram p-2 text-primary fs-5"><FaInstagramSquare /></div>
                    <div className="twitter p-2 text-primary fs-5"><FaTwitter /> </div>
                    <div className="git p-2 text-primary fs-5"><FaGithub />                    </div>
                </div>
            </div>
            <div className="right col-6 m-auto">
                <img src="https://www.shutterstock.com/image-vector/continuing-education-lifelong-knowledge-development-260nw-2269736329.jpg" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Template
