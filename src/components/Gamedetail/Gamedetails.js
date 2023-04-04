// import React, { useEffect, useState } from 'react';
// import '../Gamedetail/gamedetails.css';
// import $ from "jquery";
// import { BsXCircleFill, BsPlusCircle } from "react-icons/bs";

// function GameDetail(props) {
//   const [datalist, setDataList] = useState();

//   useEffect(() => {
//     for (let i = 0; i < props.dataList.length; i++) {
//       if (props.gameCode == props.dataList[i].game_code) {
//         setDataList(props.dataList[i].game_code);  
//       }
//     };  
    
//   }, []);

//   // Hide Show Popup And Game Detail List State
//   const [detail_list, setDetailList] = useState("detail_list");

//   // Hide Show Popup And detail List Function
//   const detailList = (value) => {
//     if (value == "add") {
//       setDetailList("");
//     } else if (value == "remove") {
//       setDetailList("open-detail-list");
//     } else if (value == "removelist") {
//       let list = document.getElementById("game-detail");
//       list.classList.add("open-detail-list");
//       $('.page-header').show();
//     }
//   }

//   return (
//     <>
//       <div id="game-detail" className="container-fluid open-detail-list">
//         <BsXCircleFill className="removepopup" onClick={(e) => detailList("removelist")} />
//         <BsPlusCircle className="adddetail" onClick={(e) => detailList("add")} />
//         <img alt="Image Not Found" src={require("../../assets/img/game_detail_back_img.png")} />
//         <div className={`inner-text ${detail_list}`}>
//           <BsXCircleFill className="removedetail" onClick={(e) => detailList("remove")} />
//           <div className="inner-title"></div>
//           <label>Progmatic Play</label>
//           <p className="inner-description">
//             Rich Wlide has returned! Everybody's favourite hero is back for another adventure in the latest Play'n Go title Rich Wlide and the Tome of Madness!
//           </p>
//           <div className="inner-game-feature">
//             <div className="row">
//               <label class="col-6">Game Type:</label>
//               <div className="col-6 list-game-feature"></div>
//             </div>
//             <div className="row">
//               <label class="col-6 label-title">Themes:</label>
//               <div className="col-6 label-content">
//                 Adeventure Horror/Spooky Mystry
//               </div>
//             </div>
//             <div className="row">
//               <label class="col-6 label-title">Features:</label>
//               <div className="col-6 label-content">
//                 Adjacent win cascading reels cluster wins free spins spreading wields
//               </div>
//             </div>
//             <div className="row">
//               <label class="col-6 label-title">Voladity:</label>
//               <div className="col-6 label-content ">
//                 High
//               </div>
//             </div>
//             <div className="row">
//               <label class="col-6 label-title">Realease Date:</label>
//               <div className="col-6 label-content">
//                 April 2,2001
//               </div>
//             </div>
//             <hr />
//             <div className="ongoing">
//               <div className="row">
//                 <label class="col-6 label-title">Football Fever</label>
//                 <div className="col-6">
//                   Ongoing
//                 </div>
//               </div>
//               <div className="row">
//                 <label class="col-6 label-title">Prize Pool:</label>
//                 <div className="col-6">
//                   $200.00
//                 </div>
//               </div>
//               <div className="row">
//                 <label class="col-4 label-title">Ends in id:</label>
//                 <div className="col-5">
//                   20h:02m
//                 </div>
//               </div>
//             </div>
//             <div className="row game-profile">
//               <label class="col-4 label-title">
//                 <img src={require('../../assets/img/slider_img.png')} className="ima-fluid" alt="image not found" />
//               </label>
//               <div className="col-8">
//                 <li className="profile-title">john hunter And..</li>
//                 <li>prgnatic Play</li>
//                 <li>Slot</li>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default GameDetail;

