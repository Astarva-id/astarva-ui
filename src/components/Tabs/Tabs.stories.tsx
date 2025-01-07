import ScrollBar from "@components/ScrollBar";
import { Meta } from "@storybook/react";
import React, { useState } from "react";

import Flex from "../Flex";
import Tabs from ".";
import { ItemTabs, TabsProps } from "./Tabs.types";

export default {
  title: "Components/Tabs",
  component: Tabs,
} as Meta<TabsProps>;

export const AllTabs = () => {
  const [currentTab, setCurrentTab] = useState<ItemTabs["value"]>("january");
  const options = [
    { label: "January", value: "january" },
    { label: "February", value: "february" },
    { label: "March", value: "march" },
    { label: "April", value: "april" },
    { label: "May", value: "may" },
    { label: "June", value: "june" },
    { label: "July", value: "july" },
    { label: "August", value: "august" },
    { label: "September", value: "september" },
    { label: "October", value: "october" },
    { label: "November", value: "november" },
    { label: "December", value: "december" },
  ];

  const handleChangeTab = (tab: ItemTabs["value"]) => {
    setCurrentTab(tab);
  };

  return (
    <ScrollBar overflowX="auto" hideScroll gap=".5rem">
      <Flex
        width="80%"
        flexDirection="column"
        fontFamily="sans-serif"
        columnGap=".5rem"
        gap="1rem"
      >
        <Tabs
          activeTab={currentTab}
          options={options}
          onChange={handleChangeTab}
        />
      </Flex>
    </ScrollBar>
  );
};
