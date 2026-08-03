import styles from "../styles/commonStyles";

function WelcomePage() {
    return (
        <div style={styles.container}>
            <div style={styles.card}>
                <h1 style={styles.heading}>
                    Device Synchronisation Service
                </h1>

                <button style={styles.button}>
                    Login
                </button>

                <button style={styles.button}>
                    Register
                </button>
            </div>
        </div>
    );
}

export default WelcomePage;