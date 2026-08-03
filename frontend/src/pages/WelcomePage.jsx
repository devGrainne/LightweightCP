import { useNavigate } from "react-router-dom";
import styles from "../styles/commonStyles";

function WelcomePage() {

    const navigate = useNavigate();

    return (
        <div style={styles.container}>
            <div style={styles.card}>
                <h1 style={styles.heading}>
                    Device Synchronisation Service
                </h1>

                <button 
                    style={styles.button}
                    onClick={() => navigate("/login")}
                >
                    Login
                </button>

                <button 
                    style={styles.button}
                    onClick={() => navigate("/register")}
                >
                    Register
                </button>
            </div>
        </div>
    );
}

export default WelcomePage;