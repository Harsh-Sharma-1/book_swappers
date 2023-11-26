import { useAppContext } from "@/context/appContext";
import { addAddress } from "@/services/address/addAddress";
import { getUserAddresses } from "@/services/address/getUserAddresses";
import { City, State } from "country-state-city";
import { FormEvent, useEffect, useState } from "react";

export const useAddress = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState<any[] | null>([]);
    const { user } = useAppContext();
    useEffect(() => {
        if (!user) return;
        (async () => {
            setLoading(true);
            const { data } = await getUserAddresses(user.id);
            console.log(data);
            setLoading(false);
            setData(data);
        })();
    }, []);

    return {
        loading,
        data,
    };
};

export const useCreateAddress = () => {
    const { user } = useAppContext();
    const [state, setState] = useState<any | null>(null);
    const [city, setCity] = useState<any | null>(null);
    const [name, setName] = useState("");
    const [pincode, setPincode] = useState("");
    const [address, setAddress] = useState("");
    const [loading, setLoading] = useState(false);

    const stateData = State.getStatesOfCountry("IN").map((item) => ({
        label: item.name,
        value: { name: item.name, isoCode: item.isoCode },
    }));

    const cityData = state
        ? City.getCitiesOfState("IN", state.value.isoCode).map((item) => ({
              label: item.name,
              value: { name: item.name },
          }))
        : [];

    const handleSubmit = async () => {
        if (!user) return;
        setLoading(true);
        const { data } = await addAddress({
            name,
            user_id: user.id,
            address,
            city: city.value.name,
            pincode,
            state: state.value.name,
        });
        setLoading(false);
        return data;
    };

    return {
        name,
        setName,
        city,
        setCity,
        cityData,
        state,
        setState,
        stateData,
        pincode,
        setPincode,
        address,
        setAddress,
        handleSubmit,
        loading,
    };
};
