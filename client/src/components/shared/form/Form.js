import React, { useState } from "react";
import { Link } from "react-router-dom";

import InputType from "./InputType";
import { handleLogin, handleRegister } from "../../../services/authService";

const Form = ({ formType, submitBtn, formTitle }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("donar");
  const [name, setName] = useState("");
  const [organisationName, setOrganisationName] = useState("");
  const [hospitalName, setHospitalName] = useState("");
  const [website, setWebsite] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  return (
    <div>
      <form
        onSubmit={(e) => {
          if (formType === "login")
            return handleLogin(e, email, password, role);
          return handleRegister(
            e,
            email,
            password,
            role,
            name,
            phone,
            organisationName,
            address,
            hospitalName,
            website
          );
        }}
      >
        <h1 className="text-center">{formTitle}</h1>
        <hr />
        <div className="d-flex mb-3">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="role"
              value={"donar"}
              onChange={(e) => {
                setRole(e.target.value);
              }}
              defaultChecked
              id="donarRadio"
            />
            <label className="form-check-label" htmlFor="donarRadio">
              Donar
            </label>
          </div>

          <div className="form-check ms-2">
            <input
              className="form-check-input"
              type="radio"
              name="role"
              value={"admin"}
              onChange={(e) => {
                setRole(e.target.value);
              }}
              id="adminRadio"
            />
            <label className="form-check-label" htmlFor="adminRadio">
              Admin
            </label>
          </div>

          <div className="form-check ms-2">
            <input
              className="form-check-input"
              type="radio"
              name="role"
              value={"hospital"}
              onChange={(e) => {
                setRole(e.target.value);
              }}
              id="hospitalRadio"
            />
            <label className="form-check-label" htmlFor="hospitalRadio">
              Hospital
            </label>
          </div>

          <div className="form-check ms-2">
            <input
              className="form-check-input"
              type="radio"
              name="role"
              value={"organisation"}
              onChange={(e) => {
                setRole(e.target.value);
              }}
              id="organisationRadio"
            />
            <label className="form-check-label" htmlFor="organisationRadio">
              Organisation
            </label>
          </div>
        </div>
        {/*Switch statements*/}
        {(() => {
          //eslint-disable-next-line
          switch (true) {
            case formType === "login": {
              return (
                <>
                  <InputType
                    labelText={"E-mail"}
                    labelFor={"forEmail"}
                    inputType={"email"}
                    name={"email"}
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />

                  <InputType
                    labelText={"Password"}
                    labelFor={"forPassword"}
                    inputType={"password"}
                    name={"password"}
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                </>
              );
            }
            case formType === "register": {
              return (
                <>
                  {(role === "admin" || role === "donar") && (
                    <InputType
                      labelText={"Name"}
                      labelFor={"forName"}
                      inputType={"text"}
                      name={"name"}
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                    />
                  )}

                  {role === "organisation" && (
                    <InputType
                      labelText={"Organisation Name"}
                      labelFor={"forOrganisationName"}
                      inputType={"text"}
                      name={"organisationName"}
                      value={organisationName}
                      onChange={(e) => {
                        setOrganisationName(e.target.value);
                      }}
                    />
                  )}

                  {role === "hospital" && (
                    <InputType
                      labelText={"Hospital Name"}
                      labelFor={"forHospitalName"}
                      inputType={"text"}
                      name={"hospitalName"}
                      value={hospitalName}
                      onChange={(e) => {
                        setHospitalName(e.target.value);
                      }}
                    />
                  )}
                  <InputType
                    labelText={"E-mail"}
                    labelFor={"forEmail"}
                    inputType={"email"}
                    name={"email"}
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />

                  <InputType
                    labelText={"Password"}
                    labelFor={"forPassword"}
                    inputType={"password"}
                    name={"password"}
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />

                  <InputType
                    labelText={"Website"}
                    labelFor={"forWebsite"}
                    inputType={"text"}
                    name={"website"}
                    value={website}
                    onChange={(e) => {
                      setWebsite(e.target.value);
                    }}
                  />

                  <InputType
                    labelText={"Address"}
                    labelFor={"forAddress"}
                    inputType={"text"}
                    name={"address"}
                    value={address}
                    onChange={(e) => {
                      setAddress(e.target.value);
                    }}
                  />

                  <InputType
                    labelText={"Phone"}
                    labelFor={"forPhone"}
                    inputType={"text"}
                    name={"phone"}
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                    }}
                  />
                </>
              );
            }
          }
        })()}

        <div className="d-flex flex-row justify-content-between">
          {formType === "login" ? (
            <p>
              Not registered yet ? <Link to="/register">Register</Link>
            </p>
          ) : (
            <p>
              Already a user ? <Link to="/login">Login</Link>
            </p>
          )}
          <button className="btn btn-primary" type="submit">
            {submitBtn}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
