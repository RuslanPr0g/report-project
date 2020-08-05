import React, {useState} from 'react'
import AutoCheckBlock from '../components/auto-check-block/auto-check-block' 

const Home = () => {
  return (
    <>
      <header className="homeHead">
        <div className="container">
          <div className="headLeft">
            <div className="logo">
              Проверка ТС
            </div>
          </div>
          <div className="headRight">
            <span className="register">Регистрация</span>
            <span className="checkHead">Войти</span>
          </div>


          <div className="loginUserBlock">
            <span className="userLogin">kapitalinvestkom@yandex.ru<span className="_2Igic"></span></span>
            <div className="loginUserHidden">
              <a href="#">Мои отчеты</a>
              <a href="#">Профиль</a>
              <a href="#">Обратная связь</a>
              <a href="#" className="outAccount">Выйти</a>
            </div>
          </div>
        </div>
      </header>

      {/* <!-- <div className="mobVersion">
          <div className="container">
          <div style="display:flex;align-items:center;"><span className="mobClick"></span>
          <p>Отчёт от 1 июня 2019</p></div>

          <a href="#">Скачать отчёт</a>
          </div>
        </div> --> */}

      <div className="container contentFlex">

        <div className="backWhite"></div>

        {/* <!-- <div className="leftBlock">
          <ul id="top-menu">
            <li className="active">
              <a href="#infoAuto" >Данные об автомобиле</a>
            </li>
            <li>
              <a href="#summaryLinks">Сводка по автомобилю</a>
            </li>
            <li>
              <a href="#limitations">Ограничения</a>
            </li>
            <li>
              <a href="#wanted">Розыск</a>
            </li>
            <li>
              <a href="#pledge">Нахождение в залоге</a>
            </li>
            <li>
              <a href="#property">Периоды владения</a>
            </li>
            <li>
              <a href="#accidentDetail">Участие в ДТП</a>
            </li>
            <li>
              <a href="#accident">Расчёт ремонтных работ</a>
            </li>
            <li>
              <a href="#survey">Диагностический осмотр</a>
            </li>
            <li>
              <a href="#history">История эксплуатации</a>
            </li>
            <li>
              <a href="#inspection">Техосмотр</a>
            </li>
            <li>
              <a href="#customs">Таможня</a>
            </li>
            <li>
              <a href="#polis">Полис ОСАГО<div className="_3gHGM _2FSN7" style="color: rgb(246, 84, 88); border-color: rgb(246, 84, 88);"><div className="_3lLdK _2f6AA">НОВИНКА</div></div></a>
            </li>
            <li>
              <a href="#decryption">Расшифровка VIN</a>
            </li>
            <li>
              <a href="#diagnostics">Выездная диагностика</a>
            </li>
          </ul>

        </div> --> */}

        <div className="rightBlock2">
          <AutoCheckBlock/>

          <div className="ourAdventage">
            <p>Мы собираем для отчёта данные из десятков источников. Посмотрите историю автомобиля, чтобы принять верное решение о покупке.</p>
            <div className="adventageFlex adventageFlex1">

              <div>
                <h3>Реальный пробег</h3>
                <p>Если пробег скрутили, покажем когда и на сколько. Сравниваем данные из базы Авто.ру и СТО по всей стране: работаем с Nissan, Fit Service, сетями СТО «Фильтр», «ЕвроАвто», «Вилгуд» и многими другими.</p>
              </div>
            </div>
            <div className="adventageFlex adventageFlex2">

              <div>
                <h3>Размещения на Авто.ру</h3>
                <p>Если машина продавалась у нас раньше, мы дадим ссылки на старые объявления. Можно оценить, как изменилось состояние и описание автомобиля.</p>
              </div>
            </div>
            <div className="adventageFlex adventageFlex3">

              <div>
                <h3>Юридическая чистота</h3>
                <p>Убедитесь, что машина не числится в угоне, не заложена и не имеет ограничений на регистрацию в ГИБДД.</p>
              </div>
            </div>
          </div>
        </div>


      </div>
      
      <footer>
        <div className="container">
          <div className="footerHead">
            <div>
              <a href="#">О проекте</a>
              <a href="#">Правила акции</a>
              <a href="#">Исследование</a>
            </div>
            <div>
              <p>Возникли вопросы? <a href="#">Свяжитесь с нами</a></p>
            </div>
          </div>

          <div className="footerBottom">
            <div>
              <div className="logo">
                Проверка ТС
      </div>
              <div>
                <p>2016-2020. Автотека — сервис проверки автомобиля по VIN коду и госномеру. Оплачивая отчёт Автотеки, вы принимаете <a href="#">условия лицензионного соглашения.</a></p>
                <a href="#" style={{
                  'display': 'block',
                  'lineHeight': '20px',
                }}>Информация о cookies.</a>
                <a href="#" style={{
                  'display': 'block',
                  'lineHeight': '20px',
                }}>Политика о данных пользователей.</a>
              </div>
            </div>
            <div>
              <div className="visaImg"></div>
              <div className="cardImg"></div>
            </div>
          </div>
        </div>

      </footer>

      <div className="backgroundPopup"></div>

      <div className="popupLogin">
        <i className="_3BUWW"></i>
        <h3>Вход</h3>
        <form>
          <input type="text" placeholder="Ваша электронная почта" required />
          <input type="text" placeholder="Ваш пароль" required />
          <input type="submit" value="Войти" />
        </form>
        <a href="#" className="remindPassword">Восстановить пароль</a>
        {/* <!-- <span className="registerLink">Зарегистрироваться</span> --> */}
      </div>

      <div className="popupRegister">
        <i className="_3BUWW"></i>
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

export default Home