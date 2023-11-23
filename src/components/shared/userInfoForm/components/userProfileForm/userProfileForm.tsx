type Props = {
    changeForm: () => void;
    setImageSrc: (image: any) => void;
    imageSrc: any;
    bio: string;
    setBio: (value: string) => void;
};

const UserProfileForm = ({
    changeForm,
    setImageSrc,
    imageSrc,
    bio,
    setBio,
}: Props) => {
    return (
        <form
            className="flex flex-col gap-3"
            onSubmit={(e) => {
                e.preventDefault();
                changeForm();
            }}
            action=""
        >
            <div className="flex gap-3">
                <input
                    type="file"
                    id="profilePic"
                    name="Profile Picture"
                    onChange={(e) => {
                        if (e.target.files) {
                            setImageSrc(e.target.files[0]);
                        }
                    }}
                    className="hidden"
                    required
                />
                <label
                    htmlFor="profilePic"
                    className="w-[100px] h-[100px] bg-gray-100 rounded flex flex-col justify-center items-center"
                >
                    {imageSrc ? (
                        <img
                            className="w-[100px] h-[100px] object-cover object-center"
                            src={imageSrc && URL.createObjectURL(imageSrc)}
                            alt=""
                        />
                    ) : (
                        "+"
                    )}
                </label>
                <div className="mt-2">
                    <h1 className="font-medium mb-2">
                        Upload a profile picture.
                    </h1>
                    <label
                        htmlFor="profilePic"
                        className="cursor-pointer border border-orange-500 text-orange-500 p-1"
                    >
                        Browse
                    </label>
                </div>
            </div>
            <div>
                <textarea
                    className="w-full rounded outline outline-1 outline-[#E6E6E6]
                        px-4 py-5 focus:outline-orange-400 resize-none"
                    name=""
                    id=""
                    placeholder="Write a short bio..."
                    rows={5}
                    maxLength={200}
                    onChange={(e) => setBio(e.target.value)}
                    required
                ></textarea>
            </div>
            <button className="bg-primary-light py-4 rounded text-white">
                Next
            </button>
        </form>
    );
};

export default UserProfileForm;
