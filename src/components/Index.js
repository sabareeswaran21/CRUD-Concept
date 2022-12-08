import'bootstrap/dist/css/bootstrap.min.css';
import{ Link} from 'react-router-dom'
import {useEffect, useState } from 'react';
import axios from 'axios';

export default function Index() {

      const [Studentdetails,setStudentdetails]=useState([]);

      useEffect(()=>{
        fetch('http://localhost:3002/studentdetails')
        .then(response=>response.json())
        .then(json=>setStudentdetails(json))
      },[])

      const deletevalue= (id)=>{
        var datastring = {id:id};
        var config = {headers:{"enctype":"multipart/form-data"}};
        axios.post('http://localhost:3002/Delete',datastring,config)
        .then(function(a){
          if(a.data.status === 'error'){
            alert('error');
            window.location.reload();
          }
          else if(a.data.status==='Success'){
              alert('Delete');
              window.location.reload();
          }
        })
        .catch(function(error){
          alert(error);
          window.location.reload();
        })
      }

  return (
   <>
   <div className='container'>
    <div className='row mt-4'>
      <div className='col-lg-12'>
        <h2 className='heading text-center'>Student Management System</h2>
      </div>
    </div>
    <div className='row mt-4'>
      <div className='col-lg-4'>
        <input type="text" name="serch" className='serch p-1' id='form-control' placeholder='serch'/>
      </div>
    <div className='col-lg-6'>&nbsp;</div>
      <div className='col-lg-1'>
        <Link to='/ADD'>
            <button type='button' name='button' id='button' value='ADD' className='btn btn-danger'>ADD</button>
        </Link>
      </div>
    </div>
    <div className='row mt-5'>
        <div className='col-lg-12'>
            <div className='table-responsive'>
                <table className='table table-bordered table-hover text-center'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>DOB</th>
                            <th>Education</th>
                            <th>Location</th>
                            <th>About</th>
                            <th>Active</th>
                        </tr>
                    </thead>
                    <tbody>
                      {
                        Studentdetails.map((value,index)=>(
                          <tr>
                            <td>{value.id}</td>
                            <td>{value.firstname}</td>
                            <td>{value.lastname}</td>
                            <td>{value.email}</td>
                            <td>{value.dob}</td>
                            <td>{value.education}</td>
                            <td>{value.location}</td>
                            <td>{value.about}</td>
                            <td><Link to={"/Update/"+value.id}>
                                  <button type='button' name='update' id='update' className='btn btn-success'>Update</button>
                                </Link>
                                <button type='button' name='deletevalue' id='deletevalue' className='btn btn-danger' onClick={()=>{deletevalue(value.id)}}>Delete</button>
                              </td>
                          </tr>
                        ))
                      }
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    </div>
   </>
  );
}

