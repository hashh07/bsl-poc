import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import { Modal, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import img1 from '../images/img1.jpeg'
import img2 from '../images/img2.jpeg'
import img3 from '../images/img3.jpeg'
import img4 from '../images/img4.jpeg'

const CustomModal = ({ toggle, setToggle }) => {
    const data = [
        img1,
        img2,
        img3,
        img4,
    ]
    const modal = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        width: '80%',
        height: '80%',
        transform: 'translate(-50%, -50%)',
        background: 'green',
        zIndex: '1000'
    }
    const icon = {
        cursor: 'pointer'
    }
    const container2 = {
        display: 'flex',
        justifyContent: 'space-between',
        background: 'white'
    }
    const imgDiv = {
        display: 'flex',
        justifyContent: 'center'
    }
    const imgDiv2 = {
        alignSelf: 'center'
    }
    const img = {
        height: '320px',
        width: '320px',
        margin: '10px 10px 0 10px',
        cursor: 'pointer'
    }
    const box = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 700,
        border: '2px solid #000',
        boxShadow: 24,
        overflow: 'scroll',
        height: '100%',
        display: 'block',
        p: 4,
    }
    return (
        <Modal open={toggle} onClose={setToggle}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={box}>
                <div style={container2}>
                    <CloseIcon onClick={setToggle} style={icon} />
                    <label>Sample Rooms</label>
                </div>

                <div style={imgDiv}>
                    <div style={imgDiv2}>
                        {
                            data.map((item, index) => (
                                <Link to={`/image/${index + 1}`} key={index}>
                                    <img src={item} style={img} />
                                </Link>
                            ))
                        }
                    </div>
                </div>
            </Box>
        </Modal>
    )
}

export default CustomModal
