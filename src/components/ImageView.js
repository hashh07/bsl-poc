import React from 'react'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import InvertColorsIcon from '@mui/icons-material/InvertColors';
import ListIcon from '@mui/icons-material/List';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import FavoriteIcon from '@mui/icons-material/Favorite';

const ImageView = () => {
    const [toggle, setToggle] = React.useState(true)
    const { id } = useParams();
    const data = [1, 2, 3, 4, 5, 6]
    const img = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        width: '100%',
        height: '100%',
        transform: 'translate(-50%, -50%)'
    }
    const sidebar = {
        position: 'fixed',
        top: 0,
        right: 0,
        height: '100%',
        width: '75px',
        backgroundColor: '#656767',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around'
    }
    const icon = {
        color: 'white',
        fontSize: '24px',
        cursor: 'pointer'
    }
    const iconDiv = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    }
    const text = {
        color: 'white'
    }
    const expertDiv = {
        border: '1px white red',
        borderRadius: '10px',
        position: 'absolute',
        backgroundColor: 'white',
        margin: '10px',
        fontSize: '15px',
        boxShadow: '2px 2px 8px #000000'
    }
    const favIcon = {
        position: 'absolute',
        float: 'right',
        top: '1%',
        left: '90%',
        border: '1px solid white',
        borderRadius: '20px',
        background: 'white',
        cursor: 'pointer',
        boxShadow: '2px 2px 8px #000000'
    }

    return (
        <div>
            <div>
                <div style={{}}>
                    {
                        data.includes(Number(id)) ?
                            <img src={require(`../images/img${id}.jpeg`)} style={img} />
                            : "Image doesn't exist"
                    }
                </div>
                <div style={{}}>
                    <div style={expertDiv}>
                        <label style={{
                            color: 'black', zIndex: '1000',
                            margin: '10px'
                        }}>FIND AN EXPERT</label>
                    </div>
                    <div style={favIcon}>
                        <FavoriteIcon onClick={() => setToggle(prev => !prev)}
                            style={{ margin: '2px 5px 2px 5px', fill: toggle ? 'red' : 'white' }} />
                    </div>
                </div>
            </div>
            <div style={sidebar}>
                <div style={iconDiv}><MenuIcon style={icon} /><label style={text}>Menu</label></div>
                <div style={iconDiv}><ProductionQuantityLimitsIcon style={icon} /><label style={text}>Products</label></div>
                <div style={iconDiv}><InvertColorsIcon style={icon} /><label style={text}>Colors</label></div>
                <div style={iconDiv}><ListIcon style={icon} /><label style={text}>Options</label></div>
                <div style={iconDiv}><InfoOutlinedIcon style={icon} /><label style={text}>Info</label></div>
                <div >
                    <Link to={'/'} style={{...iconDiv, textDecoration: 'none'}}> 
                        <RestartAltIcon style={icon} /><label style={text}>Start Over</label>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ImageView