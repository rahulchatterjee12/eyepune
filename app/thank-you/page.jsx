export default function ThankYouPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full text-center">
        <h1 className="text-3xl font-bold text-green-600 mb-4">
          🎉 Thank You!
        </h1>
        <p className="text-gray-700 text-lg mb-6">
          Your call has been successfully booked. We’ll contact you at the
          scheduled time.
        </p>
        <a
          href="/"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition"
        >
          Go Back Home
        </a>
      </div>
    </div>
  );
}
