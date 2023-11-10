

const MenuItem = ({item}) => {
    const {name, image, price, recipe} = item;
    return (
      <>
        <div className="card card-side bg-gray-300 text-slate-800 shadow-xl">
          <figure>
            <img
             className="h-48 sm:h-64 w-full object-cover"
              src={image}
              alt="Movie"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <p>{recipe}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-secondary">{price}</button>
            </div>
          </div>
        </div>
      </>
    );
};

export default MenuItem;