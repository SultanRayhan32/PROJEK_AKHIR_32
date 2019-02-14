import axios from 'axios';
import { USER_LOGIN_SUCCES, 
        AUTH_SYSTEM_ERROR , 
        LogOut,
        AUTH_LOADING,
         COOKIE_CHECKED,
        SELECT_POPOK,
        MOVIE_SUCCESS,
        SELECT_MOVIE,
        CART_SUCCESS,
        CART_FAILED,
        ADD_CART_SUCCESS,
        SELECT_PRODUK } 
         from './type';

export const GetAllMovies = () => {
    return(dispatch) =>{
        axios.get('http://localhost:1997/movies')
        .then((res)=>{
            dispatch({
                type : MOVIE_SUCCESS,
                payload : res.data
            })
        })
    }
}


export const onFilterList = ({username}) =>{
    return (dispatch) =>{
        axios.get('http://localhost:1995/users' ,{
            params : {
                username : username
            }           
        }).then((res) => {
            if(res.data.length === 0){
                dispatch({ type : AUTH_SYSTEM_ERROR , payload : 'Anda Harus Login Terlebih dahulu' })
            }
        })
    }
}

export const onUserRegister = ({nama , email , password , role }) =>{
    return (dispatch) => {
        dispatch({type : AUTH_LOADING}) // Loading
        if(nama === '' || email === '' ||  password === ''){
            dispatch({ type : AUTH_SYSTEM_ERROR , 
                payload : 'Semua Form Di atas Harus di isi'})
        }
        else{
            axios.get('http://localhost:2019/auth/signin2', {
                params : {
                    nama
                }
            }).then((res) =>{
                if(res.data.length === 0) {
                    axios.post('http://localhost:2019/auth/registertes' ,{ 
                     nama, email , password , role
                    }).then((res) =>{
                        console.log(res)
                        dispatch({ type : USER_LOGIN_SUCCES, 
                        payload : {username : res.data[0].nama ,  
                            email : res.data[0].email , 
                            id : res.data[0].id , 
                            role : res.data[0].role}})
                    }).catch((err) =>{
                        console.log(err)
                        dispatch({ type : AUTH_SYSTEM_ERROR , payload : 'System Error' })
                    })
                }
                else {
                    // dispatch({type : AUTH_SYSTEM_ERROR, payload : 'Username Has been Taken9999'})
                    axios.post('http://localhost:2019/auth/registertes' ,{ 
                     nama, email , password , role
                    })
                }
            }).catch((err)=>{
                dispatch({type : AUTH_SYSTEM_ERROR , payload : 'Sistem Kami Sedang Error'})
            }) 
           
        
        }
        
    }
}

export const TesRegister = ({nama , email , password }) =>{
    
   axios.post(`http://localhost:2019/auth/cobaregister?nama=${nama}&email=${email}&password=${password} ;`)
   .then((res)=>{
       alert('Register Berhasil')
       
   }).catch((err)=>{
       alert('register gagal')
   })
}

export const onUserRegister2 = ({nama , email , password}) =>{
    return (dispatch) => {
        dispatch({ type: AUTH_LOADING })
        if(nama === '' || email === '' ||   password === '') {
            dispatch({ type: AUTH_SYSTEM_ERROR, payload: 'Semua form diatas wajib diisi!' })
        }
        else {
                axios.post(`http://localhost:2019/auth/register?nama=${nama}&email=${email}&password=${password} ;`)
                .then((res) => {
                        console.log(res)
                        dispatch({ type : USER_LOGIN_SUCCES, payload: res.data })
                        // dispatch({ type: USER_LOGIN_SUCCESS, payload: { username: res.data.username, email: res.data.email }  })
                    }).catch((err) => {
                        console.log(err);
                        dispatch({ type: AUTH_SYSTEM_ERROR, payload: 'System Error' })
                    })
            }
        }
}

export const onUserLogOut = () =>{
    return { type :  LogOut }
}

