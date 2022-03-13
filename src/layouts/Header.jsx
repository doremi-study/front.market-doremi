import React, {useState} from 'react';
import '../common.css';
import './Header.css';

function Header () {
    const [userMenuSubVisible, setUserMenuSubVisible] = useState({display: "none"});

    function mouseOverCustomerService() {

    }

    return (
        <div id="header">
            <div className="bnr_header" id="top-message">
            </div>
            <div id="userMenu">
                <ul className="list_menu">
                    <li className="menu non_sub menu_join">
                        <a href={"/member"} className="link_menu">회원가입</a>
                    </li>
                    <li className="menu non_sub menu_login">
                        <a href={"/login"} className="link_menu">로그인</a>
                    </li>
                    <li className="menu lst"><a href="" className="link_menu"
                                                onMouseOver={event => {setUserMenuSubVisible({display: "block"})}}
                                                onMouseLeave={event => {setUserMenuSubVisible({display: "none"})}}>고객센터</a>
                        <ul className="sub" style={userMenuSubVisible}>
                            <li><a href="#none">공지사항</a></li>
                            <li><a href="#none">자주하는 질문</a></li>
                            <li><a href="#none">1:1 문의</a></li>
                            <li><a href="#none">대량주문 문의</a></li>
                            <li><a href="#none">상품 제안</a></li>
                            <li><a href="#none">에코포장 피드백</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div id="headerLogo" className="layout-wrapper">
                <h1 className="logo">
                    <a href="/" className="link_main">
                        <span id="gnbLogoContainer"> </span>
                        <img  src={process.env.PUBLIC_URL + "/market_doremi_logo2.jpg"} alt="마켓컬리 로고"/>
                    </a>
                </h1>
            </div>
            <div id="gnb">
                <div className="fixed_container">
                    <h2 className="screen_out">메뉴</h2>
                    <div id="gnbMenu" className="gnb_kurly">
                        <div className="inner_gnbkurly">
                            <div className="gnb_main">
                                <ul className="gnb">
                                    <li className="menu1">
                                        <a href="#none" className="">
                                          <span className="ico">
                                          </span>
                                            <span className="txt">전체 카테고리</span>
                                        </a>
                                    </li>
                                    <li className="menu2">
                                        <a href="" className="link new ">
                                            <span className="txt">신상품</span>
                                        </a>
                                    </li>
                                    <li className="menu3">
                                        <a href="" className="link best ">
                                            <span className="txt">베스트</span>
                                        </a>
                                    </li>
                                    <li className="menu4">
                                        <a href="" className="link bargain ">
                                            <span className="txt">알뜰쇼핑</span>
                                        </a>
                                    </li>
                                    <li className="lst">
                                        <a href="" className="link event ">
                                            <span className="txt">특가/혜택</span>
                                        </a>
                                    </li>
                                </ul>
                                <div id="side_search" className="gnb_search">
                                    <form action="">
                                        <input name="sword"
                                               type="text"
                                               id="sword"
                                               required="required"
                                               label="검색어"
                                               placeholder="검색어를 입력해주세요."
                                               className="inp_search"/>
                                        <input type="image"
                                               src="https://res.kurly.com/pc/service/common/1908/ico_search_x2.png"
                                               className="btn_search"/>
                                        <div className="init">
                                            <button type="button" id="searchInit" className="btn_delete">검색어
                                                삭제하기
                                            </button>
                                        </div>
                                    </form>
                                </div>
                                <div className="cart_count">
                                    <div className="inner_cartcount">
                                        <a href="" className="btn_cart">
                                            <span className="screen_out">장바구니</span>
                                            <span id="cart_item_count" className="num realtime_cartcount"> </span>
                                        </a>
                                    </div>
                                    <div id="addMsgCart" className="msg_cart">
                                            <span className="point">
                                            </span>
                                        <div className="inner_msgcart">
                                            <img src="https://res.kurly.com/images/common/bg_1_1.gif" alt=""
                                                 className="thumb"/>
                                            <p id="msgReaddedItem" className="desc">
                                                    <span className="tit">
                                                    </span>
                                                <span className="txt"> 장바구니에 상품을 담았습니다.
                                                        <span className="repeat">이미 담으신 상품이 있어 추가되었습니다.</span>
                                                    </span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="location_set">
                                    <button type="button" className="btn_location on">배송지 설정하기</button>
                                    <div className="layer_location">
                                        <div className="no_address">
                                            <span className="emph">배송지를 등록</span>하고<br/> 구매 가능한 상품을 확인하세요!
                                            <div className="group_button double">
                                                <button type="button" className="btn default login">로그인</button>
                                                <button type="button" className="btn active searchAddress">
                                                        <span className="ico">
                                                        </span>주소검색
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="gnbPick">
                                    <a href="" className="btn_pick">찜한 상품 보기</a>
                                </div>
                            </div>
                            <div className="gnb_sub" style={{display:"none", width:219+"px"}}>
                                <div className="inner_sub">
                                    <ul data-default="219" data-min="219" data-max="731" className="gnb_menu size_over" style={{height:595+"px"}}>
                                        <li>
                                            <a className="menu">
                                                    <span className="ico">
                                                        <img
                                                            src="https://img-cf.kurly.com/shop/data/category/icon_veggies_inactive_pc@2x.1586324570.png"
                                                            alt="카테고리 아이콘" className="ico_off"/>
                                                        <img
                                                            src="https://img-cf.kurly.com/shop/data/category/icon_veggies_active_pc@2x.1586324570.png"
                                                            alt="카테고리 아이콘" className="ico_on"/>
                                                        <span className="tit">
                                                            <span className="txt">채소</span>
                                                        </span>
                                                    </span>
                                                <span className="tit"><span className="txt">채소</span></span>
                                            </a>
                                            <ul className="sub_menu">
                                                <li>
                                                    <a className="sub">
                                                        <span className="name">친환경</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="sub">
                                                        <span className="name">고구마·감자·당근</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="sub">
                                                        <span className="name">시금치·쌈채소·나물</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="">
                                            <a className="menu">
                                                <span className="ico">
                                                    <img src="https://img-cf.kurly.com/shop/data/category/icon_fruit_inactive_pc@2x.1568684150.png" alt="카테고리 아이콘" className="ico_off"/>
                                                    <img src="https://img-cf.kurly.com/shop/data/category/icon_fruit_active_pc@2x.1568684150.png" alt="카테고리 아이콘" className="ico_on"/>
                                                    <span className="tit">
                                                        <span className="txt">과일·견과·쌀</span>
                                                    </span>
                                                </span>
                                                <span className="tit">
                                                        <span className="txt">과일·견과·쌀</span>
                                                    </span>
                                            </a>
                                            <ul className="sub_menu">
                                                <li>
                                                    <a className="sub">
                                                        <span className="name">친환경</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="sub">
                                                        <span className="name">제철과일</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;