import Footer from "../components/ExternalComponents/Footer";

const About = () => {
  return (
    <div className=" bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-10 items-center mt-30">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-blue-700">
              Biz haqimizda
            </h2>
            <p className="mt-4 text-gray-600 text-lg">
              Yo`ldoshev o`quv markazi zamonaviy bilimlarni o`rgatishga ixtisoslashgan 
              markaz bo`lib, o`quvchilarga sifatli ta`lim berish orqali ularning 
              kelajagini qurishga yordam beradi.
            </p>
            <p className="mt-2 text-gray-600">
              Bizning asosiy maqsadimiz — har bir o`quvchini o`z yo`nalishi bo`yicha 
              professional darajaga olib chiqish.
            </p>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc"
              alt="about"
              className="rounded-2xl shadow-lg"
            />
          </div>
        </div>
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h3 className="text-3xl font-bold text-blue-600">1000+</h3>
            <p className="text-gray-600 mt-2">O`quvchilar</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h3 className="text-3xl font-bold text-blue-600">20+</h3>
            <p className="text-gray-600 mt-2">Ustozlar</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h3 className="text-3xl font-bold text-blue-600">5+</h3>
            <p className="text-gray-600 mt-2">Yillik tajriba</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h3 className="text-3xl font-bold text-blue-600">90%</h3>
            <p className="text-gray-600 mt-2">Natija ko`rsatkichi</p>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default About;