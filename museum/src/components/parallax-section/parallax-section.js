import { useEffect } from 'react';
import { parallaxEffect } from './parallax-effect';
import './parallax-section.css';
const Parallax = () => {
    useEffect(() => {
        parallaxEffect();
    }, []);
    return (
        <div className="parallax-container">
            {/* <img className="parallax-image" src="https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/museum/assets/img/parallax.jpg" alt="" /> */}
        </div>
    )
};
export default Parallax;