export default function Navbar() {
    return (
        <div className="fixed top-0 left-0 right-0 bg-slate-100 z-20 p-2">
            <div className="sticky flex float-left mx-8">
                <img src="assets/logo_sekolah.png" alt="Logo Sekolah" width="40px" height="40px" className=""/>
                    <span id="nama-sekolah" className="grid-rows-2 text-sm mx-4 align-middle">
                        <p className="text-start">SMAN 0</p>
                        <p className="text-start">Sawahlunto</p>
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
        </div>                
    )
}