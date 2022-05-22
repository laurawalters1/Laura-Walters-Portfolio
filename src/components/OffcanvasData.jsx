import React from 'react'
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import HomeIcon from "@mui/icons-material/Home";
import { FaGitAlt } from 'react-icons/fa';
import { FaPhoneSquare } from 'react-icons/fa';


export const OffcanvasData = [
    {
        title: 'Home',
        path: '/laura-walters-portfolio/',
        icon: <HomeIcon />,
        cName: 'nav-text'
    },
    {
        title: 'Repositories',
        path: '/laura-walters-portfolio/repositories',
        icon: <FaGitAlt />,
        cName: 'nav-text'
    },
    {
        title: 'Contact',
        path: '/laura-walters-portfolio/contact',
        icon: <FaPhoneSquare />,
        cName: 'nav-text'
    }
]