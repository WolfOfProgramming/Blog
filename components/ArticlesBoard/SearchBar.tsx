import React, { useState } from "react";
import styles from "./SearchBar.module.scss";

export default function SearchBar() {
  const [value, setValue] = useState("");
  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}
