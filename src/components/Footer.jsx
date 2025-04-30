import React from "react";
import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <div className="md:mx-10">
            <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-30 text-sm ">

                {/* left section */}
                <div>
                    <img  className="mb-5 w-40"src={assets.logo} alt="" />
                    <p className="w-full md:w-2/2 text-gray-600 leading-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis repellendus officiis eveniet asperiores doloribus placeat consectetur veniam, saepe veritatis nisi tempora nostrum? Accusamus neque doloribus beatae architecto, repellendus consequuntur recusandae.</p>
                </div>
                {/* center section */}
                <div>
                    <p className="text-xl font-medium mb-5">COMPANY</p>
                    <ul className="flex flex-col gap-2 text-gray-600">
                         <NavLink to="/"><li>Home</li></NavLink>
                       <NavLink to="/about"> <li>About</li></NavLink>
                        <NavLink to="/contact" ><li>Contact</li></NavLink>
                        <li>privacy police</li>
                    </ul>

                </div>

                {/* right section */}
                <div>
                    <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
                    <ul className="flex flex-col gap-2 text-gray-600">
                        <li>+1-212-456-7890</li>
                        <li>prescripto@gmail.com</li>

                    </ul>
                </div>
            </div>
            {/* copyright text */}
            <div>
                <hr>
                </hr>
                <p className="py-5 text-sm text-center">Copyright2025 @ Prescripto- All Right Reserved</p>
            </div>

        </div>
    )

}
export default Footer;
