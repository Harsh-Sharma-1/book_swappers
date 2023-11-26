import React, { FormEvent, useState } from "react";
import TextInput from "../textInput/textInput";
import Select from "react-select";
import { useAddress, useCreateAddress } from "@/hooks/useAddress";
import { TailSpin } from "react-loader-spinner";
import { FormLayout } from "../formLayout/formLayout";
import { Button } from "../button/button";
import NewAddressForm from "./forms/newAddressForm";
import { SelectAddressForm } from "./forms/selectAddressForm";

type Props = {
    onSubmitFunction: (value: any) => void;
};

const AddAddressForm = ({ onSubmitFunction }: Props) => {
    const { data, loading: dataLoading } = useAddress();
    const [selectedAddress, setSelectedAddress] = useState<any | null>(null);
    const [toggle, setToggle] = useState(false);

    const AddForm = () => (
        <div className="p-4">
            <NewAddressForm onSubmitFunction={onSubmitFunction} />
            {data?.length !== 0 && (
                <p
                    className="text-primary m-2 font-bold cursor-pointer"
                    onClick={() => setToggle(false)}
                >
                    Use Previous address
                </p>
            )}
        </div>
    );

    const SelectForm = () => {
        return (
            <div className="p-4">
                <SelectAddressForm
                    data={data}
                    selectedAddress={selectedAddress}
                    setSelectedAddress={setSelectedAddress}
                    onSubmitFunction={onSubmitFunction}
                />
                {data?.length !== 0 && (
                    <p
                        className="text-primary m-2 font-bold cursor-pointer"
                        onClick={() => setToggle(true)}
                    >
                        Add new address
                    </p>
                )}
            </div>
        );
    };

    if (dataLoading) {
        return (
            <div className="w-full min-h-[80px] flex justify-center items-center">
                <TailSpin
                    height="30"
                    width="30"
                    color="orange"
                    ariaLabel="tail-spin-loading"
                    radius="1"
                    visible={true}
                />
            </div>
        );
    }

    if (data?.length !== 0) {
        if (!toggle) {
            return <SelectForm />;
        } else {
            return <AddForm />;
        }
    } else {
        return <AddForm />;
    }
};

export default AddAddressForm;
