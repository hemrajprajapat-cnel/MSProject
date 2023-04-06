import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaAngleLeft } from 'react-icons/fa';
import * as CONSTANT from '../../BaseURL';
import GameDetail from "components/Gamedetail/Gamedetails";
import {
    Button,
    Nav,
    Container,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    CardSubtitle,
    Row,
    Col,
} from "reactstrap";
import './css/gameproviders.css';

function GameProvider() {
    // For Game Details Page
    const [gamecode, setGameCode] = useState('');
    const [datalist, setDataList] = useState('');

    // List Data & Filter
    const [setprovider, setProviderList] = useState([]);
    const [allGameList, setAllGameList] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    React.useEffect(() => {

        // Provider List API
        fetch(`${CONSTANT.BaseUrl}get-provider-list`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((json) => {
                setProviderList(json.provider);
            })
            .catch((error) => {
                console.log(error)
            })

        // Search API
        fetch(`${CONSTANT.BaseUrl}get-all-game`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((json) => {
                setAllGameList(json.game);
            })
            .catch((error) => {
                console.log(error)
            })
    }, []);

    // On Search Function
    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    // OpenGameDetails
    function OpenGameDetail(gameCode) {
        var gamecode = gameCode;
        setGameCode(gamecode);

        for (let i = 0; i < allGameList.length; i++) {
            if (gamecode == allGameList[i].game_code) {
                setDataList(allGameList[i]);
            }
        };

        let list = document.getElementById("game-detail");
        list.classList.remove("open-detail-list");
    };

    return (
        <>
            <GameDetail gameCode={gamecode} data={datalist} />
            <Container id="search_provider_games" className="container_fluid_hwe">
                <Nav className="nav_search">
                    <InputGroup>
                        <InputGroupAddon addonType="prepend">
                            <Link to="/MYCASINO">
                                <InputGroupText className="angleleft">
                                    <FaAngleLeft />
                                </InputGroupText>
                            </Link>
                        </InputGroupAddon>
                        <InputGroupAddon addonType="prepend">
                            <InputGroupText className="search_icon">
                                <i className="fa fa-search"></i>
                            </InputGroupText>
                        </InputGroupAddon>
                        <Input
                            placeholder="Games Providers, Types etc."
                            type="text"
                            className="search_filter search_provider"
                            id="search-Terms"
                            onChange={(e) => handleSearch(e)}
                        ></Input> <br />
                    </InputGroup>
                </Nav>

                {searchTerm.length < 3 ?
                    <div>
                        <Nav className="game_providers_btn">
                            <p className="mb-1">Please enter at least 3 correctors</p>
                        </Nav>
                        <Nav className="game_providers_btn">
                            <Button id="search-btn">Game Providers</Button>
                        </Nav>
                    </div>
                    : null
                }

                {searchTerm.length < 3 ?
                    <div className="provider_content">
                        {setprovider != "" ?
                            setprovider.map((gameprovider) => {
                                return (
                                    <div className="content">
                                        <div className="provider_name">{gameprovider.name}</div>
                                        <Link to={`/providerList/${gameprovider.name}/${gameprovider.code}`}>
                                            <img
                                                alt="Image Not Found"
                                                src={`${CONSTANT.ProviderGameImg + gameprovider.code}.png` ? `${CONSTANT.ProviderGameImg + gameprovider.code}.png` : require("../../assets/img/No_Image_Available.jpg")}
                                            />
                                        </Link>
                                    </div>
                                );
                            })
                            : <Nav className="Not_found">
                                <img
                                    alt="Image Not Found"
                                    src={require("../../assets/img/data_not_found.png")}
                                />
                            </Nav>
                        }
                    </div>
                    :
                    <Row className={`justify-content-start flex-wrap mt-3 ${"Disable"}`}>
                        {allGameList.filter((item) =>
                            item.description.toLowerCase().includes(searchTerm.toLowerCase())
                        ).map((item) => (
                            <Col md="3" xs="6" id="provider_card_hwe">
                                <div className="provider_name">{item.description}</div>
                                <Card className="provider_card" onClick={(e) => OpenGameDetail(item.game_code)}>
                                    <CardHeader>
                                        <img
                                            alt="Image Not Found"
                                            className="slider_image"
                                            src={item.game_img ? CONSTANT.ImageUrl + item.game_img : require("../../assets/img/No_Image_Available.jpg")}
                                        />
                                    </CardHeader>
                                    <CardBody>
                                        <CardTitle tag="h5">{item.game_name}</CardTitle>
                                        <CardSubtitle className="mb-2" tag="p">
                                            {item.provider_code}
                                        </CardSubtitle>
                                        <CardSubtitle className="mb-2" tag="p">
                                            {item.game_type}
                                        </CardSubtitle>
                                    </CardBody>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                }
            </Container>
        </>
    );
}

export default GameProvider;