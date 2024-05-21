import React from 'react'
import 
{BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill}
 from 'react-icons/bs'
 import './Sidebar.css'

function Sidebar({openSidebarToggle, OpenSidebar}) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                <BsCart3  className='icon_header'/> SocialDigitalWings
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <a href="/Dashboard">
                    <BsGrid1X2Fill className='icon'/> Dashboard
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="/Holiday">
                    <BsFillArchiveFill className='icon'/> Holidays
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="/Notice">
                    <BsFillGrid3X3GapFill className='icon'/> Notice
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="/Attendance">
                    <BsPeopleFill className='icon'/> Attendance
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="/Leave">
                    <BsListCheck className='icon'/> Leaves
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="/expenses">
                    <BsMenuButtonWideFill className='icon'/> expenses
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="/team">
                    <BsPeopleFill className='icon'/> myTeam
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsMenuButtonWideFill className='icon'/> Payroll
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="/Setting">
                    <BsFillGearFill className='icon'/> Setting
                </a>
            </li>
        </ul>
    </aside>
  )
}

export default Sidebar