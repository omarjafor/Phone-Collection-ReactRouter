import { useLoaderData } from "react-router-dom";

const PhonesDetails = () => {

    const phone = useLoaderData();
    console.log(phone);

    return (
        <div>
            <h1>{phone.length}</h1>
        </div>
    );
};

export default PhonesDetails;