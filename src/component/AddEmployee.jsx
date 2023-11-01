import React, { useState } from 'react'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import employeeService from '../service/employeeService';

const AddEmployee = () => {

    const [employee, setEmployee] = useState({
        firstName: "",
        lastName: "",
        contactNumber: "",
        emailAddress: "",
        dateOfJoining: ""
    })

    const [msg,setMsg]=useState("");

    const handlechange = (e) => {
        const value = e.target.value;
        setEmployee({ ...employee, [e.target.name]: value });
    }

    const EmployeeRegister = (e) => {
        e.preventDefault();
        console.log(employee);

        employeeService
            .saveEmployee(employee)
            .then((res) => {
                console.log("Employee Added successfully");
                setMsg("Employee Added Successfully");
                setEmployee({
                    firstName: "",
                    lastName: "",
                    contactNumber: "",
                    emailAddress: "",
                    dateOfJoining: ""
                });
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <>
            <div className='container mt-3'>
                <div className='row'>
                    <div className='col-md-6 offset-md-3'>
                        <div className='card'>
                            <div className="card-header fs-3 text center">Register Employee</div>
                            {msg && <p className='fs-4 text-center text-success'>{msg}</p>}
                            <div className='card-body'>
                                <form onSubmit={(e) => EmployeeRegister(e)}>
                                    <div className='mb-3'>
                                        <label>First Name</label>
                                        <input type='text' name='firstName' className='form-control' onChange={(e) => handlechange(e)} value={employee.firstName} />
                                    </div>
                                    <div className='mb-3'>
                                        <label>Last Name</label>
                                        <input type='text' name='lastName' className='form-control' onChange={(e) => handlechange(e)} value={employee.lastName} />
                                    </div>
                                    <div className='mb-3'>
                                        <label>Contact Number</label>
                                        <input type='text' name='contactNumber' className='form-control' onChange={(e) => handlechange(e)} value={employee.contactNumber} />
                                    </div>
                                    <div className='mb-3'>
                                        <label>Email Address</label>
                                        <input type='text' name='emailAddress' className='form-control' onChange={(e) => handlechange(e)} value={employee.emailAddress} />
                                    </div>
                                    <div className='mb-3'>
                                        <label>Joining Date</label>
                                        <input type='text' name='dateOfJoining' className='form-control' onChange={(e) => handlechange(e)} value={employee.dateOfJoining} />
                                    </div>
                                    <button className='btn btn-primary col-md-12'>Add Employee</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddEmployee