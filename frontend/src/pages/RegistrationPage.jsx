import styles from "../styles/commonStyles";
import { useNavigate } from "react-router-dom";

function RegistrationPage() {

    const navigate = useNavigate();
    
    return (
        <div style={styles.container}>

            <div style={styles.content}>

                <button
                    style={styles.backButton}
                    onClick={() => navigate(-1)}
                >
                    ← Back
                </button>

                <div style={styles.card}>
                    <h1 style={styles.heading}>
                        Register
                    </h1>

                    <input
                        style={styles.input}
                        placeholder="Username"
                    />

                    <input
                        style={styles.input}
                        type="password"
                        placeholder="Password"
                    />

                    <input
                        style={styles.input}
                        type="password"
                        placeholder="Confirm password"
                    />

                    <button style={styles.button}>
                        Create Account
                    </button>
                </div>

            </div>

        </div>
    );
}

export default RegistrationPage;