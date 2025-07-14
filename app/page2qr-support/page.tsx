export const metadata = {
  title: "Page2QR Support",
  description: "Support and contact page for the Page2QR Safari extension.",
};

export default function Page2QRSupport() {
  return (
    <main style={styles.container}>
      <h1 style={styles.title}>📦 Page2QR – Support</h1>

      <p style={styles.text}>
        Thank you for using <strong>Page2QR</strong> — a lightweight Safari
        extension that helps you generate and share QR codes from any webpage
        with ease.
      </p>

      <h2 style={styles.heading}>🔧 Need Help?</h2>
      <p style={styles.text}>
        If you have questions, encounter issues, or want to share feedback, feel
        free to reach out:
      </p>
      <ul style={styles.list}>
        <li>
          Email:{" "}
          <a href="mailto:apps.endearing134@passinbox.com">
            apps.endearing134@passinbox.com
          </a>
        </li>
      </ul>

      <h2 style={styles.heading}>📄 Frequently Asked Questions</h2>
      <ul style={styles.list}>
        <li>
          <strong>Q:</strong> How do I use Page2QR?
          <br />
          <strong>A:</strong> While browsing in Safari, open the share sheet and
          tap "Page2QR" to generate a QR code for the current page.
        </li>
        <li>
          <strong>Q:</strong> Can I use this on iPhone, iPad, and Mac?
          <br />
          <strong>A:</strong> Yes! Page2QR works across all platforms that
          support Safari extensions.
        </li>
      </ul>

      <h2 style={styles.heading}>🔒 Privacy</h2>
      <p style={styles.text}>
        Page2QR does not collect or transmit any user data. All QR code
        generation happens entirely on your device.
      </p>

      <p style={{ ...styles.text, marginTop: "2rem" }}>
        — Page2QR Support Team
      </p>
    </main>
  );
}

const styles = {
  container: {
    padding: "2rem",
    maxWidth: "700px",
    margin: "0 auto",
    fontFamily: '"Segoe UI", system-ui, sans-serif',
    lineHeight: 1.6,
    color: "#333",
  },
  title: {
    fontSize: "2rem",
    fontWeight: "bold",
    marginBottom: "1.5rem",
  },
  heading: {
    fontSize: "1.25rem",
    marginTop: "2rem",
    marginBottom: "0.5rem",
    fontWeight: 600,
  },
  text: {
    fontSize: "1rem",
    marginBottom: "1rem",
  },
  list: {
    paddingLeft: "1.2rem",
    marginBottom: "1rem",
  },
};
