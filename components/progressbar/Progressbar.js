
const Progressbar = ({ progress }) => {
    return (
        <div style={{ width: "300px", margin: "20px auto" }}>
            {progress > 0 && (
                <div style={{ marginTop: "10px" }}>
                    <div
                        style={{
                            height: "20px",
                            width: "100%",
                            background: "#eee",
                            borderRadius: "10px",
                            overflow: "hidden",
                        }}
                    >
                        <div
                            style={{
                                height: "100%",
                                width: `${progress}%`,
                                background: "#4caf50",
                                transition: "width 0.3s",
                            }}
                        />
                    </div>
                    <p>{progress}%</p>
                </div>
            )}
        </div>
    )
};

export default Progressbar;