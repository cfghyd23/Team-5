import React, { useState } from 'react';

const AddCause = () => {
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [zoomLink, setZoomLink] = useState('');
    const [threshold, setThreshold] = useState(0);

    const handleSubmit = (event) => {
        event.preventDefault();

        // Perform form submission logic here
        // You can submit the form data to the backend or handle it as required

        // Reset form fields
        setId('');
        setName('');
        setZoomLink('');
        setThreshold(0);
    };

    return (
        <form className = 'container' onSubmit={handleSubmit}>
            <div>
                <label htmlFor="id">ID:</label>
                <input type="text" id="id" value={id} onChange={(event) => setId(event.target.value)} />
            </div>
            <br></br>
            <div>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" value={name} onChange={(event) => setName(event.target.value)} />
                </div>
                <br></br>
            <div>
                <label htmlFor="zoomLink">Zoom Link:</label>
                <input type="text" id="zoomLink" value={zoomLink} onChange={(event) => setZoomLink(event.target.value)} />
            </div>
            <br></br>
            <div>
                <label htmlFor="threshold">Threshold:</label>
                <input type="number" id="threshold" value={threshold} onChange={(event) => setThreshold(Number(event.target.value))} />
            </div>
            <br></br>
            <button className='btn btn-primary mx-3' type="submit">Add</button>
            <button className='btn btn-primary mx-3' type="submit">Button</button>
        </form>
    );
};

export default AddCause;