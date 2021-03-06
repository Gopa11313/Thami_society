import React from "react";
import publicationResource from "../assests/publicationResource.jpg";
import airparticles from "../assests/airparticles.jpg";
import airparticle2 from "../assests/airparticle2.jpg";
import airpolution from "../assests/airpolution.jpg";
import gralcier from "../assests/gralcier.jpg";
import landpolutation from "../assests/landpolutation.jpg";
import { Link } from "react-router-dom";
import {
  MDBPagination,
  MDBPageItem,
  MDBPageNav,
  MDBCol,
  MDBRow,
} from "mdbreact";
import { Container } from "react-bootstrap";
const PublicationCard3 = () => {
  return (
    <React.Fragment>
      <div className="text-center pt-5" style={{ background: "#f6b745" }}>
        <p style={{ fontSize: "22px", fontWeight: "bold" }}>Our Resources</p>
        <h2 style={{ marginTop: "-4px" }}>Enviromental Studies</h2>
        <div>
          <Container>
            <div className="row mt-5">
              <div className="col-4">
                <div className="row">
                  <div className="col-6">
                    <img
                      src={publicationResource}
                      style={{ height: "200px", width: "100%" }}
                    ></img>
                  </div>
                  <div className="col-6 text-left align-middle">
                    <p style={{ fontSize: "14px", fontWeight: "bold" }}>
                      Air Particles and Air Quality
                    </p>
                    <p
                      style={{
                        fontSize: "12px",
                        marginTop: "-10px",
                        fontWeight: "bold",
                      }}
                    >
                      The air we breath has a lot to do with our health. As we
                      breath in fresh air, our lungs absorb oxygen from the air
                      and pass it into our blood steam.
                    </p>
                    <button
                      style={{
                        border: "none",
                        background: "#000000",
                        color: "#f6b745",
                        fontSize: "16px",
                        paddingLeft: "10px",
                        fontWeight: "bold",
                        paddingRight: "10px",
                      }}
                    >
                      <Link
                        to={"/resourcepreview"}
                        style={{
                          border: "none",
                          background: "#000000",
                          color: "#f6b745",
                          fontSize: "16px",
                          paddingLeft: "10px",
                          fontWeight: "bold",
                          paddingRight: "10px",
                        }}
                      >
                        Learn More
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="row">
                  <div className="col-6">
                    <img
                      src={airparticles}
                      style={{ height: "200px", width: "100%" }}
                    ></img>
                  </div>
                  <div className="col-6 text-left align-middle">
                    <p style={{ fontSize: "14px", fontWeight: "bold" }}>
                      Air Particles and Air Quality
                    </p>
                    <p
                      style={{
                        fontSize: "12px",
                        marginTop: "-10px",
                        fontWeight: "bold",
                      }}
                    >
                      The air we breath has a lot to do with our health. As we
                      breath in fresh air, our lungs absorb oxygen from the air
                      and pass it into our blood steam.
                    </p>
                    <button
                      style={{
                        border: "none",
                        background: "#000000",
                        color: "#f6b745",
                        fontSize: "16px",
                        paddingLeft: "10px",
                        fontWeight: "bold",
                        paddingRight: "10px",
                      }}
                    >
                      <Link
                        to={"/resourcepreview"}
                        style={{
                          border: "none",
                          background: "#000000",
                          color: "#f6b745",
                          fontSize: "16px",
                          paddingLeft: "10px",
                          fontWeight: "bold",
                          paddingRight: "10px",
                        }}
                      >
                        Learn More
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="row">
                  <div className="col-6">
                    <img
                      src={airparticle2}
                      style={{ height: "200px", width: "100%" }}
                    ></img>
                  </div>
                  <div className="col-6 text-left align-middle">
                    <p style={{ fontSize: "14px", fontWeight: "bold" }}>
                      Air Particles and Air Quality
                    </p>
                    <p
                      style={{
                        fontSize: "12px",
                        marginTop: "-10px",
                        fontWeight: "bold",
                      }}
                    >
                      The air we breath has a lot to do with our health. As we
                      breath in fresh air, our lungs absorb oxygen from the air
                      and pass it into our blood steam.
                    </p>
                    <button
                      style={{
                        border: "none",
                        background: "#000000",
                        color: "#f6b745",
                        fontSize: "16px",
                        paddingLeft: "10px",
                        fontWeight: "bold",
                        paddingRight: "10px",
                      }}
                    >
                      <Link
                        to={"/resourcepreview"}
                        style={{
                          border: "none",
                          background: "#000000",
                          color: "#f6b745",
                          fontSize: "16px",
                          paddingLeft: "10px",
                          fontWeight: "bold",
                          paddingRight: "10px",
                        }}
                      >
                        Learn More
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="row mt-5">
              <div className="col-4">
                <div className="row">
                  <div className="col-6">
                    <img
                      src={airpolution}
                      style={{ height: "200px", width: "100%" }}
                    ></img>
                  </div>
                  <div className="col-6 text-left align-middle">
                    <p style={{ fontSize: "14px", fontWeight: "bold" }}>
                      Air Particles and Air Quality
                    </p>
                    <p
                      style={{
                        fontSize: "12px",
                        marginTop: "-10px",
                        fontWeight: "bold",
                      }}
                    >
                      The air we breath has a lot to do with our health. As we
                      breath in fresh air, our lungs absorb oxygen from the air
                      and pass it into our blood steam.
                    </p>
                    <button
                      style={{
                        border: "none",
                        background: "#000000",
                        color: "#f6b745",
                        fontSize: "16px",
                        paddingLeft: "10px",
                        fontWeight: "bold",
                        paddingRight: "10px",
                      }}
                    >
                      <Link
                        to={"/resourcepreview"}
                        style={{
                          border: "none",
                          background: "#000000",
                          color: "#f6b745",
                          fontSize: "16px",
                          paddingLeft: "10px",
                          fontWeight: "bold",
                          paddingRight: "10px",
                        }}
                      >
                        Learn More
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="row">
                  <div className="col-6">
                    <img
                      src={gralcier}
                      style={{ height: "200px", width: "100%" }}
                    ></img>
                  </div>
                  <div className="col-6 text-left align-middle">
                    <p style={{ fontSize: "14px", fontWeight: "bold" }}>
                      Air Particles and Air Quality
                    </p>
                    <p
                      style={{
                        fontSize: "12px",
                        marginTop: "-10px",
                        fontWeight: "bold",
                      }}
                    >
                      The air we breath has a lot to do with our health. As we
                      breath in fresh air, our lungs absorb oxygen from the air
                      and pass it into our blood steam.
                    </p>
                    <button
                      style={{
                        border: "none",
                        background: "#000000",
                        color: "#f6b745",
                        fontSize: "16px",
                        paddingLeft: "10px",
                        fontWeight: "bold",
                        paddingRight: "10px",
                      }}
                    >
                      <Link
                        to={"/resourcepreview"}
                        style={{
                          border: "none",
                          background: "#000000",
                          color: "#f6b745",
                          fontSize: "16px",
                          paddingLeft: "10px",
                          fontWeight: "bold",
                          paddingRight: "10px",
                        }}
                      >
                        Learn More
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="row">
                  <div className="col-6">
                    <img
                      src={landpolutation}
                      style={{ height: "200px", width: "100%" }}
                    ></img>
                  </div>
                  <div className="col-6 text-left align-middle">
                    <p style={{ fontSize: "14px", fontWeight: "bold" }}>
                      Air Particles and Air Quality
                    </p>
                    <p
                      style={{
                        fontSize: "12px",
                        marginTop: "-10px",
                        fontWeight: "bold",
                      }}
                    >
                      The air we breath has a lot to do with our health. As we
                      breath in fresh air, our lungs absorb oxygen from the air
                      and pass it into our blood steam.
                    </p>
                    <button
                      style={{
                        border: "none",
                        background: "#000000",
                        color: "#f6b745",
                        fontSize: "16px",
                        paddingLeft: "10px",
                        fontWeight: "bold",
                        paddingRight: "10px",
                      }}
                    >
                      <Link
                        to={"/resourcepreview"}
                        style={{
                          border: "none",
                          background: "#000000",
                          color: "#f6b745",
                          fontSize: "16px",
                          paddingLeft: "10px",
                          fontWeight: "bold",
                          paddingRight: "10px",
                        }}
                      >
                        Learn More
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-center mt-5">
              <MDBRow>
                <MDBCol>
                  <MDBPagination className="mb-5">
                    <MDBPageItem disabled>
                      <MDBPageNav
                        aria-label="Previous"
                        className="ml-2 mr-2"
                        style={{ background: "#000000", color: "#f6b745" }}
                      >
                        <span aria-hidden="true">Previous</span>
                      </MDBPageNav>
                    </MDBPageItem>
                    <MDBPageItem active>
                      <MDBPageNav
                        style={{ background: "#ffffff", color: "#000000" }}
                      >
                        1 <span className="sr-only ">(current)</span>
                      </MDBPageNav>
                    </MDBPageItem>
                    <MDBPageItem className="ml-2 mr-2">
                      <MDBPageNav
                        style={{ background: "#ffffff", color: "#000000" }}
                      >
                        2
                      </MDBPageNav>
                    </MDBPageItem>
                    <MDBPageItem className=" mr-2">
                      <MDBPageNav
                        style={{ background: "#ffffff", color: "#000000" }}
                      >
                        3
                      </MDBPageNav>
                    </MDBPageItem>
                    <MDBPageItem>
                      <MDBPageNav
                        aria-label="Previous"
                        className=" mr-2"
                        style={{ background: "#000000", color: "#f6b745" }}
                      >
                        <span aria-hidden="true">Next</span>
                      </MDBPageNav>
                    </MDBPageItem>
                  </MDBPagination>
                </MDBCol>
              </MDBRow>
              {/* <Pagination>
                <Pagination.First />
                <Pagination.Prev />
                <Pagination.Item active>{1}</Pagination.Item>
                <Pagination.Ellipsis />

                <Pagination.Item>{10}</Pagination.Item>
                <Pagination.Item>{11}</Pagination.Item>
                <Pagination.Item>{12}</Pagination.Item>
                <Pagination.Item>{13}</Pagination.Item>
                <Pagination.Item disabled>{14}</Pagination.Item>

                <Pagination.Ellipsis />
                <Pagination.Item>{20}</Pagination.Item>
                <Pagination.Next />
                <Pagination.Last />
              </Pagination> */}
            </div>
          </Container>
        </div>
      </div>
    </React.Fragment>
  );
};
export default PublicationCard3;
