import React from "react";
import style from "./Table.module.scss";

function HoraireTable({ infos }) {
  return (
    <table className="table">
      <thead>
        <tr className={style.head}>
          <th scope="col">Jours</th>
          <th scope="col">Heures</th>
          <th scope="col">Remarques</th>
        </tr>
      </thead>
      <tbody>
        {infos.map((i) => (
          <tr key={i.id}>
            <td>{i.day}</td>
            <td>
              {i.start} - {i.end}
            </td>
            <td>{i.details}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default HoraireTable;
