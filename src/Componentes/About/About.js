import "./About.css";
import { Col,Row, Container } from "react-bootstrap";
import Footer from "../Footer/Footer";

export default function About() {
  return (
    <>
      <Container className="middle">
        <Row className="row justify-content-center">
          <img
            className="pic-middle"
            src="https://img.mako.co.il/2019/01/26/1069373_I.jpg      "
            alt="First slide"
          />
        </Row>
        <Row className="justify-content-center">
          <h1 className="h1-style">אודות המטבח האתיופי</h1>
        </Row>
        <Row className="justify-content-center">
          <Col >
          <div className="div-text">
            המטבח האתיופי הוא המטבח העממי המסורתי הנפוץ באתיופיה, מטבח פשוט
            ובסיסי בכל הנוגע לחומרי גלם ולשיטות הבישול. מרכיביו העיקריים הם
            קטניות לסוגיהן, בשר ירקות מאכל וירקות תבלין. מטבח זה מבוסס על
            תבשילים וקדירות בבישול ארוך, מתובלים בנדיבות ולרוב חריפים. השימוש
            הנרחב בתבלינים מעניק למאכלים טעמים ארומטיים, ניחוחות חזקים וקשת
            טעמים מגוונת, על אף השימוש בחומרי גלם בסיסיים בלבד. ה"מטבח" בבית
            האתיופי המסורתי הוא למעשה פינת בישול, שמהווה מרכז הבית והארוחות
            מתנהלות כמעין טקס חברתי. מציבים במרכז צלחת גדולה ובה מגוון תבשילים
            המונחים על האינג'רה . הסועדים בוצעים פיסות אינג'רה באמצעות ידם
            הימנית וכך אוספים מהתבשילים השונים בתנועות ניגוב. האכילה המשותפת
            והטקסית מחזקת את הקשרים בין הסועדים ואף נהוג שסועד מאכיל את היושב
            בסמוך לו כמחווה של כבוד, אהבה והערכה כאשר גודלו של הנתח מעיד על
            נדיבותו ורוחב ליבו של המאכיל. את הארוחה נועל טקס הכנת הקפה המכונה
            "בּוּנה".
            <a
              target="_blank"
              href="https://he.wikipedia.org/wiki/%D7%94%D7%9E%D7%98%D7%91%D7%97_%D7%94%D7%90%D7%AA%D7%99%D7%95%D7%A4%D7%99"
            >
              מתוך ויקיפדיה
            </a>
          </div>
        
          </Col>
          </Row>
      </Container>
      <Footer />
    </>
  );
}
