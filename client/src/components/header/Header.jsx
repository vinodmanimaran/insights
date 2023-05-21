import './header.css';
import headerImg from '../../assets/headerimg.jpg';

export default function Header() {
  return (
    <div className="header">
      <div className="headerOverlay"></div>
      <div className="headerTitles">
        <span className="headerTitleSm">Unpacking the Male Experience</span>
        <span className="headerTitleLg">Insights</span>
      </div>
      <div className="headerImg" style={{ backgroundImage: `url(${headerImg})` }}>
      </div>
    </div>
  );
}
