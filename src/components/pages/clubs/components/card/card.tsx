import Link from "next/link";

export const ClubsCard = ({ club }: { club: any }) => {
    return (
        <Link href={`/clubs/${club.id}`}>
            <div className="w-full rounded overflow-hidden shadow-cardLight bg-white cursor-pointer">
                <div className="w-full relative">
                    <img
                        className="w-full h-[100px] object-cover object-center"
                        src={club.coverImage}
                        alt=""
                    />
                    <div className="absolute z-0 inset-0 bg-primary-light/20"></div>
                </div>
                <div className="p-5">
                    <h1 className="font-bold text-xl">{club.name}</h1>
                    <p className="text-gray-400">{club.description}</p>
                </div>
            </div>
        </Link>
    );
};
