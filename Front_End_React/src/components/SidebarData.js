import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Session',
    path: '/',
    icon: <AiIcons.AiFillAppstore />,
    cName: 'nav-text'
  },
  {
    title: 'Time Slot',
    path: '/timeslot',
    icon: <AiIcons.AiOutlineFieldTime />,
    cName: 'nav-text'
  },
  {
    title: 'Speaker',
    path: '/speaker',
    icon: <FaIcons.FaStreetView />,
    cName: 'nav-text'
  },
  {
    title: 'Room',
    path: '/room',
    icon: <FaIcons.FaTable />,
    cName: 'nav-text'
  },
 
];
