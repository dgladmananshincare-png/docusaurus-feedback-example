import {useState} from 'react';

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export default function DocFeedbackWidget() {
    const [submitted, setSubmitted] = useState(false);

    const handleFeedback = (value: 'yes' | 'no') => {
        window.gtag?.("event", "feedback", {
            page_path: window.location.pathname,
            value,
        });
        setSubmitted(true);
    };

    return (
        <div
            style={{
                marginTop: "2rem",
                padding: "1rem 0",
                borderTop: "1px solid #ccc",
            }}
        >
            {!submitted ? (
                <>
                    <p style={{ marginBottom: "0.5rem", fontWeight: "bold" }}>
                        Was this page helpful?
                    </p>
                    <button
                        onClick={() => handleFeedback('yes')}
                        style={{ marginRight: "10px" }}
                    >
                        👍🏼 Yes
                    </button>
                    <button
                        onClick={() => handleFeedback('no')}
                        style={{ marginRight: "10px" }}
                    >
                        👎🏼 No
                    </button>
                </>
            ) : (
                <p style={{ fontWeight: "bold", color: "#4caf50" }}>
                    Thank you for your feedback!
                </p>
            )}
        </div>
    );
}