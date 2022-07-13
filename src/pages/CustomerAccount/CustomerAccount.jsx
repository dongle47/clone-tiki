import React from "react";
import "./CustomerAccount.scss";

import { sidebarTab } from "../../constraints/Profile";

import Sidebar from "./Sidebar";


function CustomerAccount() {
  const [selectedTab, setSelectedTab] = React.useState(sidebarTab[0].id);

  const handleListItemClick = (id) => {
    setSelectedTab(id);
    console.log(id);
  };

  const handleTab = sidebarTab[selectedTab - 1].content

  return (
    <>
      <div className="customer-account">
        <Sidebar
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
          handleListItemClick={handleListItemClick}
        />
        {handleTab()}
      </div>
    </>
  );
}

export default CustomerAccount;
