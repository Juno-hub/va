import React from "react";

class App extends React.Component {
  state = {
    user_id: "",
    checkbox: "",
  };

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <form action="/login" method="post" onSubmit={this.handleSubmit}>
        <label>
          <div className="user_id">
            <input
              type="text"
              name="user_id"
              placeholder="이메일 주소 또는 전화번호"
              required
            />
          </div>
          <div className="password">
            <input
              type="password"
              name="password"
              placeholder="비밀번호"
              required
            />
          </div>
        </label>
        <input type="submit" value="로그인" />
        <div className="remember">
          <input type="checkbox" value="checkbox" />
          <span className="remember__text">로그인 정보 입력</span>
        </div>
      </form>
    );
  }
}

export default App;
