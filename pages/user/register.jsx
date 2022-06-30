export default function Register() {
  return (
    <div className="min-h-screen lg:bg-background bg-transparent bg-cover bg-no-repeat flex justify-center items-center m-auto flex-col ">
      <h1 className="text-2xl text-primary font-semibold text-center mb-10">
        Halo Selamat Datang <br /> Di{" "}
        <span className="text-secondary">SCADA</span>
      </h1>
      <div className="flex items-center justify-center">
        <form action="GET" className="w-96">
          <div className="flex flex-col mb-5">
            <label
              htmlFor="name"
              className="font-semibold text-sm text-[#627D98] pl-2 mb-3"
            >
              Name
            </label>
            <input
              type="name"
              id="name"
              name="name"
              className="border  rounded-lg placeholder:text-[#627D98] py-3 pl-6 text-xs font-medium"
              placeholder="Name"
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
              required
            />
          </div>
          <div className="flex flex-col mb-5">
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
              required
            />
          </div>

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
              required
            />
          </div>
          <button className="py-3 text-center w-full bg-secondary hover:bg-secondary/90 transition-colors duration-150 rounded-lg text-sm text-[#FFFFFF] font-semibold mb-5 shadow-md">
            Masuk
          </button>
          <p className="text-center text-[#627D98] text-xs font-medium">
            Sudah punya akun?{" "}
            <a href="#" className="text-secondary  hover:underline">
              Masuk
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
