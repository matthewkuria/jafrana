import Image from "next/image";
import Link from "next/link"
import jafranaHomeLogo from "../../public/home-icon.png";
export default function Navlogo() {
    return (
            <div className="">
            <Link href="/">
                <Image src={jafranaHomeLogo} alt="Thika Greens Golf logo" width={80} height={80} className="w-18 h-18" />
            </Link>
            </div>
    )
}