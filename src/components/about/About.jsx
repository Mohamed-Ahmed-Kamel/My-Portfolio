import './about.css';

function About() {
    return (
        <div className='about' id='about'>
            <div>
                <img src="/me.jpg" alt="" />
            </div>
            <div>
                <h1>Hi I'm <span>Mohamed Ahmed Kamel</span></h1>
                <p>I turn ideas into dynamic, user-centric applications by bridging the gap between elegant interfaces and robust backend systems. With expertise spanning the entire stack — from crafting pixel-perfect ReactJS UIs to engineering high-performance APIs with Node.js, Express, and NestJS — I build solutions that are as efficient as they are impactful.</p>
            </div>
        </div>
    )
}
export default About;