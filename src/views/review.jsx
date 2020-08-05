import React from 'react'

const Review = () => {
  return (
    <>
      <header >
        <div class="container">
          <div class="headLeft">
            <div class="logo">
              Проверка ТС
        </div>

          </div>
          <div class="headRight">
            <span class="register">Регистрация</span>
            <span class="checkHead">Войти</span>
          </div>


          <div class="loginUserBlock">
            <span class="userLogin">kapitalinvestkom@yandex.ru<span class="_2Igic"></span></span>
            <div class="loginUserHidden">
              <a href="#">Мои отчеты</a>
              <a href="#">Профиль</a>
              <a href="#">Обратная связь</a>
              <a href="#" class="outAccount">Выйти</a>
            </div>
          </div>
        </div>
      </header>
      <div class="reviewSection">



        <div class="container">
          <h1>Мои отчёты</h1>
        </div>


        <div class="reviewsList">
          <div class="container">


            <table>
              <thead>
                <tr>
                  <th aria-label="">Дата покупки</th>
                  <th aria-label="">Марка и модель</th>
                  <th aria-label="">VIN-номер</th>
                </tr>
              </thead>
              <tr>
                <td aria-label="Дата покупки">6 июня</td>
                <td aria-label="Марка и модель">TOYOTA CAMRY, 2015 <span>2.5 л</span></td>
                <td aria-label="VIN-номер">XW7BF4FK10S108048</td>
              </tr>
              <tr>
                <td aria-label="Дата покупки">7 июня</td>
                <td aria-label="Марка и модель">TOYOTA CAMRY, 2015 <span>2.5 л</span></td>
                <td aria-label="VIN-номер">XW7BF4FK10S108048</td>
              </tr>
              <tr>
                <td aria-label="Дата покупки">8 июня</td>
                <td aria-label="Марка и модель">TOYOTA CAMRY, 2015 <span>2.5 л</span></td>
                <td aria-label="VIN-номер">XW7BF4FK10S108048</td>
              </tr>
            </table>


          </div>

        </div>

      </div>



      <div class="backgroundPopup"></div>

      <div class="popupLogin">
        <i class="_3BUWW"></i>
        <h3>Вход</h3>
        <form >
          <input type="text" placeholder="Ваша электронная почта" required />
          <input type="text" placeholder="Ваш пароль" required />
          <input type="submit" value="Войти" />
        </form>
        <a href="#" class="remindPassword">Восстановить пароль</a>
        <span class="registerLink">Зарегистрироваться</span>
      </div>

      <div class="popupRegister">
        <i class="_3BUWW"></i>
        <h3>Регистрация</h3>
        <form >
          <input type="text" placeholder="Электронная почта*" required />
          <input type="text" placeholder="Пароль*" required />
          <input type="submit" value="Зарегистрироваться" />
        </form>
        <p>При регистрации вы принимаете <a href="#">политику обработки персональных данных</a></p>
      </div>

    </>
  )
}

export default Review