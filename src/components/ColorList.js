import React from "react";

function ColorList() {
  const colors = [
    "firebrick",
    "rebeccapurple",
    "salmon",
    "darkslategray",
    "hotpink",
  ];
  const users = [
    { id: 1, username: "ankim" }, {
      id: 2, username: "wtsaa"
    }
  ]
  const colorList = colors.map((color) => {
    return (<li key={color} style={{ color: color }}>{color}</li>)
  })

  const userNames = users.map((user=>{
    return(<li key={user.id}>{user.username}</li>)
  }))
  return (
    <div>
      <h1>Top 5 CSS Colors</h1>
      <ol>
        {colorList}
      </ol>
      <h2>Users</h2>
      <ul>{userNames}</ul>
    </div>
  );
}

export default ColorList;
