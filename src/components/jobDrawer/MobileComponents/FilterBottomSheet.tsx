import { ChangeEvent, useState, useMemo } from "react";

interface FilterBottomSheetProps {
    activeTab: string;
    facets: any;
}

const FilterBottomSheet: React.FC<FilterBottomSheetProps> = ({
    activeTab,
    facets
}) => {
    const [isChecked, setIsChecked] = useState<boolean[]>([]);

    const handleCheckboxChange = (index: number) => (event: ChangeEvent<HTMLInputElement>) => {
        const newChecked = [...isChecked];
        newChecked[index] = event.target.checked;
        setIsChecked(newChecked);
    };

    const formatLabel = (label: string) => {
        return label
            .toLowerCase()
            .split('_')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    };

    const getItems = () => {
        const tabMap: { [key: string]: any } = {
            Category: facets.category,
            Role: facets.sub_category,
            Company: facets.company,
            Locations: facets.locations,
            Designation: ["SDE - 1", "SDE - 2", "SDE - 3"]
        };

        const items = tabMap[activeTab];

        if (Array.isArray(items)) {
            return items.map(item => ({ label: item, count: null }));
        }

        return items
            ? Object.keys(items).map(key => ({
                label: formatLabel(key),
                count: items[key]
            }))
            : [];
    };

    const items = useMemo(getItems, [activeTab, facets]);

    return (
        <div className="px-[0.625rem] w-full relative">
            <div className="fixed w-full bg-white h-[54px] px-6 py-[20px] poppins-medium text-[1.25rem] text-[#000] leading-6">
                {activeTab}
            </div>

            <div className="w-full h-[450px] overflow-scroll overflow-x-hidden scrollbar-hide pt-[3.375rem] pb-[8.25rem]">
                {items.length > 0 ? (
                    items.map((item, index) => (
                        <div key={index} className="w-full h-[3.5rem] justify-between items-center border-b-2 border-b-[#F1F1F1] pl-6 pr-4">
                            <div className="flex w-full h-full items-center justify-between ">
                                <div className="poppins-300 text-[1.125rem] leading-7">
                                    {item.count === null ? item.label : `${item.label} (${item.count})`}
                                </div>
                                <div>
                                    <input
                                        type="checkbox"
                                        className={`w-6 h-6 outline-solid outline-black transition-all duration-300 ease-in-out rounded-sm border-none ${isChecked[index] ? 'shadow-checkbox-icon rounded-lg' : ''}`}
                                        onChange={handleCheckboxChange(index)}
                                    />
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="poppins-300 text-[1.125rem] leading-7 text-center">No options available</div>
                )}

                <div className="w-full bg-red-300 fixed bottom-0 h-[54px] px-6 py-[20px] poppins-medium text-[1.25rem] text-[#000] leading-6 pb-[8.25rem] ">
                    Apply
                </div>
            </div>


        </div>
    );
};

export default FilterBottomSheet;
