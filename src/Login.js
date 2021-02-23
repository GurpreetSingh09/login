import React, { useState } from "react";
import Input from "./login/Input";
import Select from "./login/Select";
import axios from "axios";
function Login(props) {
  //---states---------

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [apples, setApples] = useState("");
  const [iagree, setAgree] = useState(false);

  //handlers------

  const submitHandler = (e) => {
    e.preventDefault();
    if (email === "" && name === "") {
      alert("Please Enter Your Email & Name");
    } else {
      if (email === "") {
        alert("Please Enter Your Email");
      }
      if (name === "") {
        alert("Please Enter Your Name");
      }
    }
    if (name !== "" && email !== "") {
      let data = {
        "e-mail": email,
        "person-name": name,
        "apples-count": apples,
        "email-marketing": iagree,
      };
    //   axios
    //     .post("https://react-dummy-ee5dd.firebaseio.com/users.json", data)
    //     .then((response) => {
    //       console.log(response);
    //     });
      alert("Form Submitted!");
      setEmail("");
      setName("");
      setApples("");
      setAgree("");
    }
  };

  const checkAgree = () => {
    setAgree(!iagree);
  };

  const changeHandler = (evt, val) => {
    //alert("changes")
    evt.preventDefault();
    val(evt.target.value);
  };

  return (
    <div className="text-center">
      <div className="bmform_outer1015852" id="tblFormData1015852">
        <div className="bmform_inner1015852">
          <div className="bmform_head1015852">
            <div className="bm_headetext1015852">Join Our Mailing List</div>
          </div>
          <div className="bmform_body1015852">
            <div className="bmform_introtxt1015852">
              Join our weekly newsletter list. Just enter your email below.
              <br />
            </div>
            <form id="submitForm" onSubmit={(e) => submitHandler(e)}>
              <Input
                fieldName="Email"
                type="email"
                id="fldEmail"
                name="fldEmail"
                maxLength="100"
                inputClass="bmform_frm1015852"
                value={email}
                req
                onChangeHandler={(e) => changeHandler(e, setEmail)}
              />
              <Input
                fieldName="First Name"
                type="text"
                id="fldfirstname"
                name="fldfirstname"
                maxLength="100"
                inputClass="bmform_frm1015852"
                value={name}
                req
                onChangeHandler={(e) => changeHandler(e, setName)}
              />
              <Select
                fieldName="How Many Apples?"
                values={["one", "two", "three"]}
                onChangeHandler={(e) => changeHandler(e, setApples)}
              />
              <div className="bmform_frmtext1015852">Email Marketing</div>
              <div className="bmform_frmtext1015852">
                <input
                  type="checkbox"
                  id="fldfield240"
                  name="fldfield24"
                  value="Yes, please subscribe me"
                  checked={iagree}
                  onChange={checkAgree}
                />
                <label htmlFor="fldfield240">Yes, please subscribe me</label>

                <br />
              </div>
              <Input
                type="submit"
                id="submitBtn"
                name="submitBtn"
                inputClass="bmform_submit1015852"
                value="Save"
              />
            </form>
          </div>
        </div>
      </div>
      <p className="footer-text">*Required Field</p>
    </div>
  );
}

export default Login;
