import React, { useState, useCallback } from "react";
import styled from "styled-components";
import "../assets/css/modal.css";

const LoginTemplate = ({ open, close }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeEmail = useCallback(
    (e) => {
      setEmail(e.target.value);
    },
    [email]
  );

  const onChangePassword = useCallback(
    (e) => {
      setPassword(e.target.value);
    },
    [password]
  );

  return (
    // <div className="modal-wrapper" style={open ? null : closeState}>
    <div className={open ? "modal-wrapper" : null}>
      {open ? (
        <div className="login-modal">
          <div className="login-header">로그인</div>
          <div className="login-input">
            <div className="login-id">
              <input
                className="email"
                type="email"
                id="email"
                placeholder="Email"
                onChange={onChangeEmail}
              />
            </div>
            <div className="login-password">
              <input
                className="password"
                type="password"
                id="password"
                placeholder="Password"
                onChange={onChangePassword}
              />
            </div>
            <div className="close-login">
              <button className="close-button" onClick={close}>
                닫기
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default LoginTemplate;
