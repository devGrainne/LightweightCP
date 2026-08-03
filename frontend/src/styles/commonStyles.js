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

    heading: {
        textAlign: "center",
        marginBottom: "20px"
    },

    button: {
        padding: "12px",
        fontSize: "16px",
        cursor: "pointer"
    }
};

export default commonStyles;