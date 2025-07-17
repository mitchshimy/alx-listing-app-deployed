import axios from "axios";
import { useState, useEffect } from "react";

interface Review {
  id: string;
  reviewer: string;
  comment: string;
  rating: number;
  date: string;
}

interface ReviewSectionProps {
  propertyId: string;
}

export default function ReviewSection({ propertyId }: ReviewSectionProps) {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!propertyId) return;

    const fetchReviews = async () => {
      try {
        const response = await axios.get(`/api/properties/${propertyId}/reviews`);
        setReviews(response.data);
      } catch (err) {
        setError("Failed to load reviews.");
        console.error("Error fetching reviews:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [propertyId]);

  if (loading) return <p className="text-gray-500">Loading reviews...</p>;
  if (error) return <p className="text-red-500">{error}</p>;
  if (reviews.length === 0) return <p className="text-gray-400">No reviews yet.</p>;

  return (
    <div className="mt-6 space-y-6">
      <h3 className="text-xl font-semibold">Reviews</h3>
      {reviews.map((review) => (
        <div key={review.id} className="p-4 border rounded-md shadow-sm">
          <div className="flex justify-between items-center mb-2">
            <h4 className="font-bold">{review.reviewer}</h4>
            <span className="text-yellow-500">⭐ {review.rating.toFixed(1)}</span>
          </div>
          <p className="text-gray-700">{review.comment}</p>
          <p className="text-sm text-gray-400 mt-2">{new Date(review.date).toLocaleDateString()}</p>
        </div>
      ))}
    </div>
  );
}
