
const MyForm = (props) => {
  const field = props.choose || '';

  return (
    <form className="text-center m-5 text-black">

        <input
          className="w-full p-2.5 my-1.5 mx-0"
          type="text"
          name="name"
          placeholder="Name"
          autoComplete="on"
        />
        <input
          className="w-full p-2.5 my-1.5 mx-0"

          type="email"
          name="email"
          autoComplete="on"
          placeholder="Email"
        />
        <input
          className="w-full p-2.5 my-1.5 mx-0"

          type="text"
          name="Field"
          placeholder="Field (Click on the field you are interested in)"
          value={field}
          autoComplete="on"
          readOnly
        />
      <button className="w-full p-2.5 my-1.5 mx-0 bg-gray-800 border-0 cursor-pointer"  type="submit">Submit</button>
    </form>
  );
};

export default MyForm;