import './hero.css';
// import Lottie from 'lottie-react';
// import devAnimation from '../../animation/dev.json';
function Hero() {
    return (
        <section className='hero flex'>
            <div className='left-section'>
                <div className='parent-avatar flex'>
                    <img src='./me-modified.png' className='avatar'/>
                    <div className='icon-verified'></div>
                </div>

                <h1 className='title'>Back-End Developer</h1>
                <p className='subtitle'>I can solve problems easily.</p>

                <div className='icons flex'>
                    <a className='icon icon-linkedin' href="https://www.linkedin.com/in/mohamed-ahmed-b1b597255/" target="_blank"></a>
                    <a className='icon icon-github' href="https://github.com/Mohamed-Ahmed-Kamel" target="_blank"></a>
                    <a className='icon icon-facebook' href="https://m.facebook.com/profile.php/?id=100013186572597" target="_blank"></a>
                </div>
            </div>

            <div className='right-section animation'>
                <img className='hero-image' src="/images/api.png" alt="" />
                {/* <Lottie loop={false} style={{height: "25rem" }} animationData={devAnimation} /> */}
            </div>
        </section>
    )
}
export default Hero;