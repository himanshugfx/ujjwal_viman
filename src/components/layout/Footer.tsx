import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 py-16 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
                <div className="col-span-1 md:col-span-1">
                    <Link href="/" className="flex items-center gap-3 mb-6">
                        <img src="/assets/img/logo-light.png" alt="Logo" className="h-12 w-auto" />
                        <span className="text-2xl font-bold text-white">Ujjwal Viman</span>
                    </Link>
                    <p className="text-sm leading-relaxed mb-6">
                        Pioneering Agricultural Drone Technology in India. Empowering farmers with DGCA certified solutions for a sustainable future.
                    </p>
                </div>

                <div>
                    <h4 className="text-white font-semibold mb-6">Quick Links</h4>
                    <ul className="space-y-4 text-sm">
                        <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                        <li><Link href="/ujjwal-viman" className="hover:text-white transition-colors">Ujjwal Viman Drone</Link></li>
                        <li><Link href="/blogs" className="hover:text-white transition-colors">Our Blogs</Link></li>
                        <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-white font-semibold mb-6">Contact Info</h4>
                    <ul className="space-y-4 text-sm">
                        <li>+91 8007918999</li>
                        <li>info@ujjwalviman.com</li>
                        <li>
                            Survey No. 7/5, Plot No. 22, Jadhavwadi, New Mondha, Chhatrapati Sambhajinagar, Aurangabad, 431001
                        </li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-white font-semibold mb-6">Newsletter</h4>
                    <p className="text-sm mb-4">Stay updated with our latest innovations.</p>
                    <div className="flex gap-2">
                        <input
                            type="email"
                            placeholder="Your email"
                            className="bg-gray-800 border-none rounded-lg px-4 py-2 text-sm w-full focus:ring-1 focus:ring-green-500 outline-none"
                        />
                        <button className="bg-green-700 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-sm transition-colors">
                            Join
                        </button>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto border-t border-gray-800 mt-16 pt-8 text-center text-xs">
                <p>&copy; {new Date().getFullYear()} Ujjwal Viman. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
