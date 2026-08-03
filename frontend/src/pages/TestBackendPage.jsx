import { useState } from "react";
import styles from "../styles/commonStyles";

function TestBackendPage() {
    const [message, setMessage] = useState("");

    const callBackend = async () => {
        try {
            const response = await fetch("/api/hello");
            const text = await response.text();
            setMessage(text);
        } catch (error) {
            console.error("Error calling backend:", error);
            setMessage("Failed to call backend");
        }
    };

    return (
        <div style={styles.container}>
            <div style={styles.card}>
                <h1>Backend Test</h1>

                <button onClick={callBackend} style={styles.button}>
                    Call Backend Test
                </button>

                <p>{message}</p>
            </div>
        </div>
    );
}

export default TestBackendPage;