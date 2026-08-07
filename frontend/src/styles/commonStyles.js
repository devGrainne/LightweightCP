const commonStyles = {
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f0f0f0"
    },

    card: {
        display: "flex",
        flexDirection: "column",
        gap: "15px",
        width: "500px",
        padding: "40px",
        borderRadius: "10px",
        backgroundColor: "white",
        boxShadow: "0 0 10px rgba(0,0,0,0.2)"
    },

    content: {
        display: "flex",
        flexDirection: "column",
        width: "500px",
        gap: "20px"
    },

    heading: {
        textAlign: "center",
        marginBottom: "20px"
    },

    button: {
        padding: "12px",
        fontSize: "16px",
        cursor: "pointer"
    },

    backButton: {
        alignSelf: "flex-start",
        padding: "8px 16px",
        fontSize: "14px",
        cursor: "pointer"
    },

    input: {
        padding: "10px",
        fontSize: "16px"
    },

    error: {
        color: "red",
        textAlign: "center",
        margin: 0
    }
};

export default commonStyles;