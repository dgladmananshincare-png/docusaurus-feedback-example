import React, {useState} from 'react';

export default function DocFeedbackWidget() {
  const [feedback, setFeedback] = useState<'up' | 'down' | null>(null);

  return (
    <div
        style={{
            marginTop: "2rem",
            padding: "1rem 0",
            borderTop: "1px solid #ccc",
        }}
    >
        <p style={{ marginBottom: "0.5rem", fontWeight: "bold" }}>
            Was this page helpful?
        </p>
        <button
            onClick={() => {
                window.gtag?.("event", "feedback", {
                    page_path: window.location.pathname,
                    value: "yes",
                });
            }}
            style={{ marginRight: "10px" }}
        >
            👍🏼 Yes
        </button>
        <button
            onClick={() => {
                window.gtag?.("event", "feedback", {
                    page_path: window.location.pathname,
                    value: "yes",
                });
            }}
            style={{ marginRight: "10px" }}
        >
            👎🏼 No
        </button>
    </div>
  );
}