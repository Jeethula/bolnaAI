// "use client";
// import Tabs from "@ui/components/TabSelector";
// import { useState } from "react";

// export default function Home() {
// 	const tabs = ['Team','General','projects','Post-booking','Overall'];
//     const [activeTab, setActiveTab] = useState(tabs[0]);

//     let content:string | null;
//     switch (activeTab) {
//         case 'Team':
//         content = "from Team tab";
//         break;
//         case 'General':
//         content = "from General tab";
//         break;
//         case 'projects':
//         content = "from projects tab";
//         break;
// 		case 'Post-booking':
// 		content = "from Post-booking tab";
// 		break;
//         case 'Overall':
//         content = "from Overall tab";
//         break;
//         default:
//         content = null;
//     }
// 	return (
// 		<div className="pt-48 pl-32">
// 		  <Tabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
// 		  <div className="pt-4">
// 		  {content}		
// 		  </div>
	
// 		</div>
// 	);
// }
