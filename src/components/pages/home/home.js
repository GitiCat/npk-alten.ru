import { faAngleDown, faHeadset } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import {connect} from 'react-redux';

class Home extends React.Component {
    componentDidMount() {
        let resizeReset = function () {
            w = canvasBody.width = window.innerWidth - 20;
            h = canvasBody.height = window.innerHeight;
        };

        const pointOptions = {
            particleColor: "rgba(200, 200, 200, .15)",
            lineColor: "rgba(142, 142, 142, .2)",
            particleAmount: 255,
            defaultSpeed: .2,
            variantSpeed: .3,
            defaultRadius: 2,
            variantRadius: 2,
            linkRadius: 70,
        };

        window.addEventListener('resize', function () {
            deBouncer();
        });

        let deBouncer = function () {
            clearTimeout(tid);
            tid = setTimeout(function () {
                resizeReset();
            }, delay);
        };

        let checkDistance = function (x1, y1, x2, y2) {
            return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
        };

        let linkPoint = function (point1, hubs) {
            for(let i = 0; i < hubs.length; i++) {
                let distance = checkDistance(point1.x, point1.y, hubs[i].x, hubs[i].y);
                let opacity = 1 - distance / pointOptions.linkRadius;
                
                if(opacity > 0) {
                    drawArea.lineWidth = 0.5;
                    drawArea.strokeStyle = `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${opacity})`;
                    drawArea.beginPath();
                    drawArea.moveTo(point1.x, point1.y);
                    drawArea.lineTo(hubs[i].x, hubs[i].y);
                    drawArea.closePath();
                    drawArea.stroke();
                }
            }
        };

        class Particle {
            constructor(xPos, yPos) {
                this.x = Math.random() * w;
                this.y = Math.random() * h;
                this.speed = pointOptions.defaultSpeed + Math.random() * pointOptions.variantSpeed;
                this.directionAngle = Math.floor(Math.random() * 360);
                this.color = pointOptions.particleColor;
                this.radius = pointOptions.defaultRadius + Math.random() * pointOptions.variantRadius;
                this.vector = {
                    x: Math.cos(this.directionAngle) * this.speed,
                    y: Math.sin(this.directionAngle) * this.speed
                };
                this.update = function () {
                    this.border();
                    this.x += this.vector.x;
                    this.y += this.vector.y;
                };
                this.border = function () {
                    if (this.x >= w || this.x <= 0) {
                        this.vector.x *= -1;
                    }
                    if (this.y >= h || this.y <= 0) {
                        this.vector.y *= -1;
                    }
                    if (this.x > w)
                        this.x = w;
                    if (this.y > h)
                        this.y = h;
                    if (this.x < 0)
                        this.x = 0;
                    if (this.y < 0)
                        this.y = 0;
                };
                this.draw = function () {
                    drawArea.beginPath();
                    drawArea.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                    drawArea.closePath();
                    drawArea.fillStyle = this.color;
                    drawArea.fill();
                };
            }
        }

        function setup() {
            resizeReset();
            for(let i = 0; i < pointOptions.particleAmount; i++) {
                particles.push(new Particle());
            }
            window.requestAnimationFrame(loop);
        }

        function loop() {
            window.requestAnimationFrame(loop);
            drawArea.clearRect(0, 0, w, h);

            for(let i = 0; i < particles.length; i++) {
                particles[i].update();
                particles[i].draw();
            }

            for(let i = 0; i < particles.length; i++) {
                linkPoint(particles[i], particles);
            }
        }

        const canvasBody = document.getElementById("dynamic-point");
        const drawArea = canvasBody.getContext("2d");
        let delay = 200, tid, w, h,
            rgb = pointOptions.lineColor.match(/\d+/g);
        let particles = [];
        resizeReset();
        setup();
    }

    render() {
        return(
            <div className="home-page">
                <div className="space-photo">
                    <canvas id="dynamic-point">&nbsp;</canvas>
                    <Container fluid className="title-container">
                        <Row>
                            <Col lg={12} md={12} sm={12} xs={12}>
                                <div className="title-text-middle">Научно-производственный комплекс</div>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={12} md={12} sm={12} xs={12}>
                                <div className="title-text-high">Альтэрнативная энергетика</div>
                            </Col>
                        </Row>
                        <hr/>
                        <Row>
                            <Col lg={12} md={12} sm={12} xs={12}>
                                <div className="subtitle-text">
                                    Разработка и производство химических источников тока
                                </div>
                            </Col>
                        </Row>
                    </Container>
                    <div className="start-button-container">
                        <Link to="/" className="start-button-link">
                            <FontAwesomeIcon icon={faAngleDown} className="start-button-icon" />
                        </Link>
                    </div>
                </div>
                <Container as="div" bsPrefix="home-page-content">
                    <Container as="div" bsPrefix="volumetric-information-container about-information-container">
                        <Container as="div" bsPrefix="rear-plan-information-container about-rear-plan"></Container>
                        <Container as="div" bsPrefix="text-information-container about-text">
                            <Container as="div" bsPrefix="title-information-container about-title">
                                {this.props.homeComponents.about.title}
                            </Container>
                            <Container as="div" bsPrefix="descriptor-information-container about-descriptor">
                                {this.props.homeComponents.about.descriptor}
                            </Container>
                            <Container as="div" bsPrefix="link-information-container about-link">
                                <Link to={this.props.homeComponents.about.url}>Читать далее...</Link>
                            </Container>
                        </Container>
                    </Container>
                    <Container as="div" bsPrefix="services-provided__container">
                        <Container as="div" bsPrefix="services-provided__item services-provided__item--hover">
                            <FontAwesomeIcon icon={faHeadset} className="services-provided__item--icon"/>
                            <span></span>
                        </Container>

                    </Container>
                </Container>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        homeComponents: state.HomeReducer
    }
}

export default connect(mapStateToProps)(Home);