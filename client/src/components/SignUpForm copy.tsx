import Button from '@mui/material/Button';
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

const SignUpForm = () => {
  return (
    <Form>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridName">
          <Form.Control type="text" placeholder="Full Name" required />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridFatherName">
          <Form.Control type="text" placeholder="Father Name" required />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Control type="email" placeholder="Email" required />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridPhoneNo">
          <Form.Control type="text" placeholder="Phone Number" required />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Control type="password" placeholder="Password" required />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridPhoneNo">
          <Form.Control type="text" placeholder="Specialization" required />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Control type="text" placeholder="Experience" required />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridPhoneNo">
          <Form.Control type="text" placeholder="Qualifications" required />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Select aria-label="Default select example">
            <option>Country</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </Form.Group>
        <Form.Group as={Col} controlId="formGridPhoneNo">
          <Form.Control type="text" placeholder="City" required />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Control type="text" placeholder="Address" required />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridPhoneNo">
          <Form.Control type="text" placeholder="Postal code" required />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Control type="text" placeholder="Age" required />
        </Form.Group>
        <Form.Group
          as={Col}
          controlId="formGridPhoneNo"
          style={{ display: "flex", alignItems: "center" }}
        >
          <label className="mr-2">Gender:</label>
          <Form.Check
            inline
            label="Male"
            name="group1"
            type="radio"
            id={`inline-radio-1`}
            defaultChecked
          />
          <Form.Check
            inline
            label="Female"
            name="group1"
            type="radio"
            id={`inline-radio-2`}
          />
          <Form.Check
            inline
            label="Other"
            name="group1"
            type="radio"
            id={`inline-radio-2`}
          />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Control type="text" placeholder="Address" required />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridPhoneNo">
          <Form.Control type="text" placeholder="Postal code" required />
        </Form.Group>
      </Row>
      <Row className="mb-3" >
        <Form.Group as={Col} controlId="formGridEmail">
         <Row style={{ display: "flex", alignItems: "center" }}> 
             <Form.Group as={Col} xs={3} controlId="formGridPhoneNo" style={{paddingTop:"5px"}}  >
   <Form.Label>CV/Resume</Form.Label>
                </Form.Group>
           <Form.Group as={Col} xs={9} controlId="formGridPhoneNo">
  <Form.Control type="file"  accept=".pdf,.doc" required />
                </Form.Group>
           </Row>


        
        </Form.Group>
        <Form.Group as={Col} controlId="formGridPhoneNo">
          <Form.Control type="text" placeholder="Postal code" required />
        </Form.Group>
      </Row>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Control as="textarea" rows={2} placeholder="About your self" />
      </Form.Group>
<div style={{ display: 'flex', justifyContent: 'center' }}>
  <Button variant="contained" style={{ background: 'blue',width:"300px",borderRadius:"20px" }}>
    Contained
  </Button>
</div>
   
    </Form>
  );
};

export default SignUpForm;
