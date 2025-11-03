// interface SpaceACompanyInfo {
// 	name: string;
// 	founder: string;
// 	founded: number;
// 	employees: number;
// 	vehicles: number;
// 	launch_sites: number;
// 	valuation: number;
// 	ceo: string;
// 	coo: string;
// 	cto: string;
// 	headquarters: {
// 		address: string;
// 		city: string;
// 		state: string;
// 	};
// 	links: {
// 		website: string;
// 		twitter: string;
// 		elon_twitter: string;
// 	};
// 	summary: string;
// }

// interface CrewMember {
// 	id: string;
// 	name: string;
// 	agency: string;
// 	image: string;
// 	wikipedia: string;
// 	status: string;
// }

// interface Launch {
// 	id: string;
// 	name: string;
// 	date_utc: string;
// 	success: boolean | null;
// 	details: string | null;
// 	crew: string[]; // crew is an array of IDs from the API
//     crewMembers: CrewMember[],
// 	links: {
// 		webcast: string | null;
// 		article: string | null;
// 		patch: {
// 			small: string | null;
// 			large: string | null;
// 		};
// 	};
// }

neptune.Shell.attachInit(async function () {
	modelSpaceA.setData(SpaceNepData);
	modelFormLaunch.setData(SpaceNepData.launches[0]);
	modelListCrew.setData(SpaceNepData.launches[0].crewMembers);
}, null);