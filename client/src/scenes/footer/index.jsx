const index = () => {
    return (
        <>
            <footer
                style={{
                    textAlign: "center",
                    marginTop: "15px",
                    cursor: "pointer",
                }}
            >
                <h3
                    style={{ textDecoration: "none" }}
                    onMouseOver={(e) =>
                        (e.currentTarget.style.textDecoration = "underline")
                    }
                    onMouseOut={(e) =>
                        (e.currentTarget.style.textDecoration = "none")
                    }
                    onClick={() =>
                        window.open("https://shanmukh25.vercel.app/", "_blank")
                    }
                >
                    Spark. Developed by Shanmukh.
                </h3>
            </footer>
        </>
    );
};

export default index;
