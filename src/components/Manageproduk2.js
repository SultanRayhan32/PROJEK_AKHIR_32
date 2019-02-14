import React, { Component } from 'react';
import axios from 'axios';
import { CustomInput } from 'reactstrap';

class manageproduk2 extends Component {

    state = { listproduk : [] , AddBrandImage: 'Pilih Gambar', EditBrandImage: 'Pilih Gambar', selectedEditBrandId: 0 }

    componentDidMount() {
        axios.get('http://localhost:2019/produk/showproduk')
        .then((res)=>{
            this.setState({listproduk : res.data})
        })
    }

    onBtnAddClick = () => {
        if(document.getElementById("AddBrandImage").files[0] !== undefined) {
            var formData = new FormData()
            var headers = {
                headers: 
                {'Content-Type': 'multipart/form-data'}
            }

            var data = {
                nama: this.refs.nama.value,
                harga : this.refs.harga.value,
                merk : this.refs.merk.value,
                deskripsi : this.refs.deskripsi.value,
                kategori : this.refs.kategori.value
            }

            if(document.getElementById('AddBrandImage')){
                formData.append('image', document.getElementById('AddBrandImage').files[0])
            }
            formData.append('data', JSON.stringify(data))

            axios.post("http://localhost:1995/addbrand", formData, headers)
            .then((res) => {
                alert("Add Brand Success")
                this.setState({ brandList: res.data })
            })
            .catch((err) =>{
                console.log(err)
            })
        }
        else {
            alert('Image harus diisi!')
        }
    }


    renderListProduk = () => {
        var listjsxProduk = this.state.listproduk.map(({ id , nama ,harga , merk , deskripsi , image , kategori })=>{
            return (
                    <tr >
                        {/* <td className="tdss">{id}</td> */}
                        <td className="tdss">{nama}  </td>
                        <td className="tdss">{harga}</td>
                        <td className="tdss">{merk}</td>
                        <td className="tdss"> {deskripsi}</td>
                        <td className="tdss"><img src={image} width="50px"   /></td>
                        <td className="tdss"> {kategori}</td>
                        <td className="tdss"></td>
                        {/* <td className="tdss"><button className="btn btn-primary" onClick={() => this.setState({ editgak : id })}>Edit</button></td>
                        <td className="tdss"><button className="btn btn-danger" onClick={() => this.onBtnDeleteClick(id)}>Delete</button></td> */}
                    </tr>
            )
        })
        return listjsxProduk;
    }

    render() {
        return(<div>
            <br/><br/><br/><br/>
            <table className="tabless">
                <thead className="tdss" >
                    <tr>
                        <td className="tdss">Nama</td>
                        <td className="tdss">Harga</td>
                        <td className="tdss">Merk</td>
                        <td className="tdss">deskripsi</td>
                        <td className="tdss">Gambar</td>
                        <td className="tdss">Kategori</td>
                        <td className="tdss"></td>
                    </tr>
                </thead>
                <tbody className="tdss">
                    {this.renderListProduk()}
                </tbody>
                <tfoot>
                    <tr>
                        <td className="tdss"><input type="text" ref="nama" placeholder="nama" /></td>
                        <td className="tdss"><input type="text" ref="harga" placeholder="nama" /></td>
                        <td className="tdss"><input type="text" ref="merk" placeholder="nama" /></td>
                        {/* <td><input type="text" ref="merk" placeholder="nama" /></td> */}
                        <td className="tdss"><input type="text" ref="deskripsi" placeholder="nama" /></td>
                        <td className="tdss"><CustomInput type="file" id="AddBrandImage" name="AddBrandImage" label={this.state.AddBrandImage} onChange={this.onAddFileImageChange} /></td>
                        <td className="tdss"><input type="text" ref="kategori" placeholder="nama" /></td>
                        <td className="tdss"><input type="button" value="Click" /></td>
                    </tr>
                </tfoot>
            </table>
            <input type="button"  className="btn btn-primary" value="Click" onClick={this.onBtnAddClick}/>
        </div>)
    }
}

export default manageproduk2;