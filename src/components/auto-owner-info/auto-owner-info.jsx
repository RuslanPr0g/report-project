import React from "react";
import BaseSpacing from "../base-spacing/base-spacing";
import * as styles from "./auto-owner-info.module.css";
import {
  parseOwnerPrivatePractise,
  parseGender,
  parseDate,
  parseStatus,
} from "../../utils/helpers/jsonParsers";
import { lang } from "../../assets/lang";

const AutoOwnerInfo = ({ infoObject }) => {
  const {
    first_name,
    middle_name,
    last_name,
    birth_date,
    gender,
    age,
    address,
    capable,
    resident,
    has_actual_documents,
    entrepreneur = {},
    private_practiсe,
    phone,
    status,
  } = infoObject;

  return (
    <div className={styles.autoOwnerInfo}>
      <h2>
        {first_name} {middle_name} {last_name}
      </h2>
      <span>
        {parseGender(gender)}, {age} лет
      </span>

      <BaseSpacing size={3} />

      <table className={styles.table}>
        <tbody valign="top">
          <tr>
            <td>Статус</td>
            <td>{status ? parseStatus(status) : lang.common.nodata}</td>
          </tr>
          <tr>
            <td>Дата рождения</td>
            <td>{birth_date ? parseDate(birth_date) : lang.common.nodata}</td>
          </tr>
          <tr>
            <td>Адрес регистрации</td>
            <td>{address || lang.common.nodata}</td>
          </tr>
          <tr>
            <td>Дееспособен</td>
            <td>{capable ? lang.common.yes : lang.common.no}</td>
          </tr>
          <tr>
            <td>Резидент</td>
            <td>{resident ? lang.common.yes : lang.common.no}</td>
          </tr>
          <tr>
            <td>Имеет действующие документы</td>
            <td>{has_actual_documents ? lang.common.yes : lang.common.no}</td>
          </tr>
          <tr>
            <td>Является ИП</td>
            <td>
              {Object.keys(entrepreneur).length ? (
                <>
                  <div>{entrepreneur.legal_name_ru}</div>
                  <div>{entrepreneur.legal_name_kz}</div>
                  <div>{entrepreneur.last_updated}</div>
                  <div>
                    {entrepreneur.bank_accounts &&
                      entrepreneur.bank_accounts.length}{" "}
                    банковских счетов
                  </div>
                </>
              ) : (
                lang.common.no
              )}
            </td>
          </tr>
          <tr>
            <td>Частная практика</td>
            <td>{parseOwnerPrivatePractise(private_practiсe)}</td>
          </tr>
          <tr>
            <td>Телефон</td>
            <td>{phone || lang.common.nodata}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AutoOwnerInfo;
