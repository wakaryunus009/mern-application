import Button from 'react-bootstrap/Button';
import { useEffect } from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser, loadUser } from '../redux/Action';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const dispatch = useDispatch();
  const {user} = useSelector(state=>state.user);
  console.log(user)
  const navigate = useNavigate();

  const handleDelete = ()=>{
    dispatch(deleteUser());
    navigate("/register");
  }

  useEffect(()=>{
    dispatch(loadUser());
  }, [])

  return (
    <div className='box register'>
    <br/>
    <h1 className='letter'>DETAILS OF AN EMPLOYEES</h1>
    <br />
    <div className="user">
        <h1>Id : {user?._id}</h1>
        <h1>Name : {user?.name}</h1>
        <h1>Age : {user?.age}</h1>
        <h1>Address : {user?.address}</h1>
        <h1>Department : {user?.department}</h1>
        <h1>Phone No : {user?.phno}</h1>
      <h1>Employee Status : {user?.status}</h1>

      <Button onClick={handleDelete}>Delete Profile</Button>

    </div>
</div>
  )
}

export default Profile