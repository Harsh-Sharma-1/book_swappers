import { FallingLines } from "react-loader-spinner";
import Catalog from "../../shared/catalog/catalog";
import Header from "./components/header/header";
import { useBooksData } from "./hooks";

type Props = {};

const Books = (props: Props) => {
    const { bookData, category } = useBooksData();
    return (
        <div className="px-6 mt-10 w-[90%] m-auto">
            <Header category={category} />
            {bookData.length <= 0 ? (
                <div className="w-full h-[50vh] flex items-center justify-center flex-col">
                    <FallingLines color="#ea580c" width="150" visible={true} />
                    <p className="font-medium">
                        Please wait till we load books
                    </p>
                </div>
            ) : (
                <Catalog books={bookData} />
            )}
        </div>
    );
};

export default Books;
