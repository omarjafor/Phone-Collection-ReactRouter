import { useLoaderData } from "react-router-dom";

const PhonesDetails = () => {

    const phone = useLoaderData();
    const { brand_name, image, phone_name, price, rating } = phone || {};

    return (
        <div>
            <div className="relative mt-20 flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div className="relative mx-4 -mt-6 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
                    <img
                        src={image}
                        alt="img-blur-shadow"
                    />
                </div>
                <div className="p-6">
                    <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                        {phone_name}
                        <p>Price: {price} </p>
                    </h5>
                    <p className="block font-sans text-xl font-normal leading-relaxed text-inherit antialiased">
                        Rating: {rating} Brand: {brand_name}
                    </p>
                </div>
                <div className="p-6 pt-0">
                    <button
                        className="select-none rounded-lg bg-pink-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button"
                        data-ripple-light="true"
                    >
                        Add Favourite
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PhonesDetails;