import {MyFooter} from "./MyFooter"
export const Card = () => (
    <div className="card">
        <img
            src="https://avatars.githubusercontent.com/u/182595493?v=4"
            alt="Avatar"
        />

        <h1>Reza Nikmanesh</h1>
        <h3>Software Engineer</h3>
        <h6>Shinigami.ir</h6>

        <div className="card-butt">
            <button className="btn-email" type="button">Email</button>
            <button type="button" className="btn-linkedin">Linkedin</button>
        </div>
        
        <div className="info-card">
        <h2>About</h2>
        <p>
            Software engineer interested in backend development,
            web technologies, and learning new things.
        </p>
        </div>

        <div className="info-card">

        <h2>Interests</h2>
        <p>
            Programming, Linux, networking, cybersecurity, and open-source
            technologies.
        </p>
        </div>

        <MyFooter />
    </div>
    
);
