import React, { useState } from 'react';
import '../Gamedetail/gamedetails.css';
import $ from "jquery";
import { BsXCircleFill, BsPlusCircle } from "react-icons/bs";
import "./gamedetails2.css";

function GameDetail(props) {
    // Hide Show Popup And Game Detail List State
    const [detail_list, setDetailList] = useState("detail_list");

    // Hide Show Popup And detail List Function
    const detailList = (value) => {
        if (value == "add") {
            setDetailList("");
        } else if (value == "remove") {
            setDetailList("detail_list");
        } else if (value == "removelist") {
            let list = document.getElementById("game-detail");
            list.classList.add("open-detail-list");
            $('.page-header').show();
        }
    }

    return (
        <>
            <div id="game-detail" className="container-fluid open-detail-list">
                <BsXCircleFill className="removepopup" onClick={(e) => detailList("removelist")} />
                <BsPlusCircle className="adddetail" onClick={(e) => detailList("add")} />
                <img alt="Image Not Found" src={require("../../assets/img/game_detail_back_img.png")} />
                <div className={`inner-data ${detail_list}`}>
                    <div className="inner-text">
                        <BsXCircleFill className="removedetail" onClick={(e) => detailList("remove")} />
                        <div className="inner-title">{props.data.game_name}</div>
                        <label>{props.data.game_code}</label>
                        <p className="inner-description">
                        </p>
                        <div className="inner-game-feature">
                            <div className="row">
                                <label class="col-6">Game Type:</label>
                                <div className="col-6 list-game-feature">{props.data.game_type}</div>
                            </div>
                            <div className="row">
                                <label class="col-6 label-title">Themes:</label>
                                <div className="col-6 label-content">
                                    {props.data.theme}
                                </div>
                            </div>
                            <div className="row">
                                <label class="col-6 label-title">Features:</label>
                                <div className="col-6 label-content">
                                    {props.data.feature}
                                </div>
                            </div>
                            <div className="row">
                                <label class="col-6 label-title">Voladity:</label>
                                <div className="col-6 label-content ">
                                    {props.data.volatility}
                                </div>
                            </div>
                            <div className="row">
                                <label class="col-6 label-title">Provider Code:</label>
                                <div className="col-6 label-content">
                                    {props.data.provider_code}
                                </div>
                            </div>
                            <hr />
                        </div>
                    </div>

                </div>
                <button className="btn demo" onClick={(e) => detailList("remove")}>Demo</button>
            </div>
        </>
    );
}

export default GameDetail;

