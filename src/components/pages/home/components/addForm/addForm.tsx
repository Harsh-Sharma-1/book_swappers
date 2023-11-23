import { AddImages } from "./forms/addImages";
import { AddFormSearchBook } from "./forms/searchBook";
import { useAddForm } from "./hook";

type Props = {};

const AddForm = (props: Props) => {
    const { book, showForm, loading, setBook, submitForm, changeForm } =
        useAddForm();
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
