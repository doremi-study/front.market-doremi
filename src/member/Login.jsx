import React from 'react';
import '../common.css';
import './Login.css';
//TODO 바탕에 div id main. 상단 header. 하단 footer
class Login extends React.Component {
    render() {
        return (
            <div id="content">
                <div id="qnb" className="quick-navigation">
                </div>
                <div className="section_login">
                    <h3 className="tlt_login">로그인</h3>
                    <div className="write_form">
                        <div className="write_view login_view">
                            <form method="post" name="form" id="form" action={"/login"}>
                                <input type="text" size="20" tabIndex="1" id="memberId" name="username" placeholder="아이디를 입력하세요."/>
                                <input type="password" size="20" tabIndex="2" id="password" name="password" placeholder="비밀번호를 입력하세요."/>
                                <div className="checkbox_save">
                                    <label className="label_checkbox checked">
                                        <input type="checkbox" id="chk_security" name="chk_security" value="y" />
                                        보안접속
                                    </label>
                                    <div className="login_search">
                                        <a className="link">
                                            아이디 찾기
                                        </a>
                                        <span className="bar" />
                                        <a className="link">
                                            비밀번호 찾기
                                        </a>
                                    </div>
                                </div>
                                <button className="btn_type1" type="submit">
                                    <span className="txt_type">로그인</span>
                                </button>
                            </form>
                            <a className="btn_type2 btn_member">
                                <span className="txt_type">회원가입</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Login;