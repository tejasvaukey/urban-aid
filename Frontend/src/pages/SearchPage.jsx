import ProviderCard from "../components/ProviderCard";
import providers from "../utils/providers";

export default function SearchPage({ query }) {
  const filteredItems = providers.filter((provider) =>
    provider.businessName.toLowerCase().includes(query)
  );
  return (
    <div className="bg-gradient-to-br from-blue-950 to-black min-h-screen p-24 pt-32 ">
      <div className=" min-h-96">
        <div className="flex mb-5 justify-between mx-4 items-center">
          <h4 className="text-white text-xl italic ">
            {query === "" ? (
              "Nearest service providers"
            ) : (
              <span className="font-thin">
                ({filteredItems.length}) results for: {query}
              </span>
            )}
          </h4>
          <select
            name=""
            id=""
            className="px-10 py-1 rounded-md bg-transparent border text-white text-"
          >
            <option value="" className="text-black">
              Name
            </option>
            <option value="" className="text-black">
              Rating
            </option>
            <option value="" className="text-black">
              Nearest
            </option>
          </select>
        </div>
        <div className="grid grid-cols-4 relative">
          {providers
            .filter((provider) =>
              provider.businessName.toLowerCase().includes(query)
            )
            .map((provider) => (
              <ProviderCard
                key={provider.id}
                businessName={provider.businessName}
                distance={provider.distance}
                rating={provider.rating}
                pfp={provider.pfp}
                serviceCategories={provider.serviceCategories}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
