import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useForm } from 'react-hook-form';
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const img_hosting_token = import.meta.env.VITE_Image_Upload_token;

const AddItem = () => {
    const [axiosSecure] = useAxiosSecure();
    const { register, handleSubmit, reset } = useForm();
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`

    const onSubmit = data => {
        
        const formData = new FormData();
        formData.append('image', data.image[0])

        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(imgResponse => {
            if(imgResponse.success){
                const imgURL = imgResponse.data.display_url;
                const {name, price, category, recipe} = data;
                const newItem = {name, price: parseFloat(price), category, recipe, image:imgURL}
                console.log(newItem)
                axiosSecure.post('/menu', newItem)
                .then(data => {
                    if(data.data.insertedId){
                        reset();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Item added successfully',
                            showConfirmButton: false,
                            timer: 1500
                          })
                    }
                })
            }
        })

    };
    
    
    return (
      <div className="w-full px-10">
        <SectionTitle
          subHeading="Test & Learn"
          heading="Add Classes"
        ></SectionTitle>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full mb-4">
            <label className="label">
              <span className="label-text text-black">Class Name*</span>
            </label>
            <input
              type="text"
              placeholder="Class Name"
              {...register("name", { required: true, maxLength: 120 })}
              className="input input-bordered w-full text-white"
            />
          </div>
          <div className="flex my-4">
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text text-black">Class Category*</span>
              </label>
              <select
                defaultValue="Pick One"
                {...register("category", { required: true })}
                className="select select-bordered text-white"
              >
                <option disabled>Select one</option>
                <option>Learn Chineese</option>
                <option>Learn Thai Specials</option>
                <option>Make Green vegetable</option>
                <option>Learn Junk Food</option>
                <option>Making Jucie</option>
              </select>
            </div>
            <div className="form-control w-full ml-4">
              <label className="label">
                <span className="label-text text-black">Class Price*</span>
              </label>
              <input
                type="number"
                {...register("price", { required: true })}
                placeholder="Type here"
                className="input input-bordered w-full text-white" 
              />
            </div>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-black">Class Details</span>
            </label>
            <textarea
              {...register("recipe", { required: true })}
              className="textarea textarea-bordered h-24 text-white"
              placeholder="Bio"
            ></textarea>
          </div>
          <div className="form-control w-full my-4">
            <label className="label">
              <span className="label-text text-black">Class Image*</span>
            </label>
            <input
              type="file"
              {...register("image", { required: true })}
              className="file-input file-input-bordered w-full text-white"
            />
          </div>
          <input
            className="btn btn-sm mt-4 w-full text-white bg-gray-500 hover:bg-gray-700"
            type="submit"
            value="Add Class"
          />
        </form>
      </div>
    );
};

export default AddItem;