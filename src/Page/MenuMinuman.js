import { Component } from "react";
import DaftarMinuman from "../Lib/DaftarMinuman";
import Header from "./Header";

class MenuMakanan extends Component {
    constructor(props) {
        super(props);
        this.state ={
            pesan: "",
            jumlah: "",
            harga: "",
            tampil: true
        };

        this.pilihPesanan = this.pilihPesanan.bind(this);
        this.esKacangMerah = this.esKacangMerah.bind(this)
        this.esCendol = this.esCendol.bind(this);
        this.esPisangHijau = this.esPisangHijau.bind(this);
        this.esPleret = this.esPleret.bind(this);
        this.esLegen = this.esLegen.bind(this);
        this.batal = this.batal.bind(this);
    }

    pilihPesanan(value,e) {
        this.setState({[value] : e.target.value, tampil: true});
    }

    esCendol() {
        this.setState({
            pesan : "Es Cendol",
            jumlah : this.state.value + 1,
            harga : "5000",
            tampil : true
        });
    }

    esPisangHijau() {
        this.setState({
            pesan : "Es Pisang Hijau",
            jumlah : this.state.value +1,
            harga : "25000",
            tampil : true
        });
    }

    esKacangMerah() {
        this.setState({
            pesan : "Es Kacang Merah",
            jumlah : this.state.value +1,
            harga : "35000",
            tampil : true
        });
    }

    esPleret() {
        this.setState({
            pesan : "Es Pleret",
            jumlah : this.state.value +1,
            harga : "10000",
            tampil : true
        });
    }

    esLegen() {
        this.setState({
            pesan : "Es Legen",
            jumlah : this.state.value +1,
            harga : "10000",
            tampil : true
        });
    }

    batal() {
        this.setState({
            pesan : "",
            jumlah : 0,
            tampil : false
        });
    }

    selesai() {
        alert("Pesanan Anda Telah Selesai, Tunggu ya....");
    }

    render() {
        return(
            <div>
                <Header />
                <h3>Daftar Makanan yang Kami Sediakan :</h3>

                <table style={{width: "100%"}}>
                    <tbody>
                        <tr>
                            <td>
                                <center>
                                    <DaftarMinuman list="https://www.gotravelly.com/blog/wp-content/uploads/2017/12/minuman-tradisional-indonesia-cendol.jpg"/>
                                    <p>Es Cendol</p>
                                    <button onClick={this.esCendol}>Pesan Sekarang</button>
                                </center>
                            </td>

                            <td>
                                <center>
                                    <DaftarMinuman list="https://www.gotravelly.com/blog/wp-content/uploads/2017/12/minuman-tradisional-indonesia-es-pisang-hijau.jpg"/>
                                    <p>Es Pisang Hijau</p>
                                    <button onClick={this.esPisangHijau}>Pesan Sekarang</button>
                                </center>
                            </td>

                            <td>
                                <center>
                                    <DaftarMinuman list="https://www.gotravelly.com/blog/wp-content/uploads/2017/12/minuman-tradisional-indonesia-es-kacang-merah.jpg"/>
                                    <p>Es Kacang Merah</p>
                                    <button onClick={this.esKacangMerah}>Pesan Sekarang</button>
                                </center>
                            </td>

                            <td>
                                <center>
                                    <DaftarMinuman list="https://www.gotravelly.com/blog/wp-content/uploads/2017/12/minuman-tradisional-indonesia-es-pleret.jpg"/>
                                    <p>Es Pleret</p>
                                    <button onClick={this.esPleret}>Pesan Sekarang</button>
                                </center>
                            </td>

                            <td>
                                <center>
                                    <DaftarMinuman list="https://www.gotravelly.com/blog/wp-content/uploads/2017/12/minuman-tradisional-indonesia-es-legen.jpg"/>
                                    <p>Es Legen</p>
                                    <button onClick={this.esLegen}>Pesan Sekarang</button>
                                </center>
                            </td>   
                        </tr>
                    </tbody>
                </table>

                <br />

                <input 
                type="text" 
                placeholder="Masukan Pesanan Anda"
                value={this.state.pesan}
                onChange={e => this.pilihPesanan("pesan",e)}
                />

                <input 
                type="number"
                placeholder="Jumlah Pesanan"
                onChange={e => this.pilihPesanan("jumlah",e)}
                />
                <button onClick={this.batal}>Batalkan Pesanan</button>
                

                {this.state.tampil === true ? (
                    <div>
                        <h3>Pesanan Anda : {this.state.pesan}</h3>
                        <h4>Jumlah Pesanan :{this.state.jumlah}</h4>
                        <button onClick={this.selesai}>Selesaikan Pesanan</button>
                    </div>
                ) : (
                    <h1>
                        <center>Anda Belum Memesan</center>
                    </h1>
                )}

            </div> 
            
        );
    }
   
}

export default MenuMakanan;