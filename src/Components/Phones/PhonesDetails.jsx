import { useParams } from "react-router-dom";

const PhonesDetails = () => {

    const {id} = useParams();
    console.log(id);

    return (
        <div>
            <h1>You are seeing the phone detals of {id}</h1>
        </div>
    );
};

export default PhonesDetails;