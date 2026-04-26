import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-blue-700 text-white pt-12 pb-6 mt-30">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-8">
        <div>
          <h2 className="text-2xl font-bold">Yo`ldoshev</h2>
          <p className="mt-3 text-white/80">
            Zamonaviy bilimlar va sifatli ta`lim orqali kelajagingizni biz bilan quring.
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-lg">Sahifalar</h3>
          <ul className="mt-3 space-y-2 text-white/80">
            <Link to={"/"}>
                <li className="hover:text-white cursor-pointer">Bosh sahifa</li>
            </Link>
            <Link to={"/course"}>
                <li className="hover:text-white cursor-pointer">Kurslar</li>
            </Link>
            <Link to={"/about"}>
                <li className="hover:text-white cursor-pointer">Biz haqimizda</li>
            </Link>
            <Link to={"contact"}>
                <li className="hover:text-white cursor-pointer">Aloqa</li>
            </Link>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-lg">Kurslar</h3>
          <ul className="mt-3 space-y-2 text-white/80">
            <li>Frontend</li>
            <li>Backend</li>
            <li>AI (Suniy Intellekt)</li>
            <li>Kampyuter Savodxonligi</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-lg">Aloqa</h3>
          <ul className="mt-3 space-y-2 text-white/80">
            <li>📍 Zarbdor, Jizzax, O`zbekiston</li>
            <li>📞 +998 94 439 09 10</li>
            <li>✉️ info@yoldoshev.uz</li>
          </ul>
        </div>
      </div>
      <div className="mt-10 border-t border-white/20 pt-4 text-center text-white/70 text-sm">
        © 2026 Yo`ldoshev o`quv markazi. Barcha huquqlar himoyalangan. Created by Toshpo'latov Sardor.
      </div>
    </div>
  );
};

export default Footer;