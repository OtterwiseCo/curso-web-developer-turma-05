import React from "react";

function List(props) {
  const { data } = props;
  return data
    .filter((_, index) => index < 10)
    .map((item) => {
      return <li>{JSON.stringify(item)}</li>;
    });
}

export default List;
