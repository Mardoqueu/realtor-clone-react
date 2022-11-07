/* got the information like a listing and ID, and show that inside an empty div */
export default function ListingItem({ listing, id }) {
    return <div>{listing.name}</div>;
  }