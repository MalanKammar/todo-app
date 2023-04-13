import React,{useState} from 'react';
import {toast} from "react-toastify";
import { createContact } from '../db/store';

const getRandom=()=>{
    return Math.round(Math.random()*10000);
}

function Create(props){
    //const[state,handler()]=usestate(initial value)
    const [fname,setName]=useState('')
    const [femail,setEmail]=useState('')
    const [fmobile,setMobile]=useState('')
    const [fimage,setImage]=useState('')
    const [faddress,setAddress]=useState('')

    const submitHandler=async(e)=>{
        e.preventDefault(); //to avoid page refresh
        let data={
            id:getRandom(),
            name:fname,
            email:femail,
            mobile:fmobile,
            image:fimage,
            address:faddress
        };
        console.log('new conact =',data);
        createContact(data);
    }
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h3 className="display-4 text-success">Create New</h3>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="card">
                        <div className="card-body">
                            <form autoComplete='off' onSubmit={submitHandler}>
                                <div className="form-group mt-2">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" name='name' id='name' value={fname} onChange={(e)=>setName(e.target.value)} className="form-control" required />
                                </div>
                                <div className="form-group mt-2">
                                    <label htmlFor="email">email</label>
                                    <input type="email" name='email' id='email' value={femail} onChange={(e)=>setEmail(e.target.value)} className="form-control" required />
                                </div>
                                <div className="form-group mt-2">
                                    <label htmlFor="mobile">Mobile</label>
                                    <input type="number" name='mobile' id='mobile' value={fmobile} onChange={(e)=>setMobile(e.target.value)} className="form-control" required />
                                </div>
                                <div className="form-group mt-2">
                                    <label htmlFor="image">images</label>
                                    <input type="url" name='image'id='image' value={fimage} onChange={(e)=>setImage(e.target.value)}/>
                                </div>
                                <div className="form-group mt-3">
                                    <label htmlFor="address">Address</label>
                                    <textarea name="address" id="address" value={faddress} onChange={(e)=>setAddress(e.target.value)} cols="30" rows="5" className='form-control' required></textarea>
                                </div>
                                <div className="form-group mt-2">
                                    <input type="submit" value='create' className='btn btn-outline-success'/>
                                </div>
                                
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Create