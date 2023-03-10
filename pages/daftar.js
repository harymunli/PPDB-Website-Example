import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Mustinput from '../components/Mustinput'
import Optionalinput from '../components/Optional_Input'
import React from 'react'
import Link from 'next/link'

export default class Daftar extends React.Component {

    render(){
        return (
            <div class="bg-white">
                <Header />
                <main className="p-4">
                    <Navbar page="daftar"/>
                    
                    {/* <!-- Register Form --> */}
                    <form id="reset-form"className="relative border-4 shadow-lg m-8 p-4">
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
                            <div className='flex space-x-[200px] justify-center w-[600px] mx-auto mb-4'>
                                <button id="reset-btn" className=" text-white bg-red-500 hover:bg-red-300 p-2 rounded-lg w-[200px]">Reset Data</button>
                                <Link href="/success">
                                <button className=" text-white bg-blue-900 hover:bg-blue-700 p-2 mx-8 rounded-lg w-[200px]"> Daftar</button>
                                </Link>
                            </div>
                            <p className='text-center'> Sudah punya akun? <a className='text-blue-700' href='/login'>klik disini</a> </p>
                        </div>
                    </form>
                </main>
            </div>
        )
    }
}