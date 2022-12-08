import'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
import axios from 'axios';

export default function Add(){

    const handlesubmit = async(event)=>{
        event.preventDefault();
        var datastring = new FormData(event.target);
        var config = {headers:{"enctype":"multipart/form-data"}};

        var fname = document.getElementById("firstname").value;
        var lname = document.getElementById("lastname").value;
        var email = document.getElementById("email").value;
        var dob = document.getElementById("dob").value;
        var edu = document.getElementById("education").value;
        var loc = document.getElementById("location").value;
        var about = document.getElementById("about").value;
        var teststring = /^[A-Za-z]{10,30}$/;

        if(fname===''|| fname===null){
            alert("Enter the firstname");
        }
        else if(!teststring.test(fname)){
            alert("Enter the name as a pattern as 10 to 30");
        }
        else if(lname===''||lname===null){
            alert('Enter the last name');
        }
        else if(email===''||email===null){
            alert('Enter the email Id');
        }
        else if(dob===''||dob===null){
            alert('Enter the date of birth');
        }
        else if(edu===''||edu===null){
            alert('Enter the education');
        }
        else if(loc===''||loc===null){
            alert('Enter the location');
        }
        else if(about===''||about===null){
            alert('Enter the about');
        }
        else{
            await axios.post('http://localhost:3002/ADD',datastring,config)
            .then(function(res){
                if(res.data.status==='error'){
                    alert('error');
                    window.location.reload();
                }
                else if(res.data.status==='Success'){
                    alert('Success');
                    window.location.reload();
                }
                
            })
            .catch(function(err){
                alert(err);
                window.location.reload();
            })
        }
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
                    <h5 className='sub-heading'>Add Student Details</h5>
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
                        <input type='text' name='firstname' id='firstname' className='form-control'/>
                    </div>
                    <div className='col-lg-2'>
                        <label>Last Name</label>
                    </div>
                    <div className='col-lg-4'>
                        <input type='text' name='lastname' id='lastname' className='form-control'/>
                    </div>
                </div>
                <div className='row mt-3'>
                    <div className='col-lg-2'>
                        <label>Email</label>
                    </div>
                    <div className='col-lg-4'>
                        <input type='email' name='email' id='email' className='form-control'/>
                    </div>
                    <div className='col-lg-2'>
                        <label>DOB</label>
                    </div>
                    <div className='col-lg-4'>
                        <input type='date' name='dob' id='dob' className='form-control'/>
                    </div>
                </div>
                <div className='row mt-3'>
                    <div className='col-lg-2'>
                        <label>Location</label>
                    </div>
                    <div className='col-lg-4'>
                        <input type='text' name='location' id='location' className='form-control'/>
                    </div>
                    <div className='col-lg-2'>
                        <label>Education</label>
                    </div>
                    <div className='col-lg-4'>
                        <input type='text' name='education' id='education' className='form-control'/>
                    </div>
                </div>
                <div className='row mt-3'>
                    <div className='col-lg-2'>
                        <label>About</label>
                    </div>
                    <div className='col-lg-10'>
                        <textarea name='about' id='about' className='form-control'/>
                    </div>
                </div>
                <div className='row mt-5'>
                    <div className='col-lg-2'></div>
                    <div className='col-lg-2'>
                        <button type='submit' name='submit' id='submit' className='btn btn-danger'>Submit</button>
                    </div>
                </div>
            </form>
        </div>
        </>
    )
}