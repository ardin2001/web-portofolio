import Image from "next/image"
export default function CardProject({ image,title, desc }: any) {
    return (
        <div className="card bg-white pb-2.5 border-2 shadow-md">
            <Image src={image} alt="logo-skill" width={5000} height={5000} className="text-7xl mb-1.5 text-secondary mx-auto" />
            <h4 className="font-semibold lg:font-bold text-tertiary text-lg px-4">{title}</h4>
            <p className="px-4">{desc}</p>
        </div>
    )
}