export const keepLogin = (username) => {
    return (dispatch) =>{
        axios.get('http://localhost:2019/auth/keeplogin',{
            params : {
                nama : username
            }
        }).then((res)=>{
            if(res.data.length > 0) {
                dispatch({ 
                    type: USER_LOGIN_SUCCES, 
                    payload: { email: res.data[0].email, username : res.data[0].nama , id : res.data[0].id , role : res.data[0].role } 
                })
            }
        })
    }
}

export const cookieChecked = () =>{
    return { type : COOKIE_CHECKED }
}

export const select_produk = (selectProduk) =>{
    return{
        type : SELECT_PRODUK,
        payload : selectProduk
    }
}


export const select_popok = (selectedPopok) => {
    return {
        type : SELECT_POPOK,
        payload : selectedPopok
    }
}

export const select_movie = (movie) =>{
    return{
        type : SELECT_MOVIE,
        payload : movie
    }
}
export const onUserLogin = ({username, password}) => {
    return (dispatch12) => {
        dispatch12({ type : AUTH_LOADING })
        axios.get(`http://localhost:2019/auth/UserLogin?nama=${username}&password=${password}`)
        .then((res) => {
            // console.log(res)
            if(res.data.length > 0){
                dispatch12({ type : USER_LOGIN_SUCCES, 
                            payload : {username : res.data[0].nama, 
                                email : res.data[0].email , 
                                id : res.data[0].id , 
                                role : res.data[0].role}
            })
        }
            else {
                dispatch12({ type : AUTH_SYSTEM_ERROR , payload : 'USERNAME OR PASSWORD NOT FOUND' })
            }
        }).catch((err) =>{
            console.log(err)
            dispatch12({ type : AUTH_SYSTEM_ERROR , payload : 'System Error'})
        })
    }
}


export const onUserLogin2 = ({nama, password}) => {
    return (dispatch12) => {
        dispatch12({ type : AUTH_LOADING })
        axios.get("http://localhost:2019/auth/UserLogin",{
            params : {
                nama : nama ,
                password : password
            }
        }).then((res) => {
            console.log(res)
            if(res.data.length > 0){
                dispatch12({ type : USER_LOGIN_SUCCES, 
                            payload : {username : res.data[0].nama, email : res.data[0].email , id : res.data[0].id}
            })
        }
            else {
                dispatch12({ type : AUTH_SYSTEM_ERROR , payload : 'USERNAME OR PASSWORD NOT FOUND' })
            }
        }).catch((err) =>{
            console.log(err)
            dispatch12({ type : AUTH_SYSTEM_ERROR , payload : 'System Error'})
        })
    }
}

// export const onUserLogin = ({username, password}) => {
//     return (dispatch12) => {
//         dispatch12({ type : AUTH_LOADING })
//         axios.get(" http://localhost:1995/users",{
//             params : {
//                 username : username ,
//                 password : password
//             }
//         }).then((res) => {
//             // console.log(res)
//             if(res.data.length > 0){
//                 dispatch12({ type : USER_LOGIN_SUCCES, 
//                             payload : {username : res.data[0].username, email : res.data[0].email , id : res.data[0].id}
//             })
//         }
//             else {
//                 dispatch12({ type : AUTH_SYSTEM_ERROR , payload : 'USERNAME OR PASSWORD NOT FOUND' })
//             }
//         }).catch((err) =>{
//             console.log(err)
//             dispatch12({ type : AUTH_SYSTEM_ERROR , payload : 'System Error'})
//         })

//     }
// }


export const select_cart = ({idUsers}) =>{
    return (dispatch) =>{
        axios.get("http://localhost:1995/keranjang",{
            params : {
                idUsers : idUsers
            }
        }).then((res)=>{
            console.log(res)
            if(res.data.length > 0){
                // for(var x = 1; x < res.data[0].namaProduk.length ; x++){
                    dispatch({
                        type : CART_SUCCESS,
                        payload : {namaProduk : res.data[0].namaProduk,
                                    harga : res.data[0].harga,
                                    idUsers : res.data[0].idUsers,
                                    idProduk : res.data[0].idProduk,
                                    id : res.data[0].id}
                    })
                // }
                // dispatch({
                //     type : CART_SUCCESS,
                //     payload : { idUsers : "res.data[0].idUsers" , 
                //                 // idProduk : res.data[0].idProduk ,
                //                 harga : res.data[0].harga,
                //                 namaProduk : res.data[0].namaProduk
                //                 // qty : res.data[0].qty,
                //                 // totalHarga : res.data[0].totalHarga
                //             }
                // })
            }
           
        }).catch((err)=>{
            console.log(err)
        })
    }
}



