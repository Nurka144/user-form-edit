import './App.css';
import cities from './cities.json'
import { useState } from 'react'

function App() {

  const [userData, setUserData] = useState({city: '', email: '', password: '', newByEmail: false})

  const [passwordVerify, setVerifyPassword] = useState("");

  const [checkCity, setCheckCity] = useState(false);
  const [checkPassword, setCheckPassword] = useState(false);
  const [checkPasswordVerify, setCheckPasswordVerify] = useState(false);
  const [checkEmail, setCheckEmail] = useState(false);
  const [editBtnState, setEditBtnState] = useState(false);

  const [errorCityData, setErrorCityData] = useState("");
  const [errorPasswordData, setErrorPasswordData] = useState("");
  const [errorPasswordVerifyData, setErrorPasswordVerifyData] = useState("");
  const [errorEmailData, setErrorEmailData] = useState("");

  const cityItem = cities.map(item => item.population > 50000 ? <option value={item.city} key={item.city}>{item.city}</option> : null);

  const changeHandler = (e) => {
    if (e.target.name === 'password' && e.target.value.length <= 5) {
      setErrorPasswordData('Пароль должен состоять больше 5 символов');
      setCheckPassword(true);
      return
    } else if (e.target.name === 'password' && e.target.value.length > 5) {
      setCheckPassword(false);
    }
    if (e.target.name === 'verify-password' && e.target.value !== userData.password) {
      setErrorPasswordVerifyData('Пароли не совпадают');
      setCheckPasswordVerify(true);
      return
    } else if (e.target.name === 'verify-password' && e.target.value === userData.password){
      setCheckPasswordVerify(false);
      setVerifyPassword(e.target.value)
      return
    }
    setUserData({...userData, [e.target.name]: e.target.value});
  }

  const editBtn = () => {
    setCheckCity(false);
    setCheckEmail(false);
    setCheckPassword(false);
    setCheckPasswordVerify(false);

    if (!userData.city.trim()) {
      setErrorCityData('Выберите город');
      setCheckCity(true);
      return
    } else if (!userData.password.trim()) {
      setErrorPasswordData('Укажите пароль');
      setCheckPassword(true);
      return
    } else if (!passwordVerify.trim()) {
      setErrorPasswordVerifyData('Пароли не совпадают');
      setCheckPasswordVerify(true);
      return
    } else if (!userData.email.trim()) {
      setErrorEmailData('Введите электронную почту');
      setCheckEmail(true);
      return
    } else if (userData.password.length <= 5) {
      setErrorPasswordData('Пароль должен состоять больше 5 символов');
      setCheckPassword(true);
    }
    console.log(userData);
    setEditBtnState(true);
  }

  const changeStatus = () => {
    console.log('Обновить статус')
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
              <select className="form-select" onChange={changeHandler} name="city">
                {cityItem}
              </select>
              {
                checkCity ? <span className="error-input">{errorCityData}</span> : null
              }
            </div>
          </div>
        </div>
        <div className="row">
          <div className="form-wrapper">
            <div className="col-lg-3">
              <span className="title-input">Пароль</span>
            </div>
            <div className="col-lg-4">
              <input type="text" className="form-control"  name="password" onChange={changeHandler}/>
              {
                checkPassword ? <span className="error-input">{errorPasswordData}</span> : null
              }
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
              <input type="text" className="form-control" onChange={changeHandler} name="verify-password"/>
              {
                checkPasswordVerify ? <span className="error-input">{errorPasswordVerifyData}</span> : null
              }
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
              <input type="text" className="form-control" name="email" onChange={changeHandler}/>
              {
                checkEmail ? <span className="error-input">{errorEmailData}</span> : null
              }
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
                <input className="form-check-input" type="checkbox" name="newByEmail" onChange={changeHandler} id="flexCheckDefault" />
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
                <button type="button" onClick={editBtn}>Изменить</button>
                {
                  editBtnState ? <label>последние изменения {new Date().toLocaleString()}</label> : null
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
