import Image from "next/image"
export default function CardSkill({ image,title, desc }: any) {
    return (
        <div className="card bg-white py-5 px-10 border-2 text-center border-secondary rounded-lg">
            <Image src={image} width={5000} height={5000} alt="logo-skill" className="text-7xl mb-1.5 text-secondary mx-auto" />
            <h4 className="font-bold">{title}</h4>
            <p>{desc}</p>
        </div>
    )
}