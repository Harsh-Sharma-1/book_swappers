import React from "react";

type Props = {
    category: string | null;
};

const Header = ({ category }: Props) => {
    return (
        <div>
            <h1 className="text-3xl font-bold mb-3">
                {category !== null &&
                    category[0].toUpperCase() + category.slice(1)}{" "}
                Books <span className="text-orange-500">Catalog</span>
            </h1>
            <p className="leading-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                imperdiet purus dolor, eget tempor lacus scelerisque sed.
                Interdum et malesuada fames ac ante ipsum primis in faucibus.
                Nunc quis cursus mi. Mauris sit amet varius eros. Maecenas
                ultricies lorem quam.
            </p>
        </div>
    );
};

export default Header;
