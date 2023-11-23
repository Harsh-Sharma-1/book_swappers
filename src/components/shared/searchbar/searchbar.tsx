import { useSearch } from "@/hooks/useSearch";
import React, { useState } from "react";
import SuggestionList from "./suggestionList/suggestionList";

type Props = {};

const SearchBar = (props: Props) => {
    const { inputValue, changeInputValue, error, suggestionList } = useSearch();
    const [showSuggestion, setShowSuggestion] = useState(false);
    const [cursorInside, setCursorInside] = useState(false);
    return (
        <div
            onFocus={() => {
                setShowSuggestion(true);
            }}
            onBlur={() => {
                if (cursorInside) return;
                setShowSuggestion(false);
            }}
            onMouseEnter={() => setCursorInside(true)}
            onMouseLeave={() => setCursorInside(false)}
            className="bg-[#F5F5F5] flex-1 rounded relative"
        >
            <input
                className="w-full rounded px-3 py-2 bg-transparent focus:outline-none"
                type="text"
                placeholder="Search book here..."
                value={inputValue}
                onChange={changeInputValue}
            />
            {showSuggestion && <SuggestionList books={suggestionList} />}
        </div>
    );
};

export default SearchBar;
