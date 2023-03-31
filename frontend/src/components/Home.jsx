import React, { useEffect } from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { getAllUsers } from '../redux/Action';

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

ChartJS.register(ArcElement, Tooltip, Legend);

const User = ({name, ph, dept,add, status, age, lat, lng})=>{
  const navigate = useNavigate();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // const [address,setaddress]=useState("")
  // const [coordinates,setCoordiantes]=useState({
  //   lat:null,
  //   lng:null
  // })
   
  //   const handleSelect=async value=>{
  //   const results = await geocodeByAddress(value);
  //   const ll=await getLatlng(results[0]);
  //   console.log(ll);
  //   setaddress(value);
  //   setCoordiantes(ll);
  //   }

    return(
      <>
        <div onClick={handleShow} className='user'>
            <h1>{name}</h1>
            <h1>{dept}</h1> 
            <h1>{ph}</h1>
            <h1>{add}</h1>
            {/* <h1>{status}</h1>
            <h1>{age}</h1> */}
        </div>

        <Modal
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                  >
              <Modal.Header closeButton>
              <Modal.Title>Employee Details</Modal.Title>
            </Modal.Header>
            <Modal.Body>

              <h1>Name : {name}</h1>
              <h1>Department : {dept}</h1> 
              <h1>Phone Number: {ph}</h1>
              <h1>Address: {add}</h1>
              <h1>Employee Status: {status}</h1>
              <h1>Age: {age}</h1>
              <div className='App'>
                <p>lat:{lat}</p>
                <p>long:{lng}</p>
                {/* <p>Address:{address}</p>  */}
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <NavLink to="https://www.google.com/maps/place/Kolkata,+West+Bengal/@22.5354122,88.2773122,12z/data=!3m1!4b1!4m6!3m5!1s0x39f882db4908f667:0x43e330e68f6c2cbc!8m2!3d22.572646!4d88.363895!16zL20vMGN2dzk">
              <Button variant="primary">Map view</Button>
              </NavLink>

            </Modal.Footer>
          </Modal>

            </>
    )
}

const Home = () => {

  
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {users} = useSelector(state=>state.user);


    const data = {
        labels: ["Employee"],
        datasets: [
          {
            label: "No of Employees",
            data: [users?.length],
            backgroundColor: ["#ffb900"],
            borderColor: ["orangered"],
            borderWidth: 1,
          },
        ],
      };
      useEffect(()=>{
        dispatch(getAllUsers());
      }, []);

  return (
    <>
    <h3 className="letter">All Employees</h3>
    <br />
    <br />
    <div className="chart py-4 mb-3">
              <Doughnut data={data} />
            </div>
            <br />
            <br />
    <div className='users'>
        {
            users && users.map((item)=>(
                <>
                <User handleShow={handleShow} key={item._id} name={item.name} dept={item.department} add={item.address} ph={item.phno} status={item.status} age={item.age} lat={item?.lat} lng={item?.long} />

                </>
                ))
            }
    </div>
            </>
  )
}

export default Home