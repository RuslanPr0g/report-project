import React from 'react';
import { useState } from 'react';
import HeaderNav from './header'



function MainPage(){
    
    return (
        <React.Fragment>
            <HeaderNav />
            <div class="container">
                <div class="main-page">
                    <div class="main-page__content">
                        <h1>Проверка заемщиков и залога</h1>
                        <p>Statsnet X дает финансовым организациям возможность комплексно оценивать заемщика и <br/> состояние залога в режиме одного окна.</p>
                        <input type="text" name="" placeholder="ИНН"/>
                        <div class="divFlex">
                        <ul>
                                <li><a href="">ФИО</a></li>
                                <li><a href="">Дата рождения</a></li>
                                <li><a href="">Место рождения</a></li>
                                <li><a href="">Адрес регистрации</a></li>
                                <li><a href="">Статус жизни</a></li>
                                <li><a href="">Разрешение на выезд</a></li>
                                <li><a href="">Исполнительные производства</a></li>
                                <li><a href="">Налоговая задолженность</a></li>
                                <li><a href="">Индивидуальный предприниматель</a></li>
                                <li><a href="">Уголовный розыск</a></li>
                                <li><a href="">Семейный статус</a></li>
                                <li><a href="">ИС ЗАГС</a></li>
                            </ul>
                            <ul class="main-page__list">
                                <li><a href="">Кредитный отчет</a></li>
                                <li><a href="">Отчет по доп. источникам</a></li>
                                <li><a href="">Отчет по доходам, АСП и ЕСП</a></li>
                                <li><a href="">Судебные дела</a></li>
                                <li><a href="">Родители</a></li>
                                <li><a href="">Супруг</a></li>
                                <li><a href="">Связь с финансированием терроризма</a></li>
                                <li><a href="">Публичные должностные лица</a></li>
                                <li><a href="">Регистрационные действия ТС</a></li>
                                <li><a href="">Отчет по ТС РФ</a></li>
                                <li><a href="">Аффилированность с ЮЛ</a></li>
                                <li><a href="">Соцсети</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default MainPage;