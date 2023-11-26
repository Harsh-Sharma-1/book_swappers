import React, { FormEvent, useState } from "react";
import TextInput from "../../textInput/textInput";
import Select from "react-select";
import { useCreateAddress } from "@/hooks/useAddress";
import { Button } from "../../button/button";

type Props = {
    onSubmitFunction: (value: any) => void;
};

const NewAddressForm = ({ onSubmitFunction }: Props) => {
    const {
        name,
        setName,
        state,
        setState,
        stateData,
        address,
        setAddress,
        city,
        cityData,
        handleSubmit,
        setCity,
        loading,
        pincode,
        setPincode,
    } = useCreateAddress();

    const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const data = await handleSubmit();
        onSubmitFunction(data ? data[0] : null);
    };

    return (
        <form
            className="w-full cursor-pointer flex flex-col gap-3"
            onSubmit={handleFormSubmit}
        >
            <TextInput
                onChange={(text) => setName(text)}
                placeholder="Enter address name (office, home)"
                value={name}
                required
            />
            <Select
                options={stateData}
                required
                value={state}
                onChange={(newValue) => {
                    setState(newValue);
                    setCity(null);
                }}
                placeholder={"Select your state"}
            />
            <Select
                options={cityData}
                required
                value={city}
                onChange={(newValue) => setCity(newValue)}
                placeholder={"Select your city"}
            />
            <TextInput
                onChange={(text) => setPincode(text)}
                placeholder="Enter your pin code"
                value={pincode}
                required
            />
            <TextInput
                onChange={(text) => setAddress(text)}
                placeholder="Enter your address"
                value={address}
                required
            />
            <Button text="Next" loading={loading} />
        </form>
    );
};

export default NewAddressForm;
