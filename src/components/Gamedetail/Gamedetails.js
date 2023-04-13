import React, { useState } from 'react';
import '../Gamedetail/gamedetails.css';
import $ from "jquery";
import { BsXCircleFill, BsPlusCircle } from "react-icons/bs";
import "./gamedetails.css";

function GameDetail(props) {
    // Hide Show Popup And Game Detail List State
    const [detail_list, setDetailList] = useState("detail_list");

    // Hide Show Popup And detail List Function
    const detailList = (value) => {
        if (value == "add") {
            //setDetailList("");
			$('.hwe_slide_bar').toggle( "slide" );
        } else if (value == "remove") {
            $('.hwe_slide_bar').toggle( "slide" );
        } else if (value == "removelist") {
            let list = document.getElementById("game-detail");
            list.classList.add("open-detail-list");
            $('.page-header').show();
        }
    }

    return (
        <>
		    <script src='http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.5/jquery-ui.min.js'></script>
            <div id="game-detail" className="container-fluid open-detail-list">
                <BsXCircleFill className="removepopup" onClick={(e) => detailList("removelist")} />
                <BsPlusCircle className="adddetail" onClick={(e) => detailList("add")} />
                <img alt="Image Not Found" src={require("../../assets/img/game_detail_back_img.png")} />
                <div className="inner-data hwe_slide_bar">
                    <div className="inner-text">
                        <BsXCircleFill className="removedetail" onClick={(e) => detailList("remove")} />
                        <div className="inner-title">{props.data.game_name}</div>
                        <label>{props.data.provider_code}</label>
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
                                <label class="col-6 label-title">Release Date:</label>
                                <div className="col-6 label-content">
                                    {props.data.release_date}
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

