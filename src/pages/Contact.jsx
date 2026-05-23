      import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    alert("Message Submitted Successfully!");

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="max-w-md mx-auto mt-25">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-rose-100 backdrop-blur-lg border border-white/30 p-10 rounded-3xl shadow-2xl space-y-6"
      >
        <h2 className="text-4xl font-bold text-center text-[#5B2E1F]">
          Contact ShopZone
        </h2>

        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-5 py-3 rounded-xl bg-white/40 text-[#5B2E1F] placeholder-[#7a5a50] outline-none border border-white/30 focus:ring-2 focus:ring-[#FF8A65]"
        />

        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-5 py-3 rounded-xl bg-white/40 text-[#5B2E1F] placeholder-[#7a5a50] outline-none border border-white/30 focus:ring-2 focus:ring-[#FF8A65]"
        />

        <textarea
          rows="5"
          name="message"
          placeholder="Write your message..."
          value={formData.message}
          onChange={handleChange}
          className="w-full px-5 py-3 rounded-xl bg-white/40 text-[#5B2E1F] placeholder-[#7a5a50] outline-none border border-white/30 focus:ring-2 focus:ring-[#FF8A65]"
        ></textarea>

        <button
          type="submit"
          className="w-full bg-[#FF8A65] hover:bg-[#ff7043] text-white py-3 rounded-xl text-lg font-semibold transition duration-300 shadow-md"
        >
          Submit
        </button>
      </form>
    </div>
  
);
}
