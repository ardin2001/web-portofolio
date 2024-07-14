import Image from "next/image"
import Link from "next/link"
export default function CardProject({ image, link, title, desc }: any) {
    return (
        <Link href={link} className="card bg-white pb-2.5 border-2 shadow-md grid">
            <Image src={image} alt="logo-skill" width={5000} height={5000} className="text-7xl mb-1.5 text-secondary mx-auto" />
            <h4 className="font-semibold lg:font-bold text-tertiary text-lg px-4">{title}</h4>
            <p className="px-4 mb-5">{desc}</p>
            <Link href={link} className="btn bg-primary font-semibold text-sm w-max h-max text-white px-6 mx-4 self-end justify-self-end py-0.5">View</Link>
        </Link>
    )
}