import Image from "next/image";
import Link from "next/link"
import jafranaHomeLogo from "../../public/home-icon.png";
export default function Navlogo() {
    return (
            <div className="">
                <Link href="/" className="flex flex-col items-center">
                    <Image src={jafranaHomeLogo} alt="Jafrana construction  logo" width={100} height={100} className="w-24 h-24" />
                </Link>
            </div>
    )
}