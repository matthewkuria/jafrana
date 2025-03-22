import Link from "next/link";

export default function Navlinks() {
    return (
        <ul className="md:flex justify-between  gap-5 hidden text-[13px] font-semibold">
            <li className="hover:text-primary py-6 active"><Link href="/">Home</Link></li>
            <li className="hover:text-primary py-6"><Link href="/services">Services</Link></li>
            <li className="hover:text-primary py-6"><Link href="/gallery">Gallery</Link></li>
            <li className="hover:text-primary py-6"><Link href="/blog">Blog</Link></li>
            <li className="hover:text-primary py-6"><Link href="/contact-us">Contact Us</Link></li>
        </ul>
    )
}