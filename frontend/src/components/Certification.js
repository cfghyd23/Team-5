import './css/Certificate.css';
import React, { useState, useRef } from 'react';
import html2canvas from 'html2canvas';
import { saveAs } from 'file-saver';

function Certificate() {
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [date, setDate] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const certificateRef = useRef(null);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleCourseChange = (e) => {
    setCourse(e.target.value);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setName("");
    setCourse("");
    setDate("");
    setSubmitted(false);
  };

  const handleDownloadCertificate = () => {
    html2canvas(certificateRef.current).then((canvas) => {
      canvas.toBlob((blob) => {
        saveAs(blob, `${name}_certificate.png`);
      });
    });
  };

  return (
    <div className="container w-50 h-50">
      <h1>Certificate Generator</h1>
      <button onClick={handleDownloadCertificate}type="submit" className="btn btn-primary">Download Certificate</button>

      {submitted ? (
        
        <div className="certificate h-100" ref={certificateRef}>
          <h2>Certificate of Completion</h2>
          <p>This is to certify that</p>
          <h3>{name}</h3>
          <p>has successfully completed the course</p>
          <h3>{course}</h3>
          
          
          {/* <button className="btn btn-primary" onClick={handleReset}>
            Generate Another Certificate
          </button> */}       
        </div>

      ) : (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={name}
              onChange={handleNameChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="course">Cause:</label>
            <input
              type="text"
              className="form-control"
              id="course"
              value={course}
              onChange={handleCourseChange}
              required
            />
          </div>
          {/* <div className="form-group">
            <label htmlFor="date">Date:</label>
            <input
              type="text"
              className="form-control"
              id="date"
              value={date}
              onChange={handleDateChange}
              required
            />
          </div> */}
          <button type="submit" className="btn btn-primary">
            Generate Certificate
          </button>
        </form>
      )}
    </div>
  );
}

export default Certificate;
