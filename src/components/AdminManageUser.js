import React , { Component } from 'react';
import axios from 'axios';

class AdminManageUser extends Component {

    state = { ListUser : [] }

    componentDidMount(){
        axios.get('http://localhost:2019/auth/signin2')
        .then((res)=>{
            this.setState({ ListUser : res.data })
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    deleteUsers = (id) =>{
        var idUser = id
        axios.delete(`http://localhost:2019/admin/deletuser?id=${idUser}`)
        .then((res)=>{
            alert('Berhasil Di Hapus')
            console.log(idUser)
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    renderAllUser = () =>{
        var x = this.state.ListUser.map((item)=>{
            return(<tr className="row100">
            <td className="column100 column1" >{item.id}</td>
            <td className="column100 column1" >{item.nama}</td>
            <td className="column100 column1" >{item.email}</td>
            <td className="column100 column1" ><input type="button" value="Delete" class="btn btn-primary" onClick={()=>this.deleteUsers(item.id)} /></td>
          </tr>)
        })
        return x;
    }

    render(){
        return(
            <div className="table100 ver2 m-b-110">
                <br/><br/><br/><br/>
                <table data-vertable="ver2">
                    <thead>
                        <tr className="row100 head">
                            <th className="column100 column1">Id</th>
                            <th className="column100 column1">nama</th>
                            <th className="column100 column1" >email</th>
                            <th className="column100 column1" >Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderAllUser()}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default AdminManageUser;