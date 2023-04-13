import React from "react";
import {useParams} from 'react-router-dom';
import { readContactt ,updateContact} from "../db/store";
import { useState } from 'react';
import { useEffect } from 'react';
import { toast } from "react-toastify";


function Update(props){
    const params=useParams();
    const [fname,setName]=useState('')
    const [femail,setEmail]=useState('')
    const [fmobile,setMobile]=useState('')
    const [fimage,setImage]=useState('')
    const [faddress,setAddress]=useState('')

    useEffect(()=>{
        let data=readContactt(params.id)
        setName(data.name)
        setEmail(data.email)
        setMobile(data.mobile)
        setImage(data.image)
        setAddress(data.address)
    },[])
    const submitHandler=(e)=>{
        e.preventDefault();
        try{
            let data={
                name:fname,
                email:femail,
                image:fimage,
                mobile:fmobile,
                address:faddress
            };
            console.log('updated data=',data)
            updateContact(params.id,data)
        }catch(err){
            toast.error(err.message)
        }
    }

    return(
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h3 className="display-3">Update</h3>
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
                                    <input type="submit" value='update' className='btn btn-outline-success'/>
                                </div>
                                
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Update