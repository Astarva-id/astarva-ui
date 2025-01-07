import Flex from "@components/Flex";
import ScrollBar from "@components/ScrollBar";
import Text from "@components/Text";
import { lodash } from "@utils/lodash";
import React, { useEffect, useRef, useState } from "react";

import { ItemTabs, TabsProps } from "./Tabs.types";

const Tabs: React.FC<TabsProps> = ({ activeTab, options, onChange }) => {
  const tabRefs = useRef<(HTMLElement | null)[]>([]);
  const [currentTab, setCurrentTab] = useState<ItemTabs["value"]>(activeTab);

  const handleCurrentTab = (value: ItemTabs["value"]) => {
    setCurrentTab(value);
    onChange(value);
  };

  const getActiveIndex = (value: ItemTabs["value"]) => {
    if (
      typeof value === "object" &&
      typeof currentTab === "object" &&
      value !== null &&
      currentTab !== null
    ) {
      return lodash.isObjectEqual(value, currentTab);
    }
    return value === currentTab;
  };

  useEffect(() => {
    const activeIndex = options.findIndex((item) => getActiveIndex(item.value));

    if (activeIndex !== -1 && tabRefs.current[activeIndex]) {
      tabRefs.current[activeIndex]?.scrollIntoView({
        behavior: "smooth",
        inline: "start",
        block: "nearest",
      });
    }
  }, [currentTab, options]);

  return (
    <ScrollBar overflowX="auto" hideScroll gap=".5rem">
      {options.map((item, index) => {
        const isActive = getActiveIndex(item.value);
        return (
          <Flex
            ref={(el) => {
              tabRefs.current[index] = el;
            }}
            key={index}
            justifyContent="center"
            alignItems="center"
            padding=".25rem 1.5rem"
            borderRadius="2.5rem"
            cursor="pointer"
            backgroundColor={isActive ? "blue400" : "white"}
            border=".0625rem solid"
            borderColor="blue400"
            onClick={() => handleCurrentTab(item.value)}
          >
            <Text
              variant="small"
              color={isActive ? "white" : "blue400"}
              weight="medium"
            >
              {item.label}
            </Text>
          </Flex>
        );
      })}
    </ScrollBar>
  );
};

export default Tabs;
