import axios from 'axios';
import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import './sidebar.css';
import SideImg from '../../assets/IMG_20210823_164653-01.jpeg'

export default function Sidebar () {
  const [cats, setCats] = useState ([]);

  useEffect (() => {
    const getCats = async () => {
      const res = await axios.get ('/categories');
      setCats (res.data);
    };
    getCats ();
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
        src={SideImg}
          alt="" className='Side'
        />
        <p>
          As someone who has lived in Chennai all my life, I have a deep appreciation for the city's rich history and vibrant culture. From its mouth-watering cuisine to its beautiful temples and landmarks, Chennai truly has something for everyone
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cats.map (c => (
            <Link to={`/?cat=${c.name}`} className="link">
              <li className="sidebarListItem">{c.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square" />
          <i className="sidebarIcon fab fa-twitter-square" />
          <i className="sidebarIcon fab fa-pinterest-square" />
          <i className="sidebarIcon fab fa-instagram-square" />
        </div>
      </div>
    </div>
  );
}
