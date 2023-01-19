import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import green from "@material-ui/core/colors/green";

export default function success(){
    return(
        <div class="bg-white">
            <Header />
            <main className="p-4">
                <Navbar page="daftar"/>
                <div className="flex flex-col relative border-4 shadow-lg m-20 p-4 justify-center">
                    <CheckCircleIcon id="circle-icon" className='mx-auto' /> <br/>

                    <p className='text-center text-green-800 text-2xl'>Selamat Akun Berhasil Dibuat</p>
                    <p className='mt-2 text-center'>Untuk melanjutkan tahap berikutnya, silahkan melakukan</p>
                    <p className='mt-2 text-center'>Pembayaran biaya pendaftaran sebesar Rp 200.000</p>

                    <input type="text" value="123456789" readonly className='border-2 shadow-lg mx-auto w-[150px] text-center'></input>
                    <p className='mt-2 text-center'>a/n SMAN 0 Sawahlunto \( Bank BRI \)</p>
                    {/* TODO 2 Button. */}
                </div>
            </main>
        </div>
    )
}