import React from "react";
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import FileCopyIcon from '@material-ui/icons/FileCopy';
import {CopyToClipboard} from 'react-copy-to-clipboard';

export default class success extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            copied: false,
        }
    }

    render(){
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
                        <div className="flex flex-cols-2 space-x-1 mx-auto">
                            <input type="text" value="93682739172" readonly className='text-center border-2 shadow-lg w-[150px]'/>
                            <CopyToClipboard className="shrink" text="93682739172" 
                                onCopy={() => this.setState({copied: true})}>
                                <button><FileCopyIcon/></button>
                            </CopyToClipboard>
                        </div>
                            {this.state.copied ? <span className="text-center" style={{color: 'red'}}>Copied.</span> : null}
                            <p className='mt-2 text-center'>a/n SMAN 0 Sawahlunto (Bank BRI)</p>
                    </div>
                </main>
            </div>
        )
    }
}