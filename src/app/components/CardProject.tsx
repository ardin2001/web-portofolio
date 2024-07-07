import Image from "next/image"
export default function CardProject({ image,title, desc }: any) {
    return (
        <div className="card bg-white p-1.5 px-2 border-2 shadow-md">
            <Image src={image} alt="logo-skill" width={5000} height={5000} className="text-7xl mb-1.5 text-secondary mx-auto" />
            <h4 className="font-semibold text-secondary text-lg">{title}</h4>
            <p className="">{desc}</p>
        </div>
    )
}