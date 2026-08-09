
function Profile() {

    const imageUrl = './src/assets/Profile.png';
    const handleClick = (e) => e.target.style.display ="none";

    return (
        <img onClick={(e) => handleClick(e)} src={imageUrl} alt="myImage" className="img" />
    );
}
export default Profile