export const Cookie_cart = ({idUsers}) =>{
    return (dispatch) =>{
        axios.get("http://localhost:1995/keranjang",{
            params : {
                idUsers : idUsers
            }
        }).then((res)=>{
            console.log(res)
            if(res.data.length > 0){
                dispatch({
                    type : CART_SUCCESS,
                    payload : { idUsers : res.data[0].idUsers , harga : res.data[0].harga,}
                })
            }
           
        }).catch((err)=>{
            console.log(err)
        })
    }
}

// export const addNewCart = ({ idUsers ,idProduk ,harga ,qty ,totalHarga ,namaProduk }) => {
//    axios.get('http://localhost:1995/keranjang',{
//        params : {
//         namaProduk : namaProduk , idUsers : idUsers , idProduk : idProduk
//        }
//    })
//    .then((res)=>{
//     if(res.data.length === 0){
//         axios.post("http://localhost:1995/keranjang",{
//             idUsers : idUsers ,idProduk : idProduk ,harga : harga ,qty : qty ,totalHarga : totalHarga ,namaProduk : namaProduk
//                 }).then((res)=>{
//                     console.log(res)
//                     // return {type : ADD_CART_SUCCESS}
//                 }).catch((err)=>{
//                     console.log(err)
//                 })
//         }
        
//    })
// }

// export const onUserRegister = ({username , email , password , phone}) =>{
//     return (dispatch) => {
//         dispatch({type : AUTH_LOADING}) // Loading
//         if(username === '' || email === '' || phone === '' || password === ''){
//             dispatch({ type : AUTH_SYSTEM_ERROR , 
//                 payload : 'Semua Form Di atas Harus di isi'})
//         }
//         else{
//             axios.get('http://localhost:1995/users', {
//                 params : {
//                     username
//                 }
//             }).then((res) =>{
//                 if(res.data.length === 0) {
//                     axios.post('http://localhost:1995/users' ,{ 
//                     username, email , password , phone
//                     }).then((res) =>{
//                         console.log(res)
//                         dispatch({ type : USER_LOGIN_SUCCES, 
//                         payload : {username : res.data[0].username}})
//                     }).catch((err) =>{
//                         console.log(err)
//                         dispatch({ type : AUTH_SYSTEM_ERROR , payload : 'System Error' })
//                     })
//                 }
//                 else {
//                     dispatch({type : AUTH_SYSTEM_ERROR, payload : 'Username Has been Taken'})
//                 }
//             }).catch((err)=>{
//                 dispatch({type : AUTH_SYSTEM_ERROR , payload : 'Sistem Kami Sedang Error'})
//             }) 
           
        
//         }
        
//     }
// }
export const addNewCart = ({ idUsers ,idProduk ,harga ,qty ,totalHarga ,namaProduk }) => {
    return (dispatch) =>{
        axios.get('http://localhost:1995/keranjang',{
            params : {
            namaProduk : namaProduk , idUsers : idUsers , idProduk : idProduk
            }
        })
        .then((res)=>{
        if(res.data.length === 0){
            axios.post("http://localhost:1995/keranjang",{
                idUsers : idUsers ,idProduk : idProduk ,harga : harga ,qty : qty ,totalHarga : totalHarga ,namaProduk : namaProduk
                    }).then((res)=>{
                        console.log(res)
                         dispatch({type : keepLogin , payload : alert('Berhasil Ditambahkan')})
                    }).catch((err)=>{
                        console.log(err)
                    })
            }
            
        })
    }
 }
export const AddCheckOut = () =>{

}

