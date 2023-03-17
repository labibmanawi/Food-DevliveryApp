import { Component } from "react";
import DaftarMakanan from "../Lib/DaftarMakanan";
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
        this.nasiPadang = this.nasiPadang.bind(this)
        this.sate = this.sate.bind(this);
        this.soto = this.soto.bind(this);
        this.uduk = this.uduk.bind(this);
        this.kuning = this.kuning.bind(this);
        this.batal = this.batal.bind(this);
    }

    pilihPesanan(value,e) {
        this.setState({[value] : e.target.value, tampil: true});
    }

    nasiPadang() {
        this.setState({
            pesan : "Nasi Padang",
            jumlah : this.state.value + 1,
            harga : "20000",
            tampil : true
        });
    }

    sate() {
        this.setState({
            pesan : "sate",
            jumlah : this.state.value +1,
            harga : "25000",
            tampil : true
        });
    }

    soto() {
        this.setState({
            pesan : "soto",
            jumlah : this.state.value +1,
            harga : "35000",
            tampil : true
        });
    }

    uduk() {
        this.setState({
            pesan : "uduk",
            jumlah : this.state.value +1,
            harga : "10000",
            tampil : true
        });
    }

    kuning() {
        this.setState({
            pesan : "uduk",
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
                                    <DaftarMakanan list="https://asset-a.grid.id/crop/0x0:0x0/x/photo/2019/08/10/3390082880.jpg"/>
                                    <p>Nasi Padang</p>
                                    <button onClick={this.nasiPadang}>Pesan Sekarang</button>
                                </center>
                            </td>

                            <td>
                                <center>
                                    <DaftarMakanan list="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sate.png"/>
                                    <p>Sate</p>
                                    <button onClick={this.sate}>Pesan Sekarang</button>
                                </center>
                            </td>

                            <td>
                                <center>
                                    <DaftarMakanan list="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sotolamongan.png"/>
                                    <p>Soto</p>
                                    <button onClick={this.soto}>Pesan Sekarang</button>
                                </center>
                            </td>

                            <td>
                                <center>
                                    <DaftarMakanan list="https://www.resepistimewa.com/wp-content/uploads/resep-nasi-uduk-gurih-dan-pulen.jpg"/>
                                    <p>Nasi Uduk</p>
                                    <button onClick={this.uduk}>Pesan Sekarang</button>
                                </center>
                            </td>

                            <td>
                                <center>
                                    <DaftarMakanan list="https://assets.pikiran-rakyat.com/crop/0x0:0x0/750x500/photo/2021/05/28/1378012574.jpg"/>
                                    <p>Nasi Kuning</p>
                                    <button onClick={this.kuning}>Pesan Sekarang</button>
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