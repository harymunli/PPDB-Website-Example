import Header from '../components/Header'
import Navbar from '../components/Navbar'
import YouTubeIcon  from '@material-ui/icons/YouTube'
import FacebookIcon from '@material-ui/icons/Facebook'
import InstagramIcon from '@material-ui/icons/Instagram'

export default function Home() {
  return (
    <div className="bg-white">
      <Header />
      <main className="p-4 mt-12">
        <Navbar />

      {/* <!-- login --> */}
      <div id="#home" className="mt-18 bg-indigo-500 grid grid-cols-2 pt-8 px-4 mx-8 rounded-lg">
      <div className="relative text-white">
            <p className="text-4xl mb-3"> Gali Potensi, </p>
            <p className="text-4xl mb-3"> Raih Prestasi </p>
            <div className="my-2 text-xl">
                <p> Satu langkah lebih dekat dengan impianmu, </p>
                <p> dengan mulai belajar di lembaga pendidikan terbaik. </p>
            </div>
                
            <div className="space-x-4 mt-10">
                <button className="bg-blue-900 hover:bg-blue-700 p-2 px-8 rounded-md">Login</button>
                <button className="bg-yellow-400 hover:bg-yellow-300 p-2 px-8 rounded-md">Cek Status Pembayaran</button>
            </div>
        </div>
        <div className="relative">
            <img className="absolute top-0 right-0" src="assets/blob-kuning.svg" alt="blob blob-kuning" width="130" height="130"></img>
            <img className="float-right z-10 relative" src="assets/pelajar.png" height="350" width="200"></img>
            <img className="absolute bottom-0 right-20" src="assets/blob-hijau.svg" alt="blob blob-hijau" width="130" height="130"></img>
        </div>
      </div>

      {/* <!-- FAQ --> */}
      <div id="faq" className="mt-10 container mx-auto">
        <div className="text-4xl text-center border-b-4 border-yellow-400 mx-[100px] mb-4">Frequently Asked Question <span className="font-bold"> (FAQ) </span></div>
        <div className="mx-32 space-y-4">
            <div className="relative border-4 shadow-lg">
                <div className="inline-block top-0 py-2 px-4">Alur Pendaftaran</div>
                <button id="alpen-btn"className="w-6 h-6 absolute right-2 top-0"><svg className="w-6 h-6 absolute right-0 top-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>
                <p id="alpen" className='px-4 text-sm pb-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur semper mauris id est ullamcorper consectetur. Morbi pellentesque aliquam libero, ut porta odio ullamcorper eget. Morbi molestie nisi augue, nec lacinia lacus maximus quis. Sed leo ipsum, cursus a vestibulum ut, rhoncus nec quam. Nunc commodo mi tempor nunc malesuada, ut vulputate metus eleifend. Donec elit diam, rutrum tempus convallis vel, pharetra quis elit. Morbi ex eros, molestie id ullamcorper in, egestas ac mi. Quisque id tortor ut felis vulputate efficitur. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis at tincidunt ex. Phasellus nec nisl tincidunt, pellentesque lacus ac, interdum lectus. Nulla vitae turpis et lorem suscipit hendrerit posuere a diam. Praesent volutpat mi sapien, porttitor sodales nisl aliquet nec.</p>
            </div>
            <div className="relative border-4 shadow-lg">
                <div className="inline-block top-0 py-2 px-4">Syarat Pendaftaran</div>
                <button id="syapen-btn" className="w-6 h-6 absolute right-2 top-0"><svg className="w-6 h-6 absolute right-0 top-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>
                <ol id="syapen" className="list-decimal ml-8 pb-2">
                  <li className="text-sm">Memiliki NISN</li>
                  <li className="text-sm">Berusia maksimum 15 tahun pada 1 Juli 2023</li>
                  <li className="text-sm">Berkas yang harus dilengkapi pada waktu Pendaftaran:</li>
                  <ul className="list-disc ml-4">
                    <li className="text-sm">a. Mengisi Formulir Pendaftaran</li>
                    <li className="text-sm">b. Uang pendaftaran Rp.300.000</li>
                    <li className="text-sm">c. Pas foto warna 3x4 background merah sejumlah 4 lembar</li>
                  </ul>
                </ol>
            </div>
            <div className="relative border-4 shadow-lg">
                <div className="inline-block top-0 py-2 px-4">Informasi Tes PPDB</div>
                <button id="intes_btn" className="intes-btn w-6 h-6 absolute right-2 top-0"><svg className="w-6 h-6 absolute right-0 top-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>
                <p id="intes" className='px-4 text-sm pb-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur semper mauris id est ullamcorper consectetur. Morbi pellentesque aliquam libero, ut porta odio ullamcorper eget. Morbi molestie nisi augue, nec lacinia lacus maximus quis. Sed leo ipsum, cursus a vestibulum ut, rhoncus nec quam. Nunc commodo mi tempor nunc malesuada, ut vulputate metus eleifend. Donec elit diam, rutrum tempus convallis vel, pharetra quis elit. Morbi ex eros, molestie id ullamcorper in, egestas ac mi. Quisque id tortor ut felis vulputate efficitur. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis at tincidunt ex. Phasellus nec nisl tincidunt, pellentesque lacus ac, interdum lectus. Nulla vitae turpis et lorem suscipit hendrerit posuere a diam. Praesent volutpat mi sapien, porttitor sodales nisl aliquet nec.</p>
            </div> 
        </div>       
      </div>

      {/* <!-- Kontak --> */}
      <p id="kontak" className='text-4xl text-center border-b-4 border-yellow-400 mx-[100px] mb-4 mt-10'> Kontak Kami </p>
      <section className="grid grid-cols-2 bg-indigo-500 p-4 mx-8 rounded-lg">
        <div className=" flex-row">
          <div className='ml-6'>
            <form className="flex flex-col">
              <input className='rounded-full mt-4 mb-6' placeholder="Nama Anda..."></input>
              <textarea className='rounded-lg mb-8' placeholder="Pesan Anda..." height="400px"></textarea>
            </form>
            <div className='mb-2'><YouTubeIcon/> <span className='ml-2 mb-4 text-white'> SMAN 0 Sawahlunto </span></div>
            <div className='mb-2'> <FacebookIcon/> <span className='ml-2 mb-4 text-white'>SMAN 0 Sawahlunto</span> </div>
            <InstagramIcon/> <span className='ml-2 mb-4 text-white'> SMAN 0 Sawahlunto </span>
          </div>
        </div>   
        
        <img src="assets/gmap_lokasi.png" alt='lokasi-google-map' className='rounded-lg px-4 my-auto'></img>
      </section>

      <script src="index.js"></script>
      </main>
    </div>
  )
}
