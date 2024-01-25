import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const SongRow = ({ description, year, duration }) => {
  return (
    <table className="subtable">
      <thead>
        <tr className="subtr">
          <th>Description</th>
          <th>Year</th>
          <th>Duration</th>
        </tr>
      </thead>
      <tbody>
        <tr className="subtr">
          <td>{description}</td>
          <td>{year}</td>
          <td>{duration}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default SongRow;
