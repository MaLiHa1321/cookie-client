import useAxiosSecure from "../hooks/useAxiosSecure";



const AddProduct = () => {
  const axiosSecure = useAxiosSecure()
    const handleAdd = e =>{
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const price = form.price.value;
        const photo = form.photo.value;
        const product ={name,price,photo}

        const url ='/product'

        axiosSecure.post(url, product)
        .then(res => console.log(res.data))



        // console.log(product)
        // fetch('http://localhost:5000/product',{
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(product)
        // })
        // .then(res => res.json())
        // .then(data =>{
        //     console.log(data)
        // })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
        
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleAdd} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="name" placeholder="name" name='name' className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input type="text" placeholder="price" name="price" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo</span>
                </label>
                <input type="text" placeholder="PhotoUrl" name="photo" className="input input-bordered" required />
               
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Add product</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default AddProduct;