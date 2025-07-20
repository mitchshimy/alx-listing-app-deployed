type Props = {
  property: PropertyProps;
};

export default function PropertyDetail({ property }: Props) {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <img src={property.image} alt={property.name} className="w-full h-80 object-cover rounded-lg" />
      <h1 className="text-3xl font-bold mt-4">{property.name}</h1>
      <p className="text-gray-600">
        {property.address.city}, {property.address.country}
      </p>
      <p className="mt-2">Rating: {property.rating}</p>
      <p className="mt-2 font-semibold text-lg">${property.price} per night</p>
      {/* Additional fields like offers, categories, discount, etc. */}
    </div>
  );
}
