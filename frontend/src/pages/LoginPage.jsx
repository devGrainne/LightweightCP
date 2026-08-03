import styles from "../styles/commonStyles";
import { useNavigate } from "react-router-dom";

function LoginPage() {

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
                        Login
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

                    <button style={styles.button}>
                        Login
                    </button>
                </div>

            </div>
            
        </div>
    );
}

export default LoginPage;