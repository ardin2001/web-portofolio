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

export default async function Home() {
  return (
    <main className="bg-low">
      <Navbar />
      <div className="grid justify-center mt-14 sm:mt-16 lg:mt-20 gap-10 w-85/100 md:h-4/5 lg:w-3/4 mx-auto">
        <div className="banner grid sm:grid-cols-2 gap-8 sm:gap-0 md:items-center">
          <div className="left">
            <div className="caption grid gap-2">
              <h3 className="text-secondary text-3xl lg:text-5xl font-semibold mb-1 lg:mb-3">Hello, I&apos;am</h3>
              <h3 className="text-white bg-secondary text-3xl py-1 px-1.5 sm:px-2 lg:p-2.5 lg:text-5xl font-bold w-max">Ardin Nugraha</h3>
              <p className="">Check out my Curriculum Vitae in below.</p>
              <Link href="/auth/login" className="py-1 bg-secondary rounded-lg text-white font-semibold w-min px-4 lg:px-5">Download</Link>
            </div>
          </div>
          <div className="right grid self-center">
            <Image src="/profile.jpg" alt="login" width={5000} height={5000} className="w-3/4 justify-self-end md:w-85/100 lg:w-1/2 rounded-lg -scale-x-100" />
          </div>
        </div>
      </div>
      <div className="about bg-secondary mt-16 sm:mt-24 lg:mt-32 py-8 sm:py-14 lg:py-16">
        <div className="grid justify-centergap-10 w-85/100 md:h-4/5 lg:w-3/4 mx-auto">
          <div className="banner grid sm:grid-cols-2 gap-8 sm:gap-10 justify-items-center">
            <Image src="/profile-about.png" alt="profile-about" width={5000} height={5000} className="sm:w-90/100 md:w-3/4 lg:w-2/3 xl:w-1/2" />
            <div className="right self-center">
              <div className="caption grid gap-1">
                <h3 className="text-white text-3xl lg:text-5xl font-semibold"><span className="text-secondary font-bold">About</span> Me</h3>
                <p className="text-tertiary text-justify">A recent graduate from the Information Technology department, Faculty of Computer Science at the
                  University of Jember with a GPA of 3.91. I have experience as a laboratory assistant, involvement in student
                  organizations, and working on several information system projects. I am interested in the fields of frontend
                  web development, backend development, and machine learning.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about my-16 grid gap-1 lg:gap-2 xl:gap-2.5 w-85/100 md:h-4/5 lg:w-3/4 mx-auto">
        <h3 className="text-secondary text-center text-lg lg:text-xl font-semibold lg:font-bold">Tech Stack</h3>
        <p className="text-center font-normal">Berikut merupakan beberapa tech stack yang pernah saya pelajari selama perkuliahan.</p>
        <div className="flex overflow-auto sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          <CardSkill image="/techstack/language.png" title="programming Language" desc="Javascript, Go, Python, C#, and PHP" />
          <CardSkill image="/techstack/fe.png" title="Frontend Development" desc="HTML, CSS, Bootstrap, Tailwind, and Next JS" />
          <CardSkill image="/techstack/backend.png" title="Backend Development" desc="Express JS, Echo, and Firebase" />
          <CardSkill image="/techstack/devops.png" title="DevOps" desc="AWS, Docker" />
          <CardSkill image="/techstack/software.png" title="software" desc="Git, Adobe Photoshop, Figma, Word, and Excel" />
        </div>
      </div>
      <div className="status mt-16 sm:mt-24 md:mt-32 lg:mt-36 xl:mt-44 text-white py-4 grid gap-1 lg:gap-2 xl:gap-2.5 w-85/100 md:h-4/5 lg:w-3/4 mx-auto bg-secondary">
        <h3 className="text-center text-lg lg:text-xl font-semibold lg:font-bold">Pengalaman Project</h3>
        <p className="text-center font-normal w-90/100 mx-auto">Berikut merupakan pengalaman project yang sudah saya kerjakan selama beberapa tahun terakhir.</p>
        <div className="mt-2 lg:mt-2.5 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          <CardMarket value={4} caption="Project Frontend" />
          <CardMarket value={1} caption="Project backend" />
          <CardMarket value={2} caption="Project Fullstack" />
        </div>
      </div>
      <div className="about my-16 grid gap-1 lg:gap-2 xl:gap-2.5 w-85/100 md:h-4/5 lg:w-3/4 mx-auto">
        <h3 className="text-secondary text-center text-lg lg:text-xl font-semibold lg:font-bold">Project</h3>
        <p className="text-center font-normal">Berikut merupakan pengalaman real project yang sudah saya kerjakan selama beberapa tahun terakhir.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <CardProject image="/project/atr.png" title="ATR/BPN Jember" desc="Pada project ini saya berkesemapatan sebagai frontend web menggunakan React JS dan Tailwind CSS." />
          <CardProject image="/project/pemilu.png" title="Pemilu HIMATIF" desc="Pada project ini saya berkesemapatan sebagai frontend web menggunakan React JS dan Tailwind CSS." />
          <CardProject image="/project/soul.png" title="Soul Cafe App" desc="Project ini merupakan fake project fullstack dimana saya membuat website menggunakan Next JS, Tailwind CSS, Firebase dan state management menggunakan redux." />
          <CardProject image="/project/curhatin.png" title="Curhatin" desc="Project ini merupakan tugas pada kelas dicoding pada saat program MSIB Batch 3. Project ini menggunakan React JS dan state management menggunakan redux." />
          <CardProject image="/project/ppl.jpg" title="E-Chest" desc="Project ini merupakan tugas akhir mata kuliah Pengembangan Perangkat Lunak (PPL). Dimana saya berposisi sebagai programmer dengan jobdesk membuat website menggunakan Express JS dan Bootstrap CSS." />
          <CardProject image="/project/skripsi.png" title="Website Skripsi" desc="Project ini merupakan project skripsi, dimana menggunakan framework flask, Tailwind CSS, dan machine learning." />
          <CardProject image="/project/pwa.png" title="Restaurant catalogue" desc="Project ini merupakan latihan untuk membuat website Progressive Web App (PWA) dan implementasi module bundler (Webpack)." />
        </div>
      </div>
      <div className="maps grid gap-5 my-28 w-85/100 md:h-4/5 lg:w-3/4 mx-auto lg:grid-cols-2">
        <div className="caption grid gap-5 sm:gap-6 md:gap-7 lg:gap-8 lg:h-min">
          <div className="description">
            <h3 className="text-secondary text-2xl font-semibold lg:font-bold">Tempat Tinggal</h3>
            <p>Desa Madurejo, Kecamatan Pasirian, kabupaten Lumajang</p>
          </div>
          <div className="contact">
            <div className="location grid gap-4">
              <div className="info">
                <div className="flex gap-2 items-center">
                  <PiBuildingOffice className="text-secondary text-3xl" />
                  <h4 className="font-semibold text-lg">Soul Cafe</h4>
                </div>
                <p className="ml-9"> Jln. Aseloley No.44 Lumajang</p>
              </div>
              <div className="telp flex gap-2 items-center">
                <BsTelephone className="text-secondary text-2xl mr-1" />
                <p>08123456789</p>
              </div>
              <div className="info flex gap-2 items-center">
                <MdOutlineLocalPostOffice className="text-secondary text-3xl" />
                <p>ardinnugraha2001@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className="maps">
          <Maps />
        </div>
      </div>
      <Theme classname="fixed bottom-2.5 right-2.5 grid place-content-center bg-secondary text-white drop-shadow-strong rounded-full p-2" />
      <Footer />
    </main>
  );
}
