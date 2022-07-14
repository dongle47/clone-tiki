import React, { useEffect } from "react";
import "./CustomerAccount.scss";

import { sidebarTab } from "../../constraints/Profile";

import Sidebar from "./Sidebar";

function CustomerAccount() {
  const findTabId = () => {
    const curTab = sidebarTab.find((item) =>
      window.location.href.includes(item.link)
    );
    return curTab.id;
  };

  const [selectedTabId, setSelectedTabId] = React.useState(findTabId);

  console.log(findTabId(window.location.href));

  const handleClick = (id) => {
    setSelectedTabId(id);

    const currentTab = sidebarTab.find((item) => item.id === id);
    window.history.replaceState(null, currentTab.text, currentTab.link);
  };

  const content = sidebarTab.map((item) => {
    return <item.content />;
  });

  return (
    <div className="container">
      <div className="customer-account">
        <Sidebar
          selectedTabId={selectedTabId}
          setSelectedTab={setSelectedTabId}
          handleClick={handleClick}
        />
        {content[selectedTabId - 1]}
      </div>
    </div>
  );
}

export default CustomerAccount;
