import React from "react";

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
                    onClick={() =>
                        window.open(
                            "https://shanmukh25.vercel.app/",
                            "_blank"
                        )
                    }
                >
                    Spark by Shanmukh.
                </h3>
            </footer>
        </>
    );
};

export default index;
