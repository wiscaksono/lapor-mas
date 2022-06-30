import { useState } from "react";

export default function Register() {
  const [field, setField] = useState({});

  function setValue(e) {
    const target = e.target;
    const name = target.name;
    const value = target.value;

    setField({
      ...field,
      [name]: value,
    });
  }

  async function doRegister(e) {
    e.preventDefault();

    const req = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/auth/local/register`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(field),
      }
    );

    const res = await req.json();

    console.log(field);
  }

  return (
    <div className="min-h-screen bg-background bg-cover bg-no-repeat flex justify-center items-center m-auto flex-col ">
      <h1 className="text-2xl text-primary font-semibold text-center mb-10">
        Halo Selamat Datang <br /> Di{" "}
        <span className="text-secondary">SCADA</span>
      </h1>
      <div className="flex items-center justify-center">
        <form className="w-96" onSubmit={doRegister}>
          <div className="flex flex-col mb-5">
            <label
              htmlFor="username"
              className="font-semibold text-sm text-[#627D98] pl-2 mb-3"
            >
              Username
            </label>
            <input
              type="text"
              id="name"
              name="username"
              className="border  rounded-lg placeholder:text-[#627D98] py-3 pl-6 text-xs font-medium"
              placeholder="Name"
              onChange={setValue}
              required
            />
          </div>
          <div className="flex flex-col mb-5">
            <label
              htmlFor="email"
              className="font-semibold text-sm text-[#627D98] pl-2 mb-3"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="border  rounded-lg placeholder:text-[#627D98] py-3 pl-6 text-xs font-medium"
              placeholder="Email Address"
              onChange={setValue}
              required
            />
          </div>
          {/* <div className="flex flex-col mb-5">
            <label
              htmlFor="phone"
              className="font-semibold text-sm text-[#627D98] pl-2 mb-3"
            >
              Nomor Handphone
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              className="border  rounded-lg placeholder:text-[#627D98] py-3 pl-6 text-xs font-medium"
              placeholder="Nomor Handphone"
              onChange={setValue}
              required
            />
          </div> */}

          <div className="flex flex-col mb-5">
            <label
              htmlFor="password"
              className="font-semibold text-sm text-[#627D98] pl-2 mb-3"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="border  rounded-lg placeholder:text-[#627D98] py-3 pl-6 text-xs font-medium"
              placeholder="Password"
              onChange={setValue}
              required
            />
          </div>
          <button
            className="py-3 text-center w-full bg-secondary hover:bg-secondary/90 transition-colors duration-150 rounded-lg text-sm text-[#FFFFFF] font-semibold mb-5 shadow-md"
            type="submit"
          >
            Masuk
          </button>
          <p className="text-center text-[#627D98] text-xs font-medium">
            Sudah punya akun?{" "}
            <a href="../login" className="text-secondary  hover:underline">
              Masuk
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
