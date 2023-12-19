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

        {/* old footer */}
        {/* <footer className="bg-white border-t-[1] text-black p-4">
        <div className="container mx-auto">
            <div className="flex justify-between items-start px-10">
            <div>
                <h2 className="landing-Footer-h2">
                <ul>Fution</ul>
                </h2>
                <ul className="space-y-1 ">
                <Link className="hover:underline hover:cursor-pointer" href={"/"}>
                    Home
                </Link>
                <li className="hover:underline hover:cursor-pointer">Sitemap</li>
                <li className="hover:underline hover:cursor-pointer">FAQ</li>
                </ul>
            </div>

            <div>
                <h2 className="landing-Footer-h2">
                <u className="">Contact Us</u>
                </h2>

                <ul>
                <li className="flex items-center">
                    <img
                    width="30"
                    height="30"
                    src="https://img.icons8.com/color/48/whatsapp--v1.png"
                    alt="whatsapp--v1"
                    />
                    021-3456789
                </li>
                <li className="flex items-center">
                    <img
                    width="30"
                    height="30"
                    src="https://img.icons8.com/ios-glyphs/60/send-mass-email.png"
                    alt="send-mass-email"
                    />
                    cs@fution.co.id
                </li>
                </ul>
            </div>

            <div>
                <h2 className="landing-Footer-h2">
                <u className="">Social Media</u>
                </h2>
                <div className="flex space-x-2">
                <img
                    src="https://www.svgrepo.com/show/303114/facebook-3-logo.svg"
                    width="30"
                    height="30"
                    alt="fb"
                />
                <img
                    src="https://www.svgrepo.com/show/303115/twitter-3-logo.svg"
                    width="30"
                    height="30"
                    alt="tw"
                />
                <img
                    src="https://www.svgrepo.com/show/303145/instagram-2-1-logo.svg"
                    width="30"
                    height="30"
                    alt="inst"
                />
                <img
                    src="https://www.svgrepo.com/show/28145/linkedin.svg"
                    width="30"
                    height="30"
                    alt="in"
                />
                </div>
            </div>

            <div>
                <h2 className="landing-Footer-h2">SECURITY</h2>
                <img
                src="/security.png"
                alt="Security Badge"
                width={100}
                height={100}
                />
            </div>
            </div>
            <div className="text-center text-sm mt-4">
            © 2023 Fution. All rights reserved.
            </div>
        </div>
        </footer> */}
    </>)
}

export default FooterAlt