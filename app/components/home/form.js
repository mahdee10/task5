// components/MyForm.js


const MyForm = () => {

  return (
    <form className="text-center m-5">

        <input
          className="w-full p-2.5 my-1.5 mx-0 text-black"
          type="text"
          name="name"
          placeholder="Name"
        />
        <input
          className="w-full p-2.5 my-1.5 mx-0 text-black"

          type="email"
          name="email"
          placeholder="Email"
        />
      <button className="w-full p-2.5 my-1.5 mx-0 bg-gray-800 border-0 cursor-pointer"  type="submit">Submit</button>
    </form>
  );
};

export default MyForm;