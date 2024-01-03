import React from 'react'
import { useParams } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import InvertColorsIcon from '@mui/icons-material/InvertColors';
import ListIcon from '@mui/icons-material/List';

const ImageView = () => {
    const { id } = useParams();
    const data = [1, 2, 3, 4]
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
        width: '60px',
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

    return (
        <div>
            <div>
                {
                    data.includes(Number(id)) ?
                        <img src={require(`../images/img${id}.jpeg`)} style={img} />
                        : "Image doesn't exist"
                }
            </div>
            <div style={sidebar}>
                <MenuIcon style={icon} />
                <ProductionQuantityLimitsIcon style={icon} />
                <InvertColorsIcon style={icon} />
                <ListIcon style={icon} />
            </div>
        </div>
    )
}

export default ImageView