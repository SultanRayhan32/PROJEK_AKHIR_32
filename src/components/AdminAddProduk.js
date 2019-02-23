import React , { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { CustomInput } from 'reactstrap';

class AdminAddProduk extends Component{

    state ={  ListProduk : [] , SelectEdit : 0 , ListKategori : [] ,SelectEdit2 : 0 }

    componentDidMount(){
        axios.get('http://localhost:2019/produk/showproduk')
        .then((res)=>{
            this.setState({ ListProduk : res.data })
            
        })
        .catch((err)=>{
            console.log(err)
        })

        axios.get('http://localhost:2019/kategori/getAllKategori')
        .then((res)=>{
            this.setState({ ListKategori : res.data })
            console.log(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    tesFunction =() =>{
                var nama= this.refs.Addnama.value
                var harga = this.refs.Addharga.value
                var merk = this.refs.Addmerk.value
                var deskripsi = this.refs.Adddes.value
                var kategori = this.refs.Addkategori.value
                console.log( nama + ' ' + harga + ' ' + merk + ' ' + deskripsi + ' ' + kategori)
    }

    onBtnAddClick = () => {
        if(document.getElementById("AddBrandImage").files[0] !== undefined) {
            var formData = new FormData()
            var headers = {
                headers: 
                {'Content-Type': 'multipart/form-data'}
            }

            var data = {
                nama: this.refs.Addnama.value,
                harga : this.refs.Addharga.value,
                merk : this.refs.Addmerk.value,
                deskripsi : this.refs.Adddes.value,
                kategori : this.refs.Addkategori.value
            }

            if(document.getElementById('AddBrandImage')){
                formData.append('image', document.getElementById('AddBrandImage').files[0])
            }
            formData.append('data', JSON.stringify(data))

            axios.post("http://localhost:2019/admin/addnewproduk" , formData, headers)
            .then((res) => {
                alert("Add Brand Success")
                this.setState({ brandList: res.data })
            })
            .catch((err) =>{
                console.log(err)
                alert("sytemError")
            })
        }
        else {
            alert('Image harus diisi!')
        }
    }

    onBtnUpdateClick = (id) => {
        var formData = new FormData()
        var headers = {
            headers: 
            {'Content-Type': 'multipart/form-data'}
        }

        var data = {
            nama: this.refs.editnama.value,
            harga : this.refs.editharga.value,
            merk : this.refs.editmerk.value,
            deskripsi : this.refs.editdes.value,
            kategori : this.refs.editkategori.value
        }

        if(document.getElementById('EditBrandImage')){
            formData.append('image', document.getElementById('EditBrandImage').files[0])
        }
        formData.append('data', JSON.stringify(data))

        axios.put("http://localhost:2019/admin/editproduk/" + id, formData, headers)
        .then((res) => {
            alert("Edit Brand Success")
            this.setState({ brandList: res.data, selectedEditBrandId: 0 })
        })
        .catch((err) =>{
            console.log(err)
        })
    }

    onBtnDeleteClick = (id) => {
        if(window.confirm('Are you sure to delete?')) {
            axios.delete("http://localhost:2019/admin/deleteproduk/" + id)
            .then((res) => {
                alert('Delete Success');
                this.setState({ ListProduk: res.data })
            })
            .catch((err) => {
                alert('Error')
                console.log(err);
            })
        }
    }

    onAddFileImageChange = () => {
        if(document.getElementById("AddBrandImage").files[0] !== undefined) {
            this.setState({AddBrandImage: document.getElementById("AddBrandImage").files[0].name})
        }
        else {
            this.setState({AddBrandImage: 'Pilih Gambar'})
        }
    }

    onEditFileImageChange = () => {
        if(document.getElementById("EditBrandImage").files[0] !== undefined) {
            this.setState({EditBrandImage: document.getElementById("EditBrandImage").files[0].name})
        }
        else {
            this.setState({EditBrandImage: 'Pilih Gambar'})
        }
    }

    SelectOptionAllMerk = () =>{
        var y = this.state.ListProduk.map((item)=>{
            return(<option>Makanan</option>)
        })
        return y;
    }

    SelectOptionAllKategori = () =>{
        var c = this.state.ListKategori.map((item)=>{
            return(<option>{item.nama}</option>)
        })
        return c;
    }

    renderAllProduk = () =>{
        var x = this.state.ListProduk.map((item)=>{
            if(this.state.SelectEdit === item.id){
                return(<tr>
                    <th>{item.id}</th>
                    <th><input defaultValue={item.nama} className="inputs" ref="editnama" /></th>
                    <th><input defaultValue={item.harga} className="inputs" ref="editharga"></input></th>
                    <th><select ref="editmerk" >{this.SelectOptionAllMerk()}</select></th>
                    <th><input defaultValue={item.deskripsi} className="inputs" ref="editdes"/></th>
                    <th><CustomInput type="file" id="EditBrandImage" name="EditBrandImage" label={this.state.EditBrandImage} onChange={this.onEditFileImageChange} /></th>
                    <th><select ref="editkategori" >{this.SelectOptionAllKategori()}</select></th>
                    <th><input type="button"   class="btn btn-primary" value="SAVE" onClick={() => this.onBtnUpdateClick(item.id)}/></th>
                    <th><input type="button" class="btn btn-danger" value="CANCEL" onClick={ () => this.setState({ SelectEdit : 0 }) } /></th>
                    
                </tr>)
            }
            return(<tr>
                <th>{item.id}</th>
                <th>{item.nama}</th>
                <th>{item.harga}</th>
                <th>{item.merk}</th>
                <th>{item.deskripsi}</th>
                <th><img src={`http://localhost:2019/${item.image}`} width="50px"></img></th>
                <th>{item.kategori}</th>
                <th><input type="button" onClick={ () => this.setState({ SelectEdit : item.id }) }  class="btn btn-primary" value="EDIT"/></th>
                <th><input type="button"   class="btn btn-danger" value="DELETE" onClick={() => this.onBtnDeleteClick(item.id)}/></th>
               
            </tr>)
        })
        return x;
    }

    renderAllKategori = () =>{
      
        var y = this.state.ListKategori.map((item)=>{
            if(this.state.SelectEdit2 === item.id){
                return(
                    <tr>
                       <td>{item.id}</td>
                       <td><input defaultValue={item.nama} className="inputs" ref="editnewkategori" /></td>
                       <td><input type="button"   class="btn btn-primary" value="SAVE" onClick={() => this.UpdateKategori(item.id)}/></td>
                       <td><input type="button" class="btn btn-danger" value="CANCEL" onClick={ () => this.setState({ SelectEdit2 : 0 }) } /></td>
                    </tr>)
            }
            return(
            <tr>
               <td>{item.id}</td>
               <td>{item.nama}</td>
               <td><input type="button" onClick={ () => this.setState({ SelectEdit2 : item.id }) }  class="btn btn-primary" value="EDIT"/></td>
               <td></td>
            </tr>)
        })
        return y;
    }

    UpdateKategori = (id) =>{
        var newKategori = this.refs.editnewkategori.value;
        axios.post(`http://localhost:2019/kategori/EditKategori?id=${id}&nama=${newKategori}`)
        .then((res)=>{
            alert('Suksesss')
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    AddNewKategori = () =>{
        var newAddKategori = this.refs.newkategori.value;
        axios.post(`http://localhost:2019/kategori/AddNewKategori?nama=${newAddKategori}`)
        .then((res)=>{
            alert('Berhasil')
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    FilterProduk = () =>{
        var nama = this.refs.namafilter.value;
        axios.get(`http://localhost:2019/admin/filterproduk?nama=${nama}`)
        .then((res)=>{
            this.setState({ ListProduk : res.data })
        })
    }

    

    render(){
        if(this.props.role !== 'admin'){
            return  <Redirect to="/listproduk32" />
        }
        else if(this.state.ListProduk.length === 0) {
            return(<div>
                <br/><br/><br/><br/><br/>
                <input type="text"  className="form-control" ref="namafilter" />
                <input type="button" value="Cari" className="btn btn-success" onClick={this.FilterProduk} />
                <h1>Tidak Ditemukan File Yang Anda Inginkan</h1>
            </div>)
        }
        return(<div>
            <br/><br/><br/><br/>
            <input type="text" className="form-control" ref="namafilter" />
            <input type="button" value="Cari" className="btn btn-success" onClick={this.FilterProduk} />
            <br/><br/><br/><br/>
        <center>
            <table>
                 <thead>
                        <tr>
                            <th>id</th>
                            <th>nama</th>
                            <th>harga</th>
                            <th>merk</th>
                            <th>deskripsi</th>
                            <th>image</th>
                            <th>Kategori</th>
                            <th></th>
                            <th></th>
                            
                        </tr>
                </thead>
                <tbody>
                {this.renderAllProduk()}
                </tbody>
                <tfoot>
                    <tr>
                        <th></th>
                        <th><input type="text" className="inputs" ref="Addnama"   /></th>
                        <th><input type="number"  className="inputs" ref="Addharga" /></th>
                        <th><select ref="Addmerk"><option>Mie</option></select></th>
                        <th><input type="text" className="inputs" ref="Adddes" /></th>
                        <th><CustomInput type="file" id="AddBrandImage" name="AddBrandImage" label={this.state.AddBrandImage} onChange={this.onAddFileImageChange} /></th>
                        <th><select ref="Addkategori">{this.SelectOptionAllKategori()}</select></th>
                        <th><input type="button" onClick={this.onBtnAddClick} class="btn btn-primary" value="ADD" /></th>
                        <th></th>
                        
                    </tr>
                </tfoot>
            </table>
        </center>
            <br/><br/><br/>
        <center>
            <h3>Manage Kategori</h3>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nama Kategori</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderAllKategori()}
                </tbody>
                <tfoot>
                    <tr>
                        <th></th>
                        <th><input type="text" className="inputs" ref="newkategori"/></th>
                        <th><input type="button" onClick={this.AddNewKategori} class="btn btn-primary" value="ADD" /></th>
                        <th></th>
                    </tr>
                </tfoot>    
            </table>    
        </center>    
        <br/><br/><br/>
        </div>)
    }
}

const mapStateToProps = (state) =>{
    return{ 
        role : state.auth.role 
    };
}

export default  connect(mapStateToProps ,{})(AdminAddProduk);