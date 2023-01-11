import Head from 'next/head'
// import Image from 'next/image'
import { Inter } from '@next/font/google'
import YouTubeIcon  from '@material-ui/icons/YouTube'
import FacebookIcon from '@material-ui/icons/Facebook'
import InstagramIcon from '@material-ui/icons/Instagram'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div class="bg-white">
      <Head>
        <title>slicing</title>
        <meta name="description" content="PPDB Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link href="index.css" rel="stylesheet"></link>
      </Head>

      <main className="p-4">
        {/* navbar */}
        <div className="flex float-left mx-8">
            <img src="assets/logo_sekolah.png" alt="Logo Sekolah" width="40px" height="40px" className=""/>
            <span id="nama-sekolah" className="grid-rows-2 text-sm mx-4 align-middle">
                <p className="text-start">SMP MUHAMMADIYAH 1</p>
                <p className="text-start">DENPASAR</p>
            </span>
        </div>

        <div class="grid grid-cols-3">
            <div id="nav-menu" class="col-span-2 grid-cols-4 ml-16 lg:space-x-8">
                <span>Home</span>
                <span>Informasi PPDB</span>
                <span>Kontak</span>
                <span>Daftar PPDB</span>
            </div> 
            <div class="mr-4">
                <button class="float-right rounded-md grid bg-blue-900 hover:bg-blue-700 duration-700 text-white p-2 px-8 text-sm ease-in-out">Download Brosur</button>
            </div>
        </div>


      {/* <!-- login --> */}
      <div id="login" class="mt-18 bg-indigo-500 grid grid-cols-2 p-4 mx-8 rounded-lg">
      <div class="relative text-white">
            <p class="text-4xl mb-3"> Gali Potensi, </p>
            <p class="text-4xl mb-3"> Raih Prestasi </p>
            <div class="my-2 text-xl">
                <p> Satu langkah lebih dekat dengan impianmu, </p>
                <p> dengan mulai belajar di lembaga pendidikan terbaik. </p>
            </div>
                
            <div class="space-x-4 mt-10">
                <button class="bg-blue-900 hover:bg-blue-700 p-2 px-8 rounded-md">Login</button>
                <button class="bg-yellow-400 hover:bg-yellow-300 p-2 px-8 rounded-md">Cek Status Pembayaran</button>
            </div>
        </div>
        <div class="relative">
            <img class="absolute top-0 right-0" src="assets/blob-kuning.svg" alt="blob blob-kuning" width="130" height="130"></img>
            <img class="float-right z-10 relative" src="assets/pelajar.png" height="350" width="200"></img>
            <img class="absolute bottom-0 right-20" src="assets/blob-hijau.svg" alt="blob blob-hijau" width="130" height="130"></img>
        </div>
      </div>

      {/* <!-- FAQ --> */}
      <div id="faq" class="mt-10 container mx-auto">
        <div class="text-4xl text-center border-b-4 border-yellow-400 mx-[100px] mb-4">Frequently Asked Question <span class="font-bold"> (FAQ) </span></div>
        <div class="mx-32 space-y-4">
            <div class="relative border-4 shadow-lg">
                <div class="inline-block top-0 py-2 px-4">Alur Pendaftaran</div>
                <button class="w-6 h-6 absolute right-2 top-0"><svg class="w-6 h-6 absolute right-0 top-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>
            </div>
            <div class="relative border-4 shadow-lg">
                <div class="inline-block top-0 py-2 px-4">Syarat Pendaftaran</div>
                <button id="syapen-btn" class="w-6 h-6 absolute right-2 top-0"><svg class="w-6 h-6 absolute right-0 top-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>
                <ol id="syapen" class="list-decimal ml-8 hidden">
                  <li class="text-sm">Beragama Islam</li>
                  <li class="text-sm">Memiliki NISN</li>
                  <li class="text-sm">Berusaha maksimum 15 tahun pada 1 Juli 2023</li>
                  <li class="text-sm">Berkas yang harus dilengkapi pada waktu Pendaftaran:</li>
                  <ul class="list-disc ml-4">
                    <li class="text-sm">a. Mengisi Formulir Pendaftaran</li>
                    <li class="text-sm">b. Uang pendaftaran Rp.300.000</li>
                    <li class="text-sm">c. Pas foto warna 3x4 background merah sejumlah 4 lembar untuk putri berjilbab putuh</li>
                  </ul>
                </ol>
            </div>
            <div class="relative border-4 shadow-lg">
                <div class="inline-block top-0 py-2 px-4">Informasi Tes PPDB</div>
                <button class="w-6 h-6 absolute right-2 top-0"><svg class="w-6 h-6 absolute right-0 top-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>
            </div> 
        </div>       
      </div>

      {/* <!-- Kontak --> */}
      <p className='text-4xl text-center border-b-4 border-yellow-400 mx-[100px] mb-4 mt-10'> Kontak Kami </p>
      <section className="grid grid-cols-2 bg-indigo-500">
        <div className=" flex-row">
          <p className="text-center text-col text-white mt-8 xl mb-4"> Hubungi Kami </p>
          <div className='ml-6'>
            <form className="flex flex-col">
              <input className='rounded-full my-4' placeholder="Nama Anda..."></input>
              <textarea className='rounded-lg mb-12' placeholder="Pesan Anda..." height="400px"></textarea>
            </form>
            <YouTubeIcon/> <span className='ml-2 mb-4 text-white'> Muhammadiyah 1 Denpasar </span> <br/>
            <FacebookIcon/> <span className='ml-2 mb-4 text-white'>Muhammadiyah 1 Denpasar</span> <br/>
            <InstagramIcon/> <span className='ml-2 mb-4 text-white'> Mutu Denpasar </span>
          </div>
            
        </div>   
        
        <img src="assets/gmap_lokasi.png" alt='lokasi-google-map' className='rounded-lg' width="874px" height="688px"></img>
      </section>

      <script src="index.js"></script>
      </main>
    </div>
  )
}
