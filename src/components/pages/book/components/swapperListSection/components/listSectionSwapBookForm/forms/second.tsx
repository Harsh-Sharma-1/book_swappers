import AddAddressForm from "@/components/shared/addAddressForm/addAddressForm";
import { FormLayout } from "@/components/shared/formLayout/formLayout";
import { FormEvent } from "react";

export const SecondForm = ({
    handleOnSubmit,
}: {
    handleOnSubmit: (address: any) => void;
}) => {
    return (
        <FormLayout
            heading={{
                normal: "Add your address to",
                colored: "Swap the Book",
            }}
            subHeading="Please add a address for swap.."
        >
            <AddAddressForm onSubmitFunction={handleOnSubmit} />
        </FormLayout>
    );
};
