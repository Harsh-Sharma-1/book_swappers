import Select from "react-select";
import { Button } from "../../button/button";

export const SelectAddressForm = ({
    selectedAddress,
    setSelectedAddress,
    data,
    onSubmitFunction,
}: {
    selectedAddress: any;
    setSelectedAddress: (value: any) => void;
    data: any;
    onSubmitFunction: (value: any) => void;
}) => (
    <div>
        <form
            onSubmit={(e) => {
                e.preventDefault();
                onSubmitFunction(selectedAddress.value);
            }}
        >
            <Select
                options={data?.map((item: any) => {
                    return {
                        label: item.name,
                        value: item,
                    };
                })}
                required
                value={selectedAddress}
                onChange={(newValue) => {
                    setSelectedAddress(newValue);
                }}
                placeholder={"Select your address"}
            />
            <Button text="Select this Address" />
        </form>
    </div>
);
