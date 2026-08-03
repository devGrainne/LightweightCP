import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/authApi";
import styles from "../styles/commonStyles";

function LoginPage() {

    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const login = async () => {

        setError("");

        if (username.trim() === "") {
            setError("Please enter a username.");
            return;
        }

        if (password.length === 0) {
            setError("Please enter a password.");
            return;
        }

        try {

            const result = await loginUser(username, password);

            console.log(result);

            // TODO Temporary until DashboardPage exists
            navigate("/dashboard");

        }
        catch (error) {

            setError(error.message);

        }
    };


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
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />

                    <input
                        style={styles.input}
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                login();
                            }
                        }}
                    />

                    {error && (
                        <p style={styles.error}>
                            {error}
                        </p>
                    )}

                    <button
                        style={styles.button}
                        onClick={login}
                    >
                        Login
                    </button>

                </div>

            </div>

        </div>
    );
}

export default LoginPage;