import './Explosion.css';

export const Explosion = () => {
    return (
        <svg className="firework" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <circle className="particle particle-1" cx="100" cy="100" r="4" fill="#ff6b6b" />
            <circle className="particle particle-2" cx="100" cy="100" r="4" fill="#4ecdc4" />
            <circle className="particle particle-3" cx="100" cy="100" r="4" fill="#ffe66d" />
            <circle className="particle particle-4" cx="100" cy="100" r="4" fill="#a8dadc" />
            <circle className="particle particle-5" cx="100" cy="100" r="4" fill="#f1c0e8" />
            <circle className="particle particle-6" cx="100" cy="100" r="4" fill="#ffafcc" />
            <circle className="particle particle-7" cx="100" cy="100" r="4" fill="#bde0fe" />
            <circle className="particle particle-8" cx="100" cy="100" r="4" fill="#ffc6ff" />
        </svg>
    )
}