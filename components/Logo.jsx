import Link from "next/link";
import FramerMagnetic from "./FramerMagnetic";

const Logo = () => {
  return (
    <Link href="/">
        <FramerMagnetic>
            <p className="font-semibold">Patrick Roberto Halim</p>
        </FramerMagnetic>
    </Link>
  )
}

export default Logo