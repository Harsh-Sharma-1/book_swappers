import { BookCardType } from "@/components/types/book";
import { bookDataConvertor, getBookBySearch } from "@/services/books/listBooks";
import { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";

export const useSearch = () => {
    const [inputValue, setInputValue] = useState("");
    const [suggestionList, setSuggestionList] = useState<BookCardType[]>([]);
    const [debouncedInputValue] = useDebounce(inputValue, 1000);
    const [error, setError] = useState("");

    const searchBarService = async () => {
        if (inputValue.trim() === "") {
            setSuggestionList([]);
            setError("Please enter title to search");
            return;
        }
        const { data: results } = await getBookBySearch(
            inputValue.trim().toLowerCase()
        );
        if (results.length === 0) {
            setError(`No results found for ${inputValue}`);
        }
        const mainData = results.map((item) => bookDataConvertor(item));
        setSuggestionList(mainData);
    };

    useEffect(() => {
        searchBarService();
    }, [debouncedInputValue]);

    function changeInputValue(event: React.ChangeEvent<HTMLInputElement>) {
        setInputValue(event.target.value);
    }

    return {
        inputValue,
        suggestionList,
        changeInputValue,
        error,
    };
};
