import { useEffect, useRef, useState } from 'react';

interface TabsProps {
    tabs: string[];
    activeTab: string;
    setActiveTab: (tab: string) => void;
  }
  

const Tabs: React.FC<TabsProps> = ({ tabs, activeTab, setActiveTab }) => {

    const [indicatorWidth, setIndicatorWidth] = useState(0);
    const [indicatorLeft, setIndicatorLeft] = useState(0);
    const [fullLineWidth, setFullLineWidth] = useState(0);
    const tabsRef = useRef<HTMLDivElement>(null);
    const tabsCoverRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const widthOfTabs = tabsCoverRef.current?.getBoundingClientRect().width;
        if (widthOfTabs) {
            setFullLineWidth(widthOfTabs);
        }
    }, []);

    useEffect(() => {
        const activeTabElement = tabsRef.current?.querySelector('.active-tab');
        if (activeTabElement) {
        const tabRect = activeTabElement.getBoundingClientRect();
        setIndicatorWidth(tabRect.width);
        setIndicatorLeft(tabRect.left - tabsRef.current!.getBoundingClientRect().left);
        }
    }, [activeTab]);

    const handleTabClick = (tab: string) => {
        setActiveTab(tab);
    };

    return (
        <div className="flex flex-col items-start relative" ref={tabsRef}>
            <div className="flex" ref={tabsCoverRef}>
                {tabs.map((tab, ind) => (
                <button
                    key={tab}
                    className={`px-4 py-2 ${ind !== tabs.length - 1 && "mr-4"} focus:outline-none ${activeTab === tab ? 'active-tab text-rich-black font-semibold' : 'text-gray-500 font-medium'}`}
                    onClick={() => handleTabClick(tab)}
                >
                    {tab}
                </button>
                ))}
            </div>
            <div
                className="absolute -bottom-2 left-0 bg-gray-300 rounded"
                style={{
                width: `${fullLineWidth}px`,
                height: '4px',
                }}
            >
                <div
                className="bg-blue-600  h-full transition-all duration-300 rounded"
                style={{
                    width: `${indicatorWidth}px`,
                    transform: `translateX(${indicatorLeft}px)`,
                }}
                />
            </div>
        </div>
    );
};

export default Tabs;