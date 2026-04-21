import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 to-blue-400 text-white">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Kelajagingizni <br />
            <span className="text-white/80">biz bilan boshlang</span>
          </h1>
          <p className="mt-4 text-lg text-white/90">
            Yo`ldoshev o`quv markazida zamonaviy fanlarni o`rganing va 
            o`z kelajagingizni bugundan yarating.
          </p>
          <div className="mt-6 flex gap-4">
            <Link to={"/course"}>
            <button className="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-100 transition">
              Kurslarni ko`rish
            </button>
            </Link>
            <Link to={"/contact"}>
            <button className="border border-white px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition">
              Bog`lanish
            </button>
            </Link>
          </div>
        </div>
        <div className="relative">
          <div className="backdrop-blur-lg bg-white/20 p-6 rounded-2xl shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644"
              alt="students"
              className="rounded-xl"
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Hero;