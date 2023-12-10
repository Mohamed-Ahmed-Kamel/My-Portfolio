import './footer.css';

function Footer() {
    return (
        <footer className='flex'>
            <ul className='flex'>
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <p className="footer-title">Copyrights @ Mohamed Ahmed Kamel</p>
        </footer>
    )
}
export default Footer;