import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import aboutImage from "../../Images/Gallery/image-1.jpg";
import karnataka from "../../Images/karnataka.png";

const About = () => {
  return (
    <>
      <div className="bg-secondary">
        <Container>
          <Row>
            <Col md={12}>
              <div className="p-3">
                <h1 className="text-white text-center fw-bold">
                  ಶ್ರೀ ರುದ್ರಾವಧೂತ ಮಠ ಜಮಖಂಡಿ, ಮುಂಬಯಿ
                </h1>
                <h3 className="text-white text-center fw-bold">
                  {" "}
                  (ಆಧ್ಯಾತ್ಮಿಕ ಕೇಂದ್ರ)
                </h3>
                <Row className="justify-content-center">
                  <Col md={4}>
                    <h4 className="side-line text-center">
                      <span className="line">
                        <i className="fas fa-book-reader"></i>
                      </span>
                    </h4>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="pt-2 pb-2 pt-md-3 pb-md-3 bg-white">
        <Container>
          <Row>
            <Col md={12}>
              <div className="text-center pt-2 pb-2">
                <h1 className="pt-2 pb-2 text-primary fw-bold">
                  ಸರ್ವರಿಗೂ ಹೃತ್ಪೂರ್ವಕ ಸುಸ್ವಾಗತ
                </h1>

                <Row className="">
                  <Col md={4} className="align-self-center">
                    <div className="text-center">
                      <Image
                        src={karnataka}
                        alt="image"
                        className="img-fluid rounded"
                      />
                    </div>
                  </Col>
                  <Col md={8} className="align-self-center">
                    <div className="bg-warning text-danger p-3 fw-bold rounded">
                      <h2 className="mb-0 fw-bold">
                        ಶ್ರೀ ಸದ್ಗುರು ರುದ್ರಾವಧೂತರ 91 ನೇ ಪುಣ್ಯಾರಾಧನೆ ಹಾಗೂ 36 ನೇ
                        ವೇದಾಂತ ಪರಿಷತ್ ಜಮಖಂಡಿ.
                      </h2>
                    </div>
                  </Col>
                </Row>
              </div>
              <div className="bg-primary">
                <Row>
                  <Col md={5}>
                    <div className="p-4">
                      <p className="fw-bold text-white text-center mb-0">
                        ಮಂಗಳವಾರ ದಿನಾಂಕ 14-12-2021 ರಿಂದ <br/>ಗುರುವಾರ ದಿನಾಂಕ 16-12-2021
                        ರವರೆಗೆ
                      </p>
                    </div>
                  </Col>
                  <Col md={7} className="align-self-center">
                    <div className="text-center m-2 text-white fw-bold">
                      <a
                        className=" ms-2 me-2 mt-2 mb-2 btn btn-secondary text-white text-uppercase fw-bold"
                        href="https://www.facebook.com/RudravadhutMathJamkhandiMumbai/"
                      >
                        Like Facebook Page
                      </a><a
                        className=" ms-2 me-2 mt-2 mb-2 btn btn-secondary text-white text-uppercase fw-bold"
                        href="http://rudravadhutmath.com/"
                      >
                        Visit Main Website
                      </a><br/>
                      ಪ್ರವಚನಗಳನ್ನು ಆಲಿಸಲು <a
                        className="btn btn-secondary text-white text-uppercase fw-bold"
                        href="https://www.facebook.com/RudravadhutMathJamkhandiMumbai/"
                      >
                        YouTube Channel 
                      </a> Subscribe ಮಾಡಿ
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="pt-2 pb-2 pt-md-3 pb-md-3 bg-light">
        <Container>
          <Row>
            <Col md={12}>
              <div className="text-center">
                <Image
                  src={aboutImage}
                  alt="about"
                  className="img-fluid rounded shadow"
                />
              </div>
            </Col>
            <Col md={12}>
              <div className="rounded shadow bg-white">
                <div className="bg-secondary">
                  <Row>
                    <Col md={12}>
                      <div className="p-3">
                        <p className="fw-bold text-white text-center">
                          ಶೋ ||.ಬ್ರ||ವೇದಾಂತಾಚಾರ್ಯ ಶ್ರೀ ಸಹಜಾನಂದ ಅವಧೂತರು , ಮುಂಬಯಿ
                          ಜಮಖಂಡಿ <br /> ಇವರ ಸತ್ಪ್ರೇರಣೆಯಿಂದ ಸರ್ವ ಕಾರ್ಯಕ್ರಮಗಳು
                          ಜರುಗುವವು .
                          <br /> <br />
                          ದಿವ್ಯ ಸಾನಿಧ್ಯ : ಡಾ || ಅಭಿನವಕುಮಾರ ಚನ್ನಬಸವ ಮಹಾಸ್ವಾಮಿಗಳು
                          , ಓಲೇಮಠ ಜಮಖಂಡಿ , ನವಿಲುತೀರ್ಥ- ಸವದತ್ತಿ. <br /> <br />
                          ಸನ್ನಿಧಿ : ಶರಣ ಶ್ರೀ ಡಾ . ಈಶ್ವರ ಮಂಟೂರ , ಬಸವಜ್ಞಾನ ಗುರುಕುಲ
                          ಹುನ್ನೂರ - ಮಧುರಖಂಡಿ . <br /> <br />
                          ಅಧ್ಯಕ್ಷತೆ : ಶ್ರೀ ಷ . ಬ್ರ . ಶಿವಲಿಂಗ ಪಂಡಿತಾರಾಧ್ಯ
                          ಶಿವಾಚಾರ್ಯರು , ಮುತ್ತಿನಕಂತಿ ಹಿರೇಮಠ , ಜಮಖಂಡಿ ,
                        </p>
                        <h2 className="text-center text-primary fw-bold text-decoration-underline pt-3 pb-3">
                          ಕಾರ್ಯಕ್ರಮದಲ್ಲಿ ಪಾಲ್ಗೊಳ್ಳುವ ಮಹಾತ್ಮರು
                        </h2>

                        <p className="fw-bold text-white text-center">
                          ಸಶ್ರೋ. ಬ್ರ . ಶ್ರೀ ಅಮರೆಶ್ವರ ಸ್ವಾಮಿಗಳು , ಶ್ರೀ ಸಿದ್ಧಗಿರಿ
                          ಸಿದ್ಧಾಶ್ರಮ ಹಣಮಾಪೂರ ಕವಲಗುಡ್ಡ <br /> <br />
                          ಶ್ರೋ. ಬ್ರ. ಶ್ರೀ ಪ್ರಭುದೇವರು , ಹುಣಶ್ಯಾಳ ಪಿ.ಜಿ <br />{" "}
                          <br />
                          ಶ್ರೋ. ಬ್ರ . ll ಶ್ರೀ ಶಿವಪುತ್ರ ಅವಧೂತರು , ಶ್ರೀ ಶಿವಪುತ್ರ
                          ಅವಧೂತ ಮಠ ಲಿಂಗನೂರ , <br /> <br />
                          ಶ್ರೋ .ಬ್ರ . ಶ್ರೀ ಚಿನ್ಮಯಾನಂದ ಸ್ವಾಮಿಗಳು , ಶ್ರೀ ಸಿದ್ಧಾರೂಢ
                          ಮಠ , ಗಣಿ . <br /> <br />
                          ಶ್ರೋ . ಬ್ರ . ಶ್ರೀ ಸ್ವರೂಪಾನಂದ ಸ್ವಾಮಿಗಳು , ಸುಜ್ಞಾನ ಕುಠಿರ
                          ಕೋಳಿಗುಡ್ಡ
                        </p>
                      </div>
                    </Col>
                  </Row>
                </div>
                <div className="bg-primary">
                  <Row>
                    <Col md={12}>
                      <div className="p-3">
                        <h2 className="text-center text-white fw-bold text-decoration-underline pt-3 pb-3">
                          ಪ್ರವಚನ ವಿಷಯ
                        </h2>
                        <p className="fw-bold text-white text-center">
                          ಮಂಗಳವಾರ ದಿನಾಂಕ 14-12-2021 ರಂದು ಸಾಯಂಕಾಲ <br />
                          ತದ್ವಿದ್ಧಿ ಪ್ರಣಿಪಾತೇನ . ( ಭ ಗಿತಾ - 4-24 ) <br /> <br />
                          ಬುಧವಾರ ದಿನಾಂಕ 15-12-2021 ರಂದು ಬೆಳಿಗ್ಗೆ <br />
                          ಜಗವಸುತ್ತಿಪ್ಪುದು ನಿನ್ನ ಮಾಯೆಯಯ್ಯಾ ( ಬಸವಣ್ಣ )
                          <br /> <br />
                          ಬುಧವಾರ ದಿನಾಂಕ 15-12-2021 ರಂದು ಸಾಯಂಕಾಲ <br />
                          ಮರ್ತ್ಯಲೋಕವೆಂಬುದು ಕರ್ತಾರನ ಕಮ್ಮಟವನ್ನು ( ಬಸವಣ್ಣ ) <br />{" "}
                          <br />
                          ಗುರುವಾರ ದಿನಾಂಕ 16-12-2021 ರಂದು ಬೆಳಿಗ್ಗೆ <br />
                          ಶ್ರೇಯಾನ್ ದ್ರವ್ಯಮಯಾದ್ಯಜ್ಞಾತ್ ( ಭ. ಗೀತಾ 4 - 33)
                        </p>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
          </Row>
        </Container>

        <div id="" className="pt-3 pb-3 pt-md-5 pb-md-5">
          <Container>
            <Row>
              <Col md={4}>
                <div className="ratio ratio-4x3">
                  <iframe
                    src="https://www.youtube.com/embed/FxlCFPjnuAQ"
                    title="YouTube video"
                  ></iframe>
                </div>
              </Col>
              <Col md={4}>
                <div className="ratio ratio-4x3">
                  <iframe
                    src="https://www.youtube.com/embed/MFRWx6rMFXY"
                    title="YouTube video"
                  ></iframe>
                </div>
              </Col>
              <Col md={4}>
                <div className="ratio ratio-4x3">
                  <iframe
                    src="https://www.youtube.com/embed/ymK9S9k4vzU"
                    title="YouTube video"
                  ></iframe>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
};

export default About;
