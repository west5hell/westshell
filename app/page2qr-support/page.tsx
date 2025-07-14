export const metadata = {
  title: "Page2QR Support",
  description: "Support and contact page for the Page2QR Safari extension.",
};

export default function Page2QRSupport() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-12 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">📦 Page2QR – Support</h1>

      <p className="mb-4">
        Thank you for using <span className="font-semibold">Page2QR</span> — a
        lightweight Safari extension that helps you generate and share QR codes
        from any webpage with ease.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">🔧 Need Help?</h2>
      <p className="mb-2">
        If you have questions, encounter issues, or want to share feedback, feel
        free to reach out:
      </p>
      <ul className="list-disc pl-5 mb-6">
        <li>
          Email:{" "}
          <a
            href="mailto:apps.endearing134@passinbox.com"
            className="text-blue-600 hover:underline"
          >
            apps.endearing134@passinbox.com
          </a>
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-2">
        📄 Frequently Asked Questions
      </h2>
      <ul className="list-disc pl-5 space-y-4 mb-6">
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

      <h2 className="text-xl font-semibold mt-8 mb-2">🔒 Privacy</h2>
      <p className="mb-4">
        Page2QR does not collect or transmit any user data. All QR code
        generation happens entirely on your device.
      </p>

      <p className="mt-10 text-gray-500">— Page2QR Support Team</p>
    </main>
  );
}
