import styles from "../styles/commonStyles";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { registerUser } from "../services/authApi";

function RegistrationPage() {
    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    const [error, setError] = useState("");

    const registration = async () => {

        setError("");

        if (username.trim() === "") {
            setError("Please enter a username.");
            return;
        }

        if (password.length < 6) {
            setError("Password must be at least 6 characters.");
            return;
        }

        if (password !== repeatPassword) {
            setError("Passwords do not match.");
            return;
        }

        // Validation successful.
        // Next we'll send a request to the backend.

        try {

            const result = await registerUser(username, password);

            console.log(result);

            navigate("/login", {
                state: {
                    message: "Registration successful. Please log in."
                }
    });

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
                        Register
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
                    />

                    <input
                        style={styles.input}
                        type="password"
                        placeholder="Repeat Password"
                        value={repeatPassword}
                        onChange={(e) => setRepeatPassword(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                registration();
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
                        onClick={registration}
                    >
                        Register
                    </button>

                </div>

            </div>

        </div>
    );
}

export default RegistrationPage;
