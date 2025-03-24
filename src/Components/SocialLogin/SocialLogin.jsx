import React, { useContext } from "react";
import { GoogleLogin, googleLogout } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../AuthContext/UserContext";

const SocialLogin = () => {
    const navigate = useNavigate();
    const { login } = useContext(UserContext);

    const handleGoogleLoginSuccess = async (credentialResponse) => {
        if (!credentialResponse || !credentialResponse.credential) {
            console.error("Invalid credential response");
            return;
        }

        try {
            const decoded = jwtDecode(credentialResponse.credential);
            
            if (!decoded.sub || !decoded.name || !decoded.email || !decoded.picture) {
                throw new Error("Invalid user data from Google");
            }

            const userData = {
                googleId: decoded.sub,
                name: decoded.name,
                email: decoded.email,
                image: decoded.picture,
                userRoll: "CANDIDATE"
            };

            const response = await fetch("http://localhost:5000/google", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(userData),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || "Failed to post user data to the server.");
            }

            const data = await response.json();
            console.log("User data posted successfully:", data);

            login(data.user);
            navigate("/"); 
        } catch (error) {
            console.error("Error during Google login:", error.message);
        }
    };

    function handleLogout(){
        googleLogout();
    }

    return (
        <div>
            <GoogleLogin
                onSuccess={handleGoogleLoginSuccess}
                onError={() => console.log("Login Failed")}
                auto_select={true}
            />
        </div>
    );
};

export default SocialLogin;