import React from "react";

function HoraireTable(infos) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Jours</th>
          <th scope="col">Heures</th>
          <th scope="col">Remarques</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Lundi</td>
          <td>19h00 - 22h00</td>
          <td>-</td>
        </tr>
        <tr>
          <td>Mardi</td>
          <td>19h00 - 21h00</td>
          <td>-</td>
        </tr>
        <tr>
          <td>Dimanche</td>
          <td>10h00 - 13h00</td>
          <td>Buvette ouverte jusque 14h</td>
        </tr>
      </tbody>
    </table>
  );
}

export default HoraireTable;
