import { AddImages } from "./forms/addImages";
import { AddFormSearchBook } from "./forms/searchBook";
import { useAddForm } from "./hook";

type Props = {
    closeForm: () => void;
};

const AddForm = ({ closeForm }: Props) => {
    const { book, showForm, loading, setBook, submitForm, changeForm } =
        useAddForm(closeForm);
    return (
        <>
            {showForm === 1 ? (
                <AddFormSearchBook
                    book={book}
                    setBook={setBook}
                    changeForm={changeForm}
                />
            ) : (
                <AddImages submitForm={submitForm} loading={loading} />
            )}
        </>
    );
};

export default AddForm;
