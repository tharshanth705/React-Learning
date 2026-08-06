import PropTypes, { bool } from 'prop-types';

function UserGreeting({
    isLoggedIn = false,
    username = "Guest"
}) {
    const welcomeMessage = <h2 className="welcome-message">
        Welcome {username}</h2>


    const loginPrompt = <h2 className="login-prompt">
        Please log in to continue </h2>

    // if (isLoggedIn) {
    //     return <h2>Welcome {username}</h2>
    // }
    // return <h2>Please log in to continue </h2>

    return (isLoggedIn ? welcomeMessage : loginPrompt);

}
UserGreeting.prototype = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string,
}
export default UserGreeting