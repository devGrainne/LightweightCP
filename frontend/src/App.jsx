import { useState } from 'react'

function App()
{
    const [message, setMessage] = useState('')

    const callBackend = async () => {
        try {
            const response = await fetch('/api/hello')
            const text = await response.text()
            setMessage(text)
        } catch (error) {
            console.error('Error calling backend:', error)
            setMessage('Failed to call backend')
        }
    }

    return (
        <div style={styles.container}>
            <div style={styles.loginBox}>
                <h1>Clipboard Test</h1>

                <button onClick={callBackend} style={styles.button}>
                    Call backend test
                </button>
                <p>{message}</p>
            </div>
        </div>
    );
}

const styles =
{
    container:
    {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f0f0f0"
    },

    loginBox:
    {
        display: "flex",
        flexDirection: "column",
        padding: "30px",
        backgroundColor: "white",
        borderRadius: "10px",
        width: "300px",
        gap: "10px",
        boxShadow: "0px 0px 10px rgba(0,0,0,0.2)"
    },

    input:
    {
        padding: "10px",
        fontSize: "16px"
    },

    button:
    {
        padding: "10px",
        fontSize: "16px",
        cursor: "pointer"
    }
};

export default App;
