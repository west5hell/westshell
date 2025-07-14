export const metadata = {
  title: "Privacy Policy – Page2QR",
  description: "Read the privacy policy for the Page2QR Safari extension app.",
};

export default function PrivacyPolicy() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-12 text-gray-800 dark:text-gray-200">
      <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
        Privacy Policy – Page2QR
      </h1>

      <p className="mb-4">
        <strong>Page2QR</strong> does not collect, store, or transmit any
        personal data or usage information.
      </p>

      <p className="mb-4">
        All QR code generation happens locally on your device. The extension
        does not connect to any external servers or track your browsing
        activity.
      </p>

      <p className="mb-4">
        No cookies, analytics, or third-party services are used in the app.
      </p>

      <p className="mb-4">
        This privacy-focused approach ensures that your data stays entirely
        within your control.
      </p>

      <p className="mt-8 text-sm text-gray-500 dark:text-gray-400">
        Last updated: July 14, 2025
      </p>
    </main>
  );
}
