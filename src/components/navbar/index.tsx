import React from "react";
import { LANGUAGES } from "../../constants";
import { NavLink } from "react-router-dom";
import { Select } from "antd";
import { useTranslation } from "react-i18next";
const Navbar = () => {
  const { i18n, t } = useTranslation();

  const onChangeLang = (value: string) => {
    const lang_code = value;
    i18n.changeLanguage(lang_code);
    console.log(`selected ${value}`);
  };
  return (
    <nav>
      <Select
        defaultValue="fa"
        onChange={onChangeLang}
        style={{ width: 120 }}
        options={[
          { value: "fa", label: "فارسی" },
          { value: "en", label: "english" },
        ]}
      />
    </nav>
  );
};

export default Navbar;
