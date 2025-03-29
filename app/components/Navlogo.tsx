import Image from "next/image";
import Link from "next/link"
import jafranaHomeLogo from "../../public/home-icon.png";
export default function Navlogo() {
    return (
            <div className="">
                <Link href="/" className="flex flex-col items-center">
                    <Image src={jafranaHomeLogo} alt="Jafrana construction  logo" width={50} height={50} className="w-12 h-12" />
                    <p className="text-secondary uppercase">Jafrana</p>
                </Link>
            </div>
    )
}