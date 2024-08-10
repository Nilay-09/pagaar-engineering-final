import { ChangeEvent, useState, useEffect, useMemo } from "react";

interface FilterBottomSheetProps {
  activeTab: string;
  facets: any;
  isOpen: boolean;
  onFilterChange: (label: string, value: string, checked: boolean) => void;
}

interface Item {
  label: string;
  count: number | null;
}

const FilterBottomSheet: React.FC<FilterBottomSheetProps> = ({
  activeTab,
  facets,
  isOpen,
  onFilterChange,
}) => {
  const [checkedItems, setCheckedItems] = useState<{ [key: string]: boolean }>({});
  const [allItems, setAllItems] = useState<{ [key: string]: Item[] }>({});

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  useEffect(() => {
    const items = getItems();
    setAllItems((prevAllItems) => ({
      ...prevAllItems,
      [activeTab]: items,
    }));

    const newCheckedItems: { [key: string]: boolean } = {};
    items.forEach(item => {
      newCheckedItems[item.label] = checkedItems[item.label] || false;
    });
    setCheckedItems(newCheckedItems);
  }, [facets, activeTab]);

  const handleCheckboxChange = (label: string) => (event: ChangeEvent<HTMLInputElement>) => {
    const newCheckedItems = { ...checkedItems, [label]: event.target.checked };
    setCheckedItems(newCheckedItems);
    onFilterChange(activeTab, label, event.target.checked);
  };

  const formatLabel = (label: string) => {
    return label
      .toLowerCase()
      .split("_")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const getItems = () => {
    const tabMap: { [key: string]: any } = {
      Category: facets.category,
      Role: facets.sub_category,
      Company: facets.company,
      Locations: facets.locations,
    };

    const items = tabMap[activeTab];

    if (Array.isArray(items)) {
      return items.map((item) => ({ label: item, count: null }));
    }

    return items
      ? Object.keys(items).map((key) => ({
          label: key,
          count: items[key],
        }))
      : [];
  };

  const items = useMemo(() => allItems[activeTab] || [], [activeTab, allItems]);

  return (
    <div className="px-[0.625rem] w-full relative">
      <div className="fixed w-full bg-white h-[54px] px-6 py-[20px] poppins-medium text-[1.25rem] text-[#000] border-t border-black leading-6">
        {activeTab}
      </div>

      <div className="flex justify-between flex-col">
        <div className="w-full h-[350px] overflow-scroll overflow-x-hidden scrollbar-hide pt-[3.375rem] pb-[4.25rem]">
          {items.length > 0 ? (
            items.map((item, index) => (
              <div
                key={index}
                className="w-full h-[3.5rem] justify-between items-center border-b-2 border-b-[#F1F1F1] pl-6 pr-4"
              >
                <label className="flex w-full h-full items-center justify-between cursor-pointer">
                  <div className="poppins-300 text-[1.125rem] leading-7">
                    {item.count === null
                      ? item.label
                      : `${formatLabel(item.label)} (${item.count})`}
                  </div>
                  <input
                    type="checkbox"
                    className={`w-6 h-6 outline-solid outline-black transition-all duration-300 ease-in-out rounded-sm border-none ${
                      checkedItems[item.label]
                        ? "shadow-checkbox-icon rounded-lg"
                        : ""
                    }`}
                    checked={checkedItems[item.label] || false}
                    onChange={handleCheckboxChange(item.label)}
                    id={`checkbox-${index}`}
                  />
                </label>
              </div>
            ))
          ) : (
            <div className="poppins-300 text-[1.125rem] leading-7 text-center">
              No options available
            </div>
          )}
        </div>
        <div className="w-full h-[116px] px-6 py-[20px] poppins-medium text-[1.25rem] text-[#000] leading-6 pb-[8.25rem] ">
          <button
            className="w-full h-[64px] rounded border-black border-2 flex justify-center items-center bg-[#BDA6FF] text-white"
            onClick={() => {}}
          >
            Apply Filter
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterBottomSheet;
