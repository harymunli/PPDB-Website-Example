import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Input from '../components/Input'

export default function Daftar(){
    return (
        <div class="bg-white">
            <Header />
            <main className="p-4">
                <Navbar />

                {/* <!-- Register Form --> */}
                <form class="relative border-4 shadow-lg m-8">
                    <p class='text-4xl text-center border-b-4 border-yellow-400 mx-[100px] mb-4 mt-10'> Pendaftaran PPDB 2023/2024</p>
                    <div class="flex flex-col space-y-4">
                        <Input label="NISN" />
                        <Input label="Nama Lengkap" />
                        <Input label="Asal Sekolah" />
                        <Input label="No Handphone / Whatsapp" />
                        <Input label="Tempat Lahir" />
                        <Input label="Tanggal Lahir" />
                        <Input label="Password" />
                    </div>
                </form>
            </main>
        </div>
    )
}