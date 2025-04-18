import Link from "next/link";

export default function Navlinks() {
    return (
        <ul className="md:flex justify-between  gap-5 hidden text-[13px] font-semibold">
            <li className="hover:text-secondary py-6 active"><Link href="/">Home</Link></li>
            <li className="hover:text-secondary py-6"><Link href="/services">Services</Link></li>
            <li className="hover:text-secondary py-6"><Link href="/projects">Projects</Link></li>
            <li className="hover:text-secondary py-6"><Link href="/gallery">Gallery</Link></li>
            <li className="hover:text-secondary py-6"><Link href="/contact-us">Contact Us</Link></li>
        </ul>
    )
}