import "./Footer.css";

function Footer() {
  return (
    <div>
      <footer>
        <div className="links">
          <div>
            <h4>Tashuvchilar</h4>
            <ul>
              <li>Validatsiyalar</li>
              <li>Hamkorlik shartlari</li>
            </ul>
          </div>
          <div>
            <h4>Biz Haqimizda</h4>
            <ul>
              <li>Kompaniya haqida</li>
              <li>Hujjatlar</li>
              <li>Bo'sh ish o'rinlar</li>
            </ul>
          </div>
          <div>
            <h4>Yo'lovchilar</h4>
            <ul>
              <li>Transport kartalar</li>
              <li>Imtiyozli shartlari</li>
              <li>Tariflar</li>
              <li>To'ldirish</li>
              <li>Sms Xabarlar</li>
              <li>Savollar</li>
              <li>Ko'rsatmalar</li>
            </ul>
          </div>
          <div className="cardBlog">
            <button>
              <i
                className="fa-brands fa-apple fa-xl"
                style={{ color: "white" }}
              ></i>{" "}
              App Store
            </button>
            <button>
              <i className="fa-brands fa-google-play"></i> Google Play
            </button>
            <div className="card">
                <p className="card_heading">Karta Bloklanganmi?</p>
                <p>Katta ehtimol bilan kartangizda yo'l haqqini to'lashga mablag' yetarli emas</p>
                <button className="card_btn">Kartani blokdan chiqarish</button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
