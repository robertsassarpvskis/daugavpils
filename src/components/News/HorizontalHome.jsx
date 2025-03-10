import IconRG from "/src/assets/icons/icon_right_dark_green.svg";

const HorizontalNews = ({ item }) => {
    return (
        <a
            href="#"
            className="group flex bg-white rounded-xl overflow-hidden mb-1 shadow-md group-hover:shadow-lg transition-all duration-100 ease-in-out hover:-translate-y-1 hover:border hover:border-greenLight"
        >
            {/* Image Section */}
            <div className="w-28 sm:w-36 flex-shrink-0">
                <img
                    src={item.image}
                    alt={item.title}
                    className="w-auto h-full object-cover aspect-square"
                />
            </div>

            {/* Content Section */}
            <div className="flex-1 p-2 md:p-4 flex flex-col justify-between">
                <div>
                    <div className="flex items-center justify-between mb-2">
                        <span
                            className={`text-xs font-medium px-2 py-1 rounded-full ${item.color} transition-all duration-500 ease-in-out group-hover:bg-greenLight group-hover:text-white`}
                        >
                            {item.category}
                        </span>
                        <span className="text-sm text-gray-500 transition-colors duration-500 ease-in-out group-hover:text-gray-700">
                            {item.date}
                        </span>
                    </div>
                    <h3 className="font-bold text-black/60 mb-2 transition-colors duration-500 ease-in-out group-hover:text-greenDark">
                        {item.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed line-clamp-2 group-hover:text-gray-800">
                        asljdlkasjldkjaslkdjslakdjlaskjdlaskjdlaskjd.
                    </p>
                </div>
                <div className="flex items-center text-greenLight text-sm font-medium group-hover:font-semibold transition-all duration-500 ease-in-out">
                    Read article
                    <img
                        src={IconRG}
                        alt="icon"
                        className="w-5 h-5 opacity-100 transform transition-transform duration-500 ease-in-out group-hover:rotate-180 group-hover:opacity-75"
                    />
                </div>
            </div>
        </a>
    );
};

export default HorizontalNews;