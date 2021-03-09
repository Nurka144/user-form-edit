import './App.css';

function App() {

  const changeStatus = () => {
    console.log(1)
  }

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <div className="greeting-title">
              <h2><span className="greeting-title__hello">Здравствуйте,</span> Человек №3596941</h2>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="change-status-btn-wrapper">
              <span className="change-status-btn" onClick={changeStatus}>Сменить статус</span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="form-wrapper">
            <div className="col-lg-3 col-md-3 col-sm-12">
              <span className="title-input">Ваш город</span>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <select className="form-select">
                <option value="1">Красноярск</option>
                <option value="2">Красноярск</option>
                <option value="3">Красноярск</option>
              </select>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="form-wrapper">
            <div className="col-lg-3">
              <span className="title-input">Пароль</span>
            </div>
            <div className="col-lg-4">
              <input type="text" className="form-control" />
              <span className="error-input">Укажите пароль</span>
            </div>
            <div className="col-lg-5">
              <div className="info-input">
                <span>Ваш новый пароль должен содержать не менее 5 символов.</span>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="form-wrapper">
            <div className="col-lg-3">
              <span className="title-input">Пароль еще раз</span>
            </div>
            <div className="col-lg-4">
              <input type="text" className="form-control" />
              <span className="error-input">Укажите пароль</span>
            </div>
            <div className="col-lg-5">
              <div className="info-input">
                <span>Повторите пароль, пожалуйста, это обезопасит вас с нами
на случай ошибки.</span>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="form-wrapper">
            <div className="col-lg-3">
              <span className="title-input">Электронная почта</span>
            </div>
            <div className="col-lg-4">
              <input type="text" className="form-control" />
              <span className="error-input">Укажите E-mail</span>
            </div>
            <div className="col-lg-5">
              <div className="info-input">
                <span>Можно изменить адрес, указанный при регистрации. </span>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="form-wrapper">
            <div className="col-lg-3">
              <span className="title-input">Я согласен</span>
            </div>
            <div className="col-lg-4">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                принимать актуальную информацию на емейл
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="form-wrapper">
            <div className="offset-lg-3 col-lg-6">
              <div className="form-btn-submit">
                <button type="button">Изменить</button>
                <label>
                последние изменения 15 мая 2012 в 14:55:17
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
