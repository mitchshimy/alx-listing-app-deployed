import axios from "axios";
import { useState } from "react";

export default function BookingForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    cardNumber: "",
    expirationDate: "",
    cvv: "",
    billingAddress: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const isFormValid = () => {
    return Object.values(formData).every((value) => value.trim() !== "");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isFormValid()) {
      setError("Please fill in all fields.");
      return;
    }

    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      await axios.post("/api/bookings", formData);
      setSuccess(true);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        cardNumber: "",
        expirationDate: "",
        cvv: "",
        billingAddress: "",
      });
    } catch (error) {
      setError("Failed to submit booking.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-4">Confirm Booking</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {[
          ["firstName", "First Name"],
          ["lastName", "Last Name"],
          ["email", "Email"],
          ["phoneNumber", "Phone Number"],
          ["cardNumber", "Card Number"],
          ["expirationDate", "Expiration Date (MM/YY)"],
          ["cvv", "CVV"],
          ["billingAddress", "Billing Address"],
        ].map(([name, label]) => (
          <div key={name}>
            <label className="block font-medium mb-1">{label}</label>
            <input
              type="text"
              name={name}
              value={formData[name as keyof typeof formData]}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
        ))}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          {loading ? "Processing..." : "Confirm & Pay"}
        </button>

        {error && <p className="text-red-500 mt-2">{error}</p>}
        {success && (
          <p className="text-green-600 mt-2">Booking confirmed successfully!</p>
        )}
      </form>
    </div>
  );
}
