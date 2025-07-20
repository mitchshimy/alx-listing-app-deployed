import Image from "next/image";

type BookingProps = {
  bookingDetails: {
    propertyName: string;
    price: number;
    bookingFee: number;
    totalNights: number;
    startDate: string;
  };
};

const OrderSummary: React.FC<BookingProps> = ({ bookingDetails }) => {
  const total = bookingDetails.price + bookingDetails.bookingFee;

  return (
    <div className="bg-white p-6 shadow-md rounded-lg">
      <h2 className="text-xl font-semibold">Review Order Details</h2>

      <div className="flex items-center mt-4">
        <Image
          src="https://example.com/property.jpg"
          alt="Property"
          width={128}
          height={128}
          className="object-cover rounded-md"
        />
        <div className="ml-4">
          <h3 className="text-lg font-semibold">{bookingDetails.propertyName}</h3>
          <p className="text-sm text-gray-500">4.76 (345 reviews)</p>
          <p className="text-sm text-gray-500">
            {bookingDetails.startDate} • {bookingDetails.totalNights} Nights
          </p>
        </div>
      </div>

      <div className="mt-6 space-y-2">
        <div className="flex justify-between">
          <p>Booking Fee</p>
          <p>${bookingDetails.bookingFee}</p>
        </div>
        <div className="flex justify-between">
          <p>Subtotal</p>
          <p>${bookingDetails.price}</p>
        </div>
        <div className="flex justify-between font-semibold">
          <p>Grand Total</p>
          <p>${total}</p>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
