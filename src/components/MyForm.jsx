import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Form.css';

export default function MyForm() {
  const navigate = useNavigate();
  const { register, handleSubmit, watch, setError, formState: { errors } } = useForm();

  const [showOther, setShowOther] = useState(false);
  const [otherValue, setOtherValue] = useState("");

  const [showOther1, setShowOther1] = useState(false);
  const [otherValue1, setOtherValue1] = useState("");

  const [showOtherDegree, setShowOtherDegree] = useState(false);
  const [otherDegreeValue, setOtherDegreeValue] = useState("");

  const handleCheckboxChange = (e) => {
    setShowOther(e.target.checked);
    if (!e.target.checked) setOtherValue("");
  };

  const handleCheckboxChange1 = (e) => {
    setShowOther1(e.target.checked);
    if (!e.target.checked) setOtherValue1("");
  };

  const handleOtherDegreeChange = (e) => {
    setShowOtherDegree(e.target.value === "other");
    if (e.target.value !== "other") setOtherDegreeValue("");
  };

  const password = watch("password");

const onSubmit = async (data) => {
  if (showOther && otherValue) data.cyberInterest = [...(data.cyberInterest || []), otherValue];
  if (showOther1 && otherValue1) data.skillLevel = otherValue1;
  if (showOtherDegree && otherDegreeValue) data.Degree = otherDegreeValue;

  if (data.password !== data.confirmPassword) {
    alert("Passwords do not match");
    return;
  }

  const pattern = /^(?=.*[0-9])(?=.*[!@#$%^&*(),.?":{}|<>]).+$/;
  if (!pattern.test(data.password)) {
    alert("Password must contain at least one number and one symbol");
    return;
  }

  try {
    const response = await fetch("http://localhost:5000/api/registration", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const result = await response.text();

    if (response.ok) {
      alert(result.message);
      navigate("/Login");
    } else {
      alert(result.message || "Error submitting form");
    }
  } catch (err) {
    console.error("Error submitting:", err);
    alert("Error submitting, please try again.");
  }
};

  return (
    <div className="form">
      <h1>UGCC Registration Form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="question">
          <label>Email</label>
          <input type="email" {...register("email", { required: "Email is required", pattern: { value: /^\S+@\S+$/i, message: "Email must be valid" } })} />
          {errors.email && <p className="error">{errors.email.message}</p>}
        </div>

        <div className="question">
          <label>Full Name</label>
          <input type="text" {...register("fullName", { required: "Full Name is required", minLength: { value: 6, message: "Name must be at least 6 characters" } })} />
          {errors.fullName && <p className="error">{errors.fullName.message}</p>}
        </div>

        <div className="question">
          <label>Contact Number (592 xxx xxxx)</label>
          <input type="text" {...register("phoneNum", { pattern: { value: /^\d{3}\s\d{3}\s\d{4}$/, message: "Format must be 592 xxx xxxx" } })} />
          {errors.phoneNum && <p className="error">{errors.phoneNum.message}</p>}
        </div>

        <div className="question">
          <label>Membership</label>
          <select {...register("isMember", { required: "Membership selection is required" })}>
            <option value="">Select</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
          {errors.isMember && <p className="error">{errors.isMember.message}</p>}
        </div>

        <div className="question">
          <label>Field of Study *</label>
          <select {...register("Degree", { required: "Please select or enter a program" })} onChange={handleOtherDegreeChange}>
            <option value="">--Select your program--</option>
            <option value="computerScience">Computer Science</option>
            <option value="infoTech">Information Technology</option>
            <option value="infoSystems">Information System</option>
            <option value="other">Other</option>
          </select>
          {showOtherDegree && <input type="text" value={otherDegreeValue} onChange={(e) => setOtherDegreeValue(e.target.value)} placeholder="Enter other degree..." />}
          {errors.Degree && <p className="error">{errors.Degree.message}</p>}
        </div>

        <div className="question">
          <label>Year of Study</label>
          <select {...register("yearOfStudy", { required: "Year of study is required" })}>
            <option value="">Select</option>
            <option value="firstYear">First Year</option>
            <option value="secondYear">Second Year</option>
            <option value="thirdYear">Third Year</option>
            <option value="fourthYear">Fourth Year</option>
            <option value="notStudent">Not a student</option>
          </select>
          {errors.yearOfStudy && <p className="error">{errors.yearOfStudy.message}</p>}
        </div>

        <div className="question">
          <label>USI Number *</label>
          <input type="text" {...register("usi", { required: "USI Number is required", pattern: { value: /^(\d{7}|NA)$/i, message: "Enter 7 digits or NA" } })} />
          {errors.usi && <p className="error">{errors.usi.message}</p>}
        </div>

        <div>
          {["netSecurity", "appSecurity", "crypt", "digForensics"].map(val => (
            <label key={val}>
              <input
                type="checkbox"
                value={val}
                onChange={handleCheckboxChange}
              />
              {{
                netSecurity: "Network Security",
                appSecurity: "Application Security",
                crypt: "Cryptography",
                digForensics: "Digital Forensics"
              }[val]}
            </label>
            ))}
        </div>


        <div className="question">
          <label>What is your current cybersecurity skill level ?</label><br/>
          {["Beginner","Intermediate","Professional","None"].map(val => (
            <span key={val}>
              <input type="radio" value={val} {...register("skillLevel", { required: "Skill level is required" })} />
              <label>{val}</label><br/>
            </span>
          ))}
          <label>
            <input type="radio" checked={showOther1} onChange={handleCheckboxChange1} />
            Other
          </label>
          {showOther1 && <input type="text" value={otherValue1} onChange={(e) => setOtherValue1(e.target.value)} placeholder="Enter other..." />}
          {errors.skillLevel && <p className="error">{errors.skillLevel.message}</p>}
        </div>

        <div className="question">
          <label>Create a Password *Passwords should contain a number and a symbol</label>
          <input type="password" {...register("password", { required: "Password is required" })} />
          {errors.password && <p className="error">{errors.password.message}</p>}
        </div>

        <div className="question">
          <label>Confirm Password</label>
          <input type="password" {...register("confirmPassword", { required: "Confirm your password", validate: value => value === password || "Passwords do not match" })} />
          {errors.confirmPassword && <p className="error">{errors.confirmPassword.message}</p>}
        </div>

        <button className="submitButton" type="submit">Submit</button>
      </form>
    </div>
  );
}
