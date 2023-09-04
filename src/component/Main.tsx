
import "./Main.css";
function Main() {
  return (
    <div className="main_container">
      <div className="center">
        <h2 className="text-6xl  font-bold">
          ATTO mobil ilovasini yuklab oling!
        </h2>
        <ul className="list-none">
          <li className="mainLi">Xarajatlaringizni nazorat qiling</li>
          <li className="mainLi">Kartani onlayn to'ldiring</li>
          <li className="mainLi">Yo'qolgan taqdirda kartani bloklang</li>
        </ul>
        <div className="btns mt-5">
          <button><i className="fa-brands fa-apple fa-xl" style={{color: "white"}}></i> App Store</button>
          <button><i className="fa-brands fa-google-play"></i> Google Play</button>
        </div>
      </div>
      <div>
        <img
          src="https://webadminapi.atto.uz/storage/slider/Kn5JCuRNMh176U09vTGKzWkF0HHue8kFs8hV3h74.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default Main;
