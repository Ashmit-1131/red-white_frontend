import React from 'react';
import './Modal.css';

const Modal = ({closeModal,handleSubmit,handleChange,updateDetail}) => {

    return (
        <>
            <div className="modal">
                <div className="modal-content">
                    <span className="close" onClick={closeModal}>&times;</span>
                    <h2>Create Post</h2>
                    <p>Add a title and a message</p>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="name">Title:</label>
                        <input type="text" id="name" name="title" onChange={(e)=>handleChange(e)}/>
                        <label htmlFor="email">Message:</label>
                        <input type="text" id="email" name="msg" onChange={(e)=>handleChange(e)}/>
                        <button type="submit" onSubmit={handleSubmit}>Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Modal