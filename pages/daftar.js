import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Mustinput from '../components/Mustinput'
import Optionalinput from '../components/Optional_Input'

export default function Daftar(){
    return (
        <div class="bg-white">
            <Header />
            <main className="p-4">
                <Navbar />

                {/* <!-- Register Form --> */}
                <form className="relative border-4 shadow-lg m-8 p-4">
                    <p className='text-4xl text-center border-b-4 border-yellow-400 mx-[100px] mb-4 mt-10'> Pendaftaran PPDB 2023/2024</p>
                    <div className="flex flex-col space-y-4">
                        <Mustinput label="NISN" />
                        <Mustinput label="Nama Lengkap" />
                        <Mustinput label="Asal Sekolah" />
                        <Mustinput label="No Handphone / Whatsapp" />
                        <div className='mx-auto'>
                            <Optionalinput label="Tempat Lahir" />
                            <Optionalinput label="Tanggal Lahir" />
                        </div>
                        <Mustinput label="Password" />
                    </div>
                </form>
            </main>
        </div>
    )
}