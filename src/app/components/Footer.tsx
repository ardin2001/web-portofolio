import Image from "next/image";
export default function Footer() {
    return (
        <footer className="footer mt-16 sm:mt-24 lg:mt-32 grid gap-20 bg-primary text-white py-10 px-6 sm:px-10 md:px-16 lg:px-24 xl:px-36 mx-auto">
            <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
                <div className="info">
                    <h3 className="text-3xl font-semibold"><span className="text-tertiary font-bold">Web</span> <span className="text-secondary font-bold">Portofolio</span></h3>
                    <div className="oauth flex gap-2 mt-1.5">
                        <button className="bg-white drop-shadow-login lg:drop-shadow-none lg:bg-white text-white lg:text-secondary font-bold rounded-full p-1.5"><Image src={"/medsos/google.png"} alt="google" width={15} height={15} /></button>
                        <button className="bg-white drop-shadow-login lg:drop-shadow-none lg:bg-white text-white lg:text-secondary font-bold rounded-full p-1.5"><Image src={"/medsos/fb.png"} alt="fb" width={15} height={15} /></button>
                        <button className="bg-white drop-shadow-login lg:drop-shadow-none lg:bg-white text-white lg:text-secondary font-bold rounded-full p-1.5"><Image src={"/medsos/twitter.png"} alt="twitter" width={15} height={15} /></button>
                        <button className="bg-white drop-shadow-login lg:drop-shadow-none lg:bg-white text-white lg:text-secondary font-bold rounded-full p-1.5"><Image src={"/medsos/ig.png"} alt="ig" width={15} height={15} /></button>
                    </div>
                </div>
                <div className="company grid gap-1.5">
                    <h5 className="font-semibold lg:font-bold text-lg text-tertiary">Company</h5>
                    <div className="grid gap-0.5">
                        <p>Home</p>
                        <p>About</p>
                        <p>Product</p>
                        <p>Contact Us</p>
                    </div>
                </div>
                <div className="legal grid gap-1.5">
                    <h5 className="font-semibold lg:font-bold text-lg text-tertiary">Legal</h5>
                    <div className="grid gap-0.5">
                        <p>Privacy Policy</p>
                        <p>Terms & Conditions</p>
                        <p>Cookie Policy</p>
                        <p>FAQ</p></div>
                </div>
                <div className="contact grid gap-1.5">
                    <h5 className="font-semibold lg:font-bold text-lg text-tertiary">Contact Us</h5>
                    <div className="grid gap-0.5">
                        <p>08123456789</p>
                        <p>aseloleycafe@gmail</p>
                        <p>Jln. Aseloley No.44 Lumajang</p>
                    </div>
                </div>
            </div>
            <div>
                <hr />
                <p className="font-semibold lg:font-bold text-end mt-1 text-secondary">Copyright © 2022. Aseloley. All Rights Reserved</p>
            </div>
        </footer>
    )
}