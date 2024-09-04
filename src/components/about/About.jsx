import './about.css';

function About() {
    return (
        <div className='about' id='about'>
            <div>
                <img src="/me.jpg" alt="" />
            </div>
            <div>
                <h1>Hi I'm <span>Mohamed Ahmed</span></h1>
                <p>As a backend web developer, I build robust and scalable server-side solutions. With my expertise in Node.js, I have experience in developing and maintaining APIs, managing databases, and ensuring the smooth operation of web applications. I am passionate about using my skills to create efficient and user-friendly experiences for clients and end-users alike.</p>
            </div>
        </div>
    )
}
export default About;