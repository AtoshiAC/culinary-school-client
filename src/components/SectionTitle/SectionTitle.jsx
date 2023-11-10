const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="mx-auto text-center md:w-4/12 my-8">
            <p className="text-gray-600 mb-2"> {subHeading} </p>
            <h3 className="text-3xl uppercase text-black py-4">{heading}</h3>
        </div>
    );
};

export default SectionTitle;