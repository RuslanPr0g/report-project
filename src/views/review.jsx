import React from 'react'
import HeaderNav from './header'

const Review = () => {
  return (
    <>
      <HeaderNav />
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
                    <th aria-label="">Заемщик</th>
                    <th aria-label="">Автомобиль</th>
                    <th aria-label="">Статус</th>
                  </tr>
              </thead>
                <tr>
                    <td aria-label="Марка и модель">12.12.2012</td>
                    <td aria-label="Марка и модель">Иванов Петр Иванович<span>ИИН 990418000251</span></td>
                    <td aria-label="VIN-номер">Skoda Octavia, 2004<span>VIN XW7BF4FK10S108048</span></td>
                    <td aria-label="VIN-номер">Статус</td>
                </tr>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default Review