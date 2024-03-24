import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const Footer = () => {
    return (
        <div className="bg-[#1A1919]">
            <footer className="footer p-10 text-base-content container mx-auto justify-between pt-[130px]">
            <aside className="text-white">
                <h2>CareerHub</h2>
                <p className="w-[300px]">There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>
                <p className="flex text-4xl gap-4"><FaFacebookF className="text-blue-600 bg-white p-[3px] rounded-full"/><FaTwitter className="text-blue-400 bg-white p-[3px] rounded-full"/><FaInstagram className="text-pink-700 bg-white p-[3px] rounded-full"/></p>
            </aside> 
            <nav className="text-white">
                <h6 className="footer-title">Company</h6> 
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Work</a>
                <a className="link link-hover">Latest News</a>
                <a className="link link-hover">Careers</a>
            </nav> 
            <nav className="text-white">
                <h6 className="footer-title">Product</h6> 
                <a className="link link-hover">Prototype</a>
                <a className="link link-hover">Plans & Pricing</a>
                <a className="link link-hover">Customers</a>
                <a className="link link-hover">Integrations</a>
            </nav> 
            <nav className="text-white">
                <h6 className="footer-title">Support</h6> 
                <a className="link link-hover">Help Desk</a>
                <a className="link link-hover">Sales</a>
                <a className="link link-hover">Become a Partner</a>
                <a className="link link-hover">Developers</a>
            </nav> 
            <nav className="text-white">
                <h6 className="footer-title">Contact</h6> 
                <a className="link link-hover">524 Broadway , NYC </a>
                <a className="link link-hover">+1 777 - 978 - 5570</a>
            </nav>
            </footer> 
            <footer className="footer px-10 py-4 border-t text-base-content container mx-auto pb-[130px] pt-[50px]">
            <aside className="items-center grid-flow-col text-white">
                <p>@2023 CareerHub. All Rights Reserved</p>
            </aside> 
            <nav className="md:place-self-center md:justify-self-end">
                <div className="grid grid-flow-col gap-4 text-white">
                    <p>Powered by CareerHub</p>
                </div>
            </nav>
            </footer>
        </div>
    );
};

export default Footer;