import "bootstrap/dist/css/bootstrap.min.css";

import { toast, ToastContainer } from "react-toastify";
import { handleError, handleSuccess } from "../util";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const UserData = () => {
  const navigate = useNavigate();

  const [userdata, setuserdata] = useState({
    fullname: "",
    email: "",
    phoneNumber: "",
    gender: "",
    age: "",
    address: "",
    collegeName: "",
    currentEducation: "",
    stream: "",
    graduationYear: "",
    internships: "",
    certifications: "",
    technicalSkills: "",
    softSkills: "",
    languages: "",
    portfolio: "",
    linkedInProfile: "",
    resume: "",
  });

  const handleUserInput = (e) => {
    const { name, value, type } = e.target;
    console.log("data from userdata", name, value);
    const alluserdata = { ...userdata };
    alluserdata[name] = value;
    setuserdata(alluserdata);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("formsumbit ",userdata);
    const {
      fullname,
      email,
      phoneNumber,
      gender,
      age,
      address,
      collegeName,
      currentEducation,
      stream,
      graduationYear,
      internships,
      certifications,
      technicalSkills,
      softSkills,
      languages,
      portfolio,
      linkedInProfile,
      resume,
    } = userdata;
    if (!fullname || !email || !phoneNumber ||!gender ||!age ||!internships||!certifications||!technicalSkills) {
      return handleError("required all fileds");
    }
    try {
      const url = "https://authentication-project-lake.vercel.app/user/userdata";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userdata),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
    }
      const result = await response.json();

      const { success, message, error } = result;
      if (success) {
        handleSuccess("data saved");
        setTimeout(() => {
          navigate("/");
        }, 1000);
      }else if(error && error.details && error.details.length>0){
        const detail= error.details[0].message;
        handleError(detail);
      }else{
        handleError(message);
      }
    } catch (error) {
      handleError(error);
    }
  };

  return (
    <>
      <div>
        <h1 style={{ textAlign: "center", marginTop: "20px", color: "#333" }}>
          Complete the Steps...
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="container" style={{ width: "45%" }}>
            <h4>Personal infomations.</h4>
            <div className="form-group">
              <label htmlFor="name" className="form-label">
                Fullname <span className="required-star">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                id="fullname"
                value={userdata.fullname}
                name="fullname"
                placeholder="Enter your name"
                onChange={handleUserInput}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="name" className="form-label">
                email <span className="required-star">*</span>
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={userdata.email}
                name="email"
                placeholder="Enter your email"
                onChange={handleUserInput}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="name" className="form-label">
                phoneNumber <span className="required-star">*</span>
              </label>
              <input
                type="number"
                className="form-control"
                id="number"
                value={userdata.phoneNumber}
                name="phoneNumber"
                placeholder="Enter your number"
                onChange={handleUserInput}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="gender" className="form-label">
                Gender <span className="required-star">*</span>
              </label>
              <select
                className="form-control"
                id="gender"
                value={userdata.gender}
                name="gender"
                onChange={handleUserInput} // Apply the handleUserInput function
                required
              >
                <option value="">Select Gender</option>
                {/* Optional default option */}
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="name" className="form-label">
                age <span className="required-star">*</span>
              </label>
              <input
                type="number"
                className="form-control"
                id="age"
                value={userdata.age}
                name="age"
                placeholder="Enter your age"
                //   value={}
                onChange={handleUserInput}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="name" className="form-label">
                address (optional)
              </label>
              <input
                type="text"
                className="form-control"
                id="address"
                value={userdata.address}
                name="address"
                placeholder="Enter your address"
                onChange={handleUserInput}
              />
            </div>

            <h4>Collage infomations.</h4>

            <div className="form-group">
              <label htmlFor="name" className="form-label">
                collage/university <span className="required-star">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                id="clgname"
                placeholder="Enter your university name"
                value={userdata.collegeName}
                name="collegeName"
                onChange={handleUserInput}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="name" className="form-label">
                currentEducation <span className="required-star">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                id="currentEducation"
                value={userdata.currentEducation}
                name="currentEducation"
                placeholder="Ex:BE,B-Tech,BCA ect."
                //   value={}
                onChange={handleUserInput}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="name" className="form-label">
                stream/branch <span className="required-star">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                id="branch"
                value={userdata.stream}
                name="stream"
                placeholder="Ex:CSE,ECE,MECH ect"
                //   value={}
                onChange={handleUserInput}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="graduationYear" className="form-label">
                Graduation Year <span className="required-star">*</span>
              </label>
              <input
                type="number"
                className="form-control"
                id="graduationYear"
                value={userdata.graduationYear}
                name="graduationYear"
                placeholder="Enter your graduation year"
                onChange={handleUserInput}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="internships" className="form-label">
                Internships
              </label>
              <input
                type="text"
                className="form-control"
                id="internships"
                // value={userdata.internships ? userdata.internships.join(', ') : ''}
                value={userdata.internships}
                name="internships"
                placeholder="Enter internships (comma-separated)"
                onChange={handleUserInput}
              />
            </div>

            <div className="form-group">
              <label htmlFor="internships" className="form-label">
                certifications
              </label>
              <input
                type="text"
                className="form-control"
                id="certifications"
                // value={userdata.certifications ? userdata.certifications.join(', ') : ''}
                value={userdata.certifications}
                name="certifications"
                placeholder="Enter internships (comma-separated)"
                onChange={handleUserInput}
              />
            </div>

            <div className="form-group">
              <label htmlFor="technicalSkills" className="form-label">
                Technical Skills <span className="required-star">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                id="technicalSkills"
                // value={userdata.technicalSkills ? userdata.technicalSkills.join(', ') : ''}
                value={userdata.technicalSkills}
                name="technicalSkills"
                placeholder="Enter technical skills (comma-separated)"
                onChange={handleUserInput}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="softSkills" className="form-label">
                Soft Skills
              </label>
              <input
                type="text"
                className="form-control"
                // value={userdata.softSkills ? userdata.softSkills.join(', ') : ''}
                value={userdata.softSkills}
                name="softSkills"
                id="softSkills"
                placeholder="Enter soft skills (comma-separated)"
                onChange={handleUserInput}
              />
            </div>

            <div className="form-group">
              <label htmlFor="languages" className="form-label">
                Languages
              </label>
              <input
                type="text"
                className="form-control"
                id="languages"
                value={userdata.languages}
                name="languages"
                placeholder="Enter languages (comma-separated)"
                onChange={handleUserInput}
              />
            </div>

            <div className="form-group">
              <label htmlFor="portfolio" className="form-label">
                Portfolio
              </label>
              <input
                type="url"
                className="form-control"
                id="portfolio"
                value={userdata.portfolio}
                name="portfolio"
                placeholder="Enter your portfolio URL"
                onChange={handleUserInput}
              />
            </div>

            <div className="form-group">
              <label htmlFor="linkedInProfile" className="form-label">
                LinkedIn Profile <span className="required-star">*</span>
              </label>
              <input
                type="url"
                className="form-control"
                id="linkedInProfile"
                value={userdata.linkedInProfile}
                name="linkedInProfile"
                onChange={handleUserInput}
                placeholder="Enter your LinkedIn profile URL"
                // required
              />
            </div>


            <div className="form-group">
              <label htmlFor="linkedInProfile" className="form-label">
                Resume <span className="required-star">*</span>
              </label>
              <input
                type="file"
                className="form-control"
                id="resume"
                value={userdata.resume}
                name="resume"
                onChange={handleUserInput}
                placeholder="Upload your resume"
              />
            </div>


            <button type="submit" className="btn btn-primary btn-block">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default UserData;
