import { FormLayout } from "@/components/shared/formLayout/formLayout";
import SmallBookCard from "@/components/shared/smallBookCard/smallBookCard";
import TextInput from "@/components/shared/textInput/textInput";
import { BookCardType } from "@/components/types/book";
import { useSearch } from "@/hooks/useSearch";

type Props = {
    changeForm: (value: number) => void;
    book: BookCardType | null;
    setBook: (book: BookCardType | null) => void;
};

export const AddFormSearchBook = ({ changeForm, book, setBook }: Props) => {
    const { inputValue, changeInputValue, error, suggestionList } = useSearch();
    return (
        <FormLayout
            heading={{
                normal: "Add book",
                colored: "To Swap",
            }}
        >
            <form
                className="flex flex-col gap-3"
                onSubmit={(e) => {
                    e.preventDefault();
                    changeForm(2);
                }}
                action=""
            >
                <TextInput
                    onChange={(value) =>
                        changeInputValue({
                            target: { value },
                        } as React.ChangeEvent<HTMLInputElement>)
                    }
                    placeholder="first find the book.."
                    value={inputValue}
                />
                {!book ? (
                    <div className="w-full max-h-[300px] overflow-y-scroll shadow-inner no-scrollbar">
                        {suggestionList.map((item, i) => (
                            <div
                                className="p-2 hover:bg-gray-100 cursor-pointer border-b text-sm"
                                onClick={() => {
                                    setBook(item);
                                }}
                                key={i}
                            >
                                {item.title}
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="w-full">
                        <SmallBookCard book={book} />
                        <button className="w-full bg-[#FF6C36;] py-4 rounded text-white mt-3">
                            Add
                        </button>
                        <p
                            className="text-center text-primary font-medium cursor-pointer mt-2"
                            onClick={() => setBook(null)}
                        >
                            Find other book
                        </p>
                    </div>
                )}
            </form>
        </FormLayout>
    );
};
