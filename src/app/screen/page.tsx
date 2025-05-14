"use client";

export default function ScreenRecordingNotAllowed() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-md text-center">
        <h1 className="text-2xl font-bold mb-4">Screen Recording Detected</h1>
        <p className="mb-6">
          For security reasons, screen recording is not permitted while using
          our application. Please disable any screen recording software and
          refresh the page to continue.
        </p>
        <button
          onClick={() => (window.location.href = "/")}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Return to Application
        </button>
      </div>
    </div>
  );
}
