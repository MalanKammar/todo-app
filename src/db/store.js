import {toast} from "react-toastify";

let contacts=JSON.parse(localStorage.getItem('contacts')) || []; //JSON.parse=> string to json

//update the value in local storage
const updateStorage=(data)=>{
    localStorage.setItem('contacts',JSON.stringify(data)); //object to string conversion
}

//store logic
export const createContact=(contact)=>{
    //check if the email is exist in in db or not
    let exEmail=contacts.find((item)=>item.email===contact.email);
    let exMobile=contacts.find((item)=>item.mobile===contact.mobile);

    if(exEmail){

        toast.warning('user email already registerde');
    }else if(exMobile){
        toast.warning('useer mobile number is already exist');
    }else{
        //if mobile and email not exist store the new contact data in local storage
        contacts.push(contact);
        updateStorage(contacts);
        toast.success('new user created sucessfully');
        window.location.href="/";
    }

}

//reaad the contacts
 export const readContact=()=>{
    return contacts;
}

//to read the single contact 
export const readContactt=(id)=>{
    let extContact=contacts.find((item)=>item.id==id);
    return  extContact;
}

//to update data

export const updateContact=(id,contact)=>{
    let extIndex=contacts.findIndex((item)=>item.id==id);
    let data ={
        id:Number(id),
        ...contact
    };
    contacts.splice(extIndex,1,data)
    updateStorage(contacts)
    toast.success('sucessfully updatedd');
    window.location.href="/";
}

//delete
export const deleteContact=(id)=>{
    let extIndex=contacts.findIndex((item)=>item.id==id)
    contacts.splice(extIndex,1)
    updateStorage(contacts)
    toast.success('contact delted successfully');
    window.location.href="/";
}