import Image from "next/image"
export default function Certificate({ image}: any) {
    return (
        <div className="card shadow-md bg-red-500 w-72 sm:w-full">
            <Image src={`/sertif/${image}.jpg`} alt="logo-skill" width={5000} height={5000} />
        </div>
    )
}