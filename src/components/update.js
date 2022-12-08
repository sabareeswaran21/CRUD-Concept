import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Update(){

    const {id} = useParams();

    const [firstname,setFirstname]=useState('');
    const [lastname,setLastname]=useState('');
    const [email,setEmail]=useState('');
    const [dob,setDob]=useState('');
    const [education,setEducatio]=useState('');
    const [location,setLocation]=useState('');
    const [about,setAbout]=useState('');

    useEffect(()=>{
        fetch("http://localhost:3002/Update/"+id+"")
        .then(response=>response.json())
        .then(function(res){
            setFirstname(res[0].firstname);
            setLastname(res[0].lastname);
            setEmail(res[0].email);
            setDob(res[0].dob);
            setEducatio(res[0].education);
            setLocation(res[0].location);
            setAbout(res[0].about);
        })
        .catch(function(error){
            alert(error);
            window.location.href="/";
        })
    },[])

    const handlesubmit= async(event)=>{
        event.preventDefault();
        var datastring = new FormData(event.target);
        var config = {headers:{"enctype":"multipart/form-data"}};

        await axios.put('http://localhost:3002/Updatedata/'+id+'',datastring,config)
        .then(function(res){
            if(res.data.status === 'error'){
                alert('error');
                window.location.href='/';
            }
            else if(res.data.status === 'Success'){
                alert('Update');
                window.location.href='/';
            }
        })
        .catch(function(err){
            alert(err);
            window.location.href='/';
        })
    }
    return(
        <>
        <div className='container'>
            <div className='row mt-3'>
                <div className='col-lg-12'>
                    <h2 className='heading text-center'>Student Management System</h2>
                </div>
            </div>
            <div className='row mt-5'>
                <div className='col-lg-4 '>
                    <h5 className='sub-heading'>Edit Student Details</h5>
                </div>
                <div className='col-lg-6'>&nbsp;</div>
                <div className='col-lg-2'>
                    <Link to='/'>
                        <button type='button' name='but' id='button' value='go back' className='btn btn-danger'>Go Back</button>
                    </Link>
                </div>
            </div>
            <form onSubmit={handlesubmit}>
                <div className='row mt-5'>
                    <div className='col-lg-2'>
                        <label>First Name</label>
                    </div>
                    <div className='col-lg-4'>
                        <input type='text' name='firstname' id='firstname' className='form-control' value={firstname} onChange={(e)=>setFirstname(e.target.value)}/>
                    </div>
                    <div className='col-lg-2'>
                        <label>Last Name</label>
                    </div>
                    <div className='col-lg-4'>
                        <input type='text' name='lastname' id='lastname' className='form-control' value={lastname} onChange={(e)=>setLastname(e.target.value)}/>
                    </div>
                </div>
                <div className='row mt-3'>
                    <div className='col-lg-2'>
                        <label>Email</label>
                    </div>
                    <div className='col-lg-4'>
                        <input type='email' name='email' id='email' className='form-control' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    </div>
                    <div className='col-lg-2'>
                        <label>DOB</label>
                    </div>
                    <div className='col-lg-4'>
                        <input type='date' name='date' id='date' className='form-control' value={dob} onChange={(e)=>setDob(e.target.value)}/>
                    </div>
                </div>
                <div className='row mt-3'>
                    <div className='col-lg-2'>
                        <label>Location</label>
                    </div>
                    <div className='col-lg-4'>
                        <input type='text' name='location' id='location' className='form-control' value={location} onChange={(e)=>setLocation(e.target.value)}/>
                    </div>
                    <div className='col-lg-2'>
                        <label>Education</label>
                    </div>
                    <div className='col-lg-4'>
                        <input type='text' name='education' id='education' className='form-control' value={education} onChange={(e)=>setEducatio(e.target.value)}/>
                    </div>
                </div>
                <div className='row mt-3'>
                    <div className='col-lg-2'>
                        <label>About</label>
                    </div>
                    <div className='col-lg-10'>
                        <textarea name='about' id='about' className='form-control' value={about} onChange={(e)=>setAbout(e.target.value)}/>
                    </div>
                </div>
                <div className='row mt-5'>
                    <div className='col-lg-2'></div>
                    <div className='col-lg-2'>
                        <button type='submit' name='update' id='update' className='btn btn-danger'>Update</button>
                        
                    </div>
                </div>
            </form>
        </div>
        </>
    )
}