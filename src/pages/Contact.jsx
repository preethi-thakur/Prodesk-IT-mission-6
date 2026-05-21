export default function Contact() {
  return (
    <div className="max-w-md mx-auto mt-25">
      

      

  <form className="w-full max-w-lg bg-rose-100 backdrop-blur-lg border border-white/30 p-10 rounded-3xl shadow-2xl space-y-6">

    <h2 className="text-4xl font-bold text-center text-[#5B2E1F]">
      Contact ShopZone
    </h2>

    {/* Name Input */}
    <input
      type="text"
      placeholder="Enter your name"
      className="w-full px-5 py-3 rounded-xl bg-white/40 text-[#5B2E1F] placeholder-[#7a5a50] outline-none border border-white/30 focus:ring-2 focus:ring-[#FF8A65]"
    />

    {/* Email Input */}
    <input
      type="email"
      placeholder="Enter your email"
      className="w-full px-5 py-3 rounded-xl bg-white/40 text-[#5B2E1F] placeholder-[#7a5a50] outline-none border border-white/30 focus:ring-2 focus:ring-[#FF8A65]"
    />

    {/* Message */}
    <textarea
      rows="5"
      placeholder="Write your message..."
      className="w-full px-5 py-3 rounded-xl bg-white/40 text-[#5B2E1F] placeholder-[#7a5a50] outline-none border border-white/30 focus:ring-2 focus:ring-[#FF8A65]"
    ></textarea>

    {/* Button */}
    <button
      className="w-full bg-[#FF8A65] hover:bg-[#ff7043] text-white py-3 rounded-xl text-lg font-semibold transition duration-300 shadow-md"
    >
      Submit
    </button>

  </form>

</div>
      
  );
}