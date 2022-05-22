import React from 'react'
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import HomeIcon from "@mui/icons-material/Home";
import { FaGitAlt } from 'react-icons/fa';
import { FaPhoneSquare } from 'react-icons/fa';


export const OffcanvasData = [
    {
        title: 'Home',
        path: '/',
        icon: <HomeIcon />,
        cName: 'nav-text'
    },
    {
        title: 'Repositories',
        path: '/repositories',
        icon: <FaGitAlt />,
        cName: 'nav-text'
    },
    {
        title: 'Contact',
        path: '/contact',
        icon: <FaPhoneSquare />,
        cName: 'nav-text'
    }
]