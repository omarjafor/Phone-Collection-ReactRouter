import { useLoaderData } from "react-router-dom";

const PhonesDetails = () => {

    const phone = useLoaderData();
    const { brand_name, image, phone_name, price, rating } = phone || {};

    return (
        <div className="flex justify-center mt-4 items-center h-[90vh]">
            <div className="relative flex w-96 flex-col rounded-xl bg-emerald-400 bg-clip-border text-gray-700 shadow-md">
                <div className="relative mx-4 mt-2 h-96 overflow-hidden rounded-xl text-gray-700">
                    <img
                        src={image}
                        className="h-full w-full object-cover"
                    />
                </div>
                <div className="p-6">
                    <div className="mb-2 flex items-center justify-between">
                        <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                            {phone_name}
                        </p>
                        <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                            ${price}
                        </p>
                    </div>
                    <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
                        <> Brand: {brand_name} </> , <> Rating: {rating} </>
                    </p>
                </div>
                <div className="p-6 pt-0">
                    <button
                        className="block w-full select-none rounded-lg bg-purple-600 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button"
                    >
                        Add to Favorite
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PhonesDetails;