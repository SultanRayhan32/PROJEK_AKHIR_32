import React , { Component} from 'react';
import axios from 'axios';

class ManageProduk extends Component {
    state = { listpopok : [] , editgak : 0 }
    
    componentWillMount() {
        console.log('INI WILL MOUNT' )
        console.log(this.state.listpopok);
    }

    componentDidMount() {
        this.getPopokList();
        console.log('INI COMPONENT DID MOUNT');
     }
    
    getPopokList = () => {
        axios.get('http://localhost:1995/Pupuk')
        .then((res) => {
            console.log(res.data)
            this.setState({ listpopok : res.data , editgak : 0 })
            console.log('INI GET POPOK LIST');
            console.log(this.state.listpopok);
        }).catch((err)=>{

        })
    }

    onBtnDeleteClick = (id) =>{
        if(window.confirm('Are You Sure ?')){
            axios.delete('http://localhost:1995/Pupuk/' + id)
            .then((res)=>{
                this.getPopokList();
                console.log('INI DELETE CLICK');
            }).catch((err)=>{
                console.log(err)
            })
        }
    }

   
    
    onBtnAddClick = () =>{
        var nama = this.refs.namaadd.value;
        var merk = this.refs.merkadd.value;
        var harga = this.refs.hargaadd.value;
        var img = this.refs.imgadd.value;
        var deskripsi = this.refs.desadd.value;
        axios.post('http://localhost:1996/Pupuk/',{
            nama : nama , 
            harga : harga , 
            merk : merk , 
            deskripsi : deskripsi , 
            img : img
        }).then((res)=>{
            this.getPopokList();
            console.log('INI BTN ADD CLICK');
        }).catch((err)=>{
            console.log(err)
        })
    }

    onBtnSaveClick = (id) =>{
        var nama = this.refs.namaEdit.value;
        var merk = this.refs.merkEdit.value;
        var harga = this.refs.hargaEdit.value;
        var img = this.refs.imgEdit.value;
        var deskripsi = this.refs.desEdit.value;
        
        axios.put('http://localhost:1995/Pupuk/' + id, {
            nama , merk , harga , deskripsi , img
        }).then((res)=>{
            this.getPopokList();
            console.log('INI SAVE CLICK');
        }).catch((err)=>{
            console.log(err)
        })
    }

    

    


    renderbodyPopok = () => {
            console.log('INI RENDER BODY POPOK')
            var listJSXPopok = this.state.listpopok.map(({ id ,nama , harga , merk , img , deskripsi}) =>{
                if(id !== this.state.editgak){
                    return (
                    
                    <tr>
                        <td>{id}</td>
                        <td>{nama}  </td>
                        <td>{merk}</td>
                        <td>{harga}</td>
                        <td><img src={img} width="50px"   /></td>
                        <td>{deskripsi}</td>
                        <td><button className="btn btn-primary" onClick={() => this.setState({ editgak : id })}>Edit</button></td>
                        <td><button className="btn btn-danger" onClick={() => this.onBtnDeleteClick(id)}>Delete</button></td>
                    </tr>
                    )
                }
                
                    return (
                    
                        <tr>
                            <td>{id} </td>
                            <td>{nama}  <input type="text" ref="namaEdit" defaultValue={nama}  /> </td>
                            <td>{merk} 
                                <select ref="merkEdit">
                                    <option>Spetnaz</option>
                                    <option>Air Soft Company</option>
                                    <option>Corazon</option>
                                </select>
                            </td>
                            <td>{harga} <input type="number" ref="hargaEdit" defaultValue={harga}  /></td>
                            <td><img src={img} width="50px"   /> <input type="text" ref="imgEdit" defaultValue={img}  /></td>
                            <td>{deskripsi} <textarea ref="desEdit" defaultValue={deskripsi}  /></td>
                            <td><input type="button" className="btn btn-primary" value="save" onClick={() => this.onBtnSaveClick(id)}/></td>
                            <td><button className="btn btn-danger" onClick={() => this.setState({ editgak: 0 })} >Cancel</button></td>
                        </tr>
                        )
                
            })
            return listJSXPopok;
    
        
        }
    render() {
        console.log('Ini Render')
        return(
            <div>
                <br/>
                <center><h1>Manage Produk </h1></center>
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Nama</th>
                            <th>Merk</th>
                            <th>Harga</th>
                            <th>Image</th>
                            <th>Deskripsi</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderbodyPopok()}
                    </tbody>
                    <tfoot>
                        <td></td>
                        <td><input ref="namaadd" type="text" placeholder="Nama Product" /></td>
                        <td>
                            <select ref="merkadd">
                                <option>Spetnaz</option>
                                <option>Air Soft Company</option>
                                <option>Corazon</option>
                            </select>
                        </td>
                        <td><input ref="hargaadd" type="number" placeholder="Harga Product" /></td>
                        <td><input ref="imgadd" type="text" placeholder="Image URL" /></td>
                        <td><textarea ref="desadd" placeholder="Deskripsi" ></textarea></td>
                        <td><input type="button" className="btn btn-primary" value="add" onClick={this.onBtnAddClick} /></td>
                        
                        <td></td>
                    </tfoot>
                </table>
            </div>
        )
    }
}

export default ManageProduk;
