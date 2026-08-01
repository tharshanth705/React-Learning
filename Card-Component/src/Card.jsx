import ProfilePic from './assets/profile.jpg';

function Card(){

    return(

        <div className="card" >
            <img className="card-image" src={ProfilePic} alt="Spider-Man" />
            <h2 className="card-ttile">Tharshanth</h2>
            <p className="card-text">I am a undergratudate Student and i study React</p>
        </div>

    );


}
export default Card