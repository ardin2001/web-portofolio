import Image from "next/image";
import Navbar from "./components/Navbar";
import CardMarket from "./components/CardMarket";
import Maps from "./components/Maps";
import { PiBuildingOffice } from "react-icons/pi";
import { MdOutlineLocalPostOffice } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import Link from "next/link";
import Theme from "./components/Theme";
import Footer from "./components/Footer";
import CardSkill from "./components/CardSkill";
import CardProject from "./components/CardProject";
import Certificate from "./components/Certificate";

const project = [
  {image : "/project/atr.png", link:"https://fe-dinas-pertanahan.vercel.app", title : "ATR/BPN Jember", desc:"Pada project ini saya berkesemapatan sebagai frontend web menggunakan React JS dan Tailwind CSS."}, 
  {image : "/project/pemilu.png", link:"https://pemilu.himatifunej.org",title :"Pemilu HIMATIF", desc:"Pada project ini saya berkesemapatan sebagai frontend web menggunakan React JS dan Tailwind CSS."}, 
  {image : "/project/soul.png",link:"https://soul-cafe.vercel.app", title : "Soul Cafe App", desc:"Project ini merupakan fake project fullstack dimana saya membuat website menggunakan Next JS, Tailwind CSS, Firebase dan state management menggunakan redux."}, 
  {image : "/project/curhatin.png", link:"https://curahanhati.vercel.app", title : "Curhatin", desc:"Project ini merupakan tugas pada kelas dicoding pada saat program MSIB Batch 3. Project ini menggunakan React JS dan state management menggunakan redux."}, 
  {image : "/project/ppl.jpg", link:"https://github.com/ardin2001/ppl_rev2", title : "E-Chest", desc:"Project ini merupakan tugas akhir mata kuliah Pengembangan Perangkat Lunak (PPL). Dimana saya berposisi sebagai programmer dengan jobdesk membuat website menggunakan Express JS dan Bootstrap CSS."}, 
  {image : "/project/skripsi.png", link:"https://github.com/ardin2001/web-skripsi",title:"Website Skripsi", desc:"Project ini merupakan project skripsi, dimana menggunakan framework flask, Tailwind CSS, dan machine learning."}, 
  {image : "/project/pwa.png",link:"https://github.com/ardin2001/web-skripsi", title : "Restaurant catalogue", desc : "Project ini merupakan latihan untuk membuat website Progressive Web App (PWA) dan implementasi module bundler (Webpack)."}
];
const certificate_image = [1, 2, 3, 4, 5, 6, 7,8,9,10,11,12];
export default async function Home() {
  return (
    <main className="bg-low">
      <Navbar />
      <div className="grid justify-center mt-14 sm:mt-16 lg:mt-20 gap-10 w-85/100 md:h-4/5 lg:w-3/4 mx-auto">
        <div className="banner grid sm:grid-cols-2 gap-8 sm:gap-0 md:items-center">
          <div className="left">
            <div className="caption grid gap-2">
              <h3 className="text-qbg-quaternary text-3xl lg:text-5xl font-semibold mb-1 lg:mb-3"><span className="text-tertiary">Hello,</span> <span className="text-quaternary">I&apos;am</span></h3>
              <h3 className="text-white bg-primary text-3xl py-1 px-1.5 sm:px-2 lg:p-2.5 lg:text-5xl font-bold w-max">Ardin Nugraha</h3>
              <p className="">Untuk melihat daftar riwayat hidup saya, anda dapat menekan tombol download dibawah ini.</p>
              <Link href="/cv.pdf" className="py-1 bg-secondary rounded-lg font-semibold w-min px-4 lg:px-5">Download</Link>
            </div>
          </div>
          <div className="right grid self-center">
            <Image src="/profile.jpg" alt="login" width={5000} height={5000} className="w-3/4 justify-self-end md:w-85/100 lg:w-1/2 rounded-lg -scale-x-100" />
          </div>
        </div>
      </div>
      <div className="about bg-tertiary mt-16 sm:mt-24 lg:mt-32 xl:mt-36 py-8 lg:py-5">
        <div className="grid justify-centergap-10 w-85/100 md:h-4/5 lg:w-3/4 mx-auto">
          <div className="banner grid sm:grid-cols-2 gap-8 sm:gap-10 justify-items-center">
            <Image src="/profile-about.png" alt="profile-about" width={5000} height={5000} className="w-2/6 sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-2/5" />
            <div className="right self-center">
              <div className="caption grid gap-1">
                <h3 className="text-white text-3xl lg:text-5xl font-semibold"><span className="text-secondary font-bold">About</span> <span className="text-primary font-bold">Me</span></h3>
                <p className="text-white text-justify">A recent graduate from the Information Technology department, Faculty of Computer Science at the
                  University of Jember with a GPA of 3.91. I have experience as a laboratory assistant, involvement in student
                  organizations, and working on several information system projects. I am interested in the fields of frontend
                  web development, backend development, and machine learning.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about mt-16 sm:mt-24 lg:mt-32 xl:mt-36 grid gap-1 lg:gap-2 xl:gap-2.5 w-85/100 md:h-4/5 lg:w-3/4 mx-auto">
        <h3 className="text-qbg-quaternary text-center text-xl lg:text-2xl font-semibold lg:font-bold"><span className="text-quaternary font-bold">Tech</span> <span className="text-tertiary font-bold">Stack</span></h3>
        <p className="text-center font-normal">Berikut merupakan beberapa tech stack yang pernah saya pelajari selama perkuliahan.</p>
        <div className="flex overflow-auto sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          <CardSkill image="/techstack/language.png" title="programming Language" desc="Javascript, Go, Python, C#, and PHP" />
          <CardSkill image="/techstack/fe.png" title="Frontend Development" desc="HTML, CSS, Bootstrap, Tailwind, and Next JS" />
          <CardSkill image="/techstack/backend.png" title="Backend Development" desc="Express JS, Echo, and Firebase" />
          <CardSkill image="/techstack/devops.png" title="DevOps" desc="AWS, Docker" />
          <CardSkill image="/techstack/software.png" title="software" desc="Git, Adobe Photoshop, Figma, Word, and Excel" />
        </div>
      </div>
      <div className="status mt-16 sm:mt-24 lg:mt-32 xl:mt-36 text-white py-4 grid gap-1 lg:gap-2 xl:gap-2.5 w-85/100 md:h-4/5 lg:w-3/4 mx-auto bg-quaternary">
        <h3 className="text-center text-lg lg:text-xl xl:text-2xl font-semibold lg:font-bold"><span className="text-secondary font-bold">Pengalaman</span> <span className="text-primary font-bold">Project</span></h3>
        <p className="text-center font-normal w-90/100 mx-auto text-white">Berikut merupakan pengalaman project yang sudah saya kerjakan selama beberapa tahun terakhir.</p>
        <div className="mt-2 lg:mt-2.5 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          <CardMarket value={4} caption="Project Frontend" />
          <CardMarket value={1} caption="Project backend" />
          <CardMarket value={2} caption="Project Fullstack" />
        </div>
      </div>
      <div className="about mt-16 sm:mt-24 lg:mt-32 xl:mt-36 grid gap-1 lg:gap-2 xl:gap-2.5 w-85/100 md:h-4/5 lg:w-3/4 mx-auto">
        <h3 className="text-qbg-quaternary text-center text-xl lg:text-2xl font-semibold lg:font-bold"><span className="text-primary">Project</span></h3>
        <p className="text-center font-normal">Berikut merupakan pengalaman real project yang sudah saya kerjakan selama beberapa tahun terakhir.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {project.map((item: any) => (
            <CardProject image={item.image} key={item.image} link={item.link} desc={item.desc} title={item.title} />
          ))}
        </div>
      </div>

      <div className="certificate grid gap-4 lg:gap-6 mt-16 sm:mt-24 lg:mt-32 xl:mt-36 w-85/100 md:h-4/5 lg:w-3/4 mx-auto">
        <h3 className="text-primary font-bold text-xl lg:text-2xl text-center">Sertifikat</h3>
        <div className="grid grid-flow-col sm:grid-flow-row sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 overflow-auto sm:overflow-hidden gap-4">
          {certificate_image.map((item: any) => (
            <Certificate image={item} key={item} />
          ))}
        </div>
      </div>
      <div className="maps grid gap-5 mt-16 sm:mt-24 lg:mt-32 xl:mt-36 w-85/100 md:h-4/5 lg:w-3/4 mx-auto lg:grid-cols-2">
        <div className="caption grid gap-5 sm:gap-6 md:gap-7 lg:gap-8 lg:h-min">
          <div className="description">
            <h3 className="text-qbg-quaternary text-2xl font-semibold lg:font-bold"><span className="text-tertiary font-bold">Tempat</span> <span className="text-primary font-bold">Tinggal</span></h3>
            <p className="">Desa Madurejo, Kecamatan Pasirian, kabupaten Lumajang</p>
          </div>
          <div className="contact">
            <div className="location grid gap-4">
              <div className="info">
                <div className="flex gap-2 items-center">
                  <PiBuildingOffice className="text-quaternary text-3xl" />
                  <h4 className="font-semibold text-lg">Alamat</h4>
                </div>
                <p className="ml-9"> Jln. Aseloley No.44 Lumajang</p>
              </div>
              <div className="telp flex gap-2 items-center">
                <BsTelephone className="text-quaternary text-2xl mr-1" />
                <p>08123456789</p>
              </div>
              <div className="info flex gap-2 items-center">
                <MdOutlineLocalPostOffice className="text-quaternary text-3xl" />
                <p>ardinnugraha2001@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className="maps">
          <Maps />
        </div>
      </div>
      <Theme classname="fixed bottom-2.5 right-2.5 grid place-content-center bg-quaternary text-white drop-shadow-strong rounded-full p-2" />
      <Footer />
    </main>
  );
}
