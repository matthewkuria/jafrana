import Image from "next/image";
import Link from "next/link"
import jafranaHomeLogo from "../../public/home-icon.png";
export default function Navlogo() {
    return (
            <div className="">
            <Link href="/" className="flex flex-col items-center">
                <Image src={jafranaHomeLogo} alt="Jafrana construction  logo" width={80} height={80} className="w-18 h-18" />
                <p className="text-primary uppercase">Jafrana</p>
            </Link>
            </div>
    )
}