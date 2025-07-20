import { PropertyProps } from "@/interfaces";
import Image from "next/image";

type Props = {
  property: PropertyProps;
};

export default function PropertyDetail({ property }: Props) {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <div className="relative w-full h-80 rounded-lg overflow-hidden">
        <Image
          src={property.image}
          alt={property.name}
          fill
          className="object-cover"
          priority
        />
      </div>

      <h1 className="text-3xl font-bold mt-4">{property.name}</h1>
      <p className="text-gray-600">
        {property.address.city}, {property.address.country}
      </p>
      <p className="mt-2">Rating: {property.rating}</p>
      <p className="mt-2 font-semibold text-lg">${property.price} per night</p>

      {/* Optional Extras */}
      {/* <p className="mt-2">Discount: {property.discount}</p> */}
      {/* <p className="mt-2">Offers: {property.offers.bed}, {property.offers.shower}, {property.offers.occupants}</p> */}
    </div>
  );
}
