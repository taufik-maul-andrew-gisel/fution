import Link from "next/link"
import { HiOutlineMail } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function FooterAlt() {
    return (<>
        <div className="w-full border-t-[1px] border-slate-300 mt-14">
            <div className="footer-text pb-2">
                <div>
                    <h4>Customer help</h4>
                    <p>Contact us</p>
                    <p>Help Centre</p>
                    <p>Staying safe online</p>
                    <p>FAQ</p>
                    <p>Accessibility</p>
                </div>
                <div>
                    <h4>Useful links</h4>
                    <p>Businesses near you</p>
                    <p>Lenders near you</p>
                    <p>Pinjol 101</p>
                    <p>FuTion Gift Cards</p>
                    <p>FuTion Radio</p>
                </div>
                <div>
                    <h4>About FuTion</h4>
                    <p>Introducing us</p>
                    <p>Our brands</p>
                    <p>Careers</p>
                    <p>Our history</p>
                    <p>Success stories</p>
                </div>
                <div className="pr-8">
                    <h4>Contact Us</h4>
                    <div className="flex gap-2 items-center">
                        <div className="my-1 flex justify-center items-center text-2xl">
                            <HiOutlineMail />
                        </div>
                        <p>fution08@gmail.com</p>
                    </div>
                    <div className="flex gap-2 items-center">
                        <div className="my-1 flex justify-center items-center text-2xl">
                            <FaWhatsapp />
                        </div>
                        <p>012-3456-7890</p>
                    </div>
                    <div className="flex gap-2 items-center">
                        <div className="my-1 flex justify-center items-center text-2xl">
                            <FaInstagram />
                        </div>
                        <p>@fution08</p>
                    </div>
                    <div className="text-center text-sm mt-4">
                        © 2023 Fution. All rights reserved.
                    </div>
                </div>
            </div>
        </div>
    </>)
}

export default FooterAlt