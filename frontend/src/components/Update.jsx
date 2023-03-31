import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {updateProfile} from '../redux/Action';
function Update() {
  const dispath = useDispatch();
  const [status, setStatus] = useState("");
  const [name,setName] = useState("");
  const [add,setadd] = useState("");
  const [Phn,setPhn] = useState("");
  const [pass,setpass] = useState("");
  const [age,setage] = useState("");
  const [depart,setdepart] = useState("");
  const [stats,setstats] = useState("");

  const handleUpdate=()=>{
dispath(updateProfile(name, Phn, add, age, depart, stats, pass));
  }
  return (
    <div className='box register'>
        <br/>
        <br/>
        <h1 className='letter'>Update Page</h1>
        <br />
        <br />
        <FloatingLabel controlId="floatingPassword" label="Name">
        <Form.Control value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder="name" required />
      </FloatingLabel>
<br />
      <FloatingLabel
        controlId="floatingInput"
        label="Phone no"
        className="mb-3"
      >
        <Form.Control value={Phn} onChange={(e)=>setPhn(e.target.value)} type="text" placeholder="987654321" required/>
      </FloatingLabel>
      <br />

      <FloatingLabel controlId="floatingPassword" label="Password">
        <Form.Control value={pass} onChange={(e)=>setpass(e.target.value)} type="password" placeholder="Password" required />
      </FloatingLabel> <br />
      <FloatingLabel controlId="floatingPassword" label="Address">
        <Form.Control as="textarea" style={{height: "100px"}} value={add} onChange={(e)=>setadd(e.target.value)} placeholder="your address" />
      </FloatingLabel> <br />
      <FloatingLabel controlId="floatingPassword" label="Age">
        <Form.Control value={age} onChange={(e)=>setage(e.target.value)} type="text" placeholder="Age" />
      </FloatingLabel>
<br />
      <FloatingLabel controlId="floatingPassword" label="Department">
        <Form.Control value={depart} onChange={(e)=>setdepart(e.target.value)} type="text" placeholder="department" />
      </FloatingLabel>
<br />
<Form.Select aria-label="Default select example" value={stats} onChange={(e)=>setstats(e.target.value)}>
                <option>Select from option</option>
                <option value="Remote Location">Remote Location</option>
                <option value="Contract Employee">Contract Employee</option>
                <option value="Full Time">Full time</option>
            </Form.Select>
<br />
<br />
 
    <Button onClick={handleUpdate}>Update</Button>

    </div>
  );
}

export default Update;