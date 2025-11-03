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
// 	crew: string[];
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

// const SPACEX_API = "https://api.spacexdata.com/v4";

// async function fetchLaunchCrew(launchId: string): Promise<CrewMember[]> {
// 	const res = await fetch(`${SPACEX_API}/launches/${launchId}`);
// 	if (!res.ok) throw new Error(`Failed to fetch launch ${launchId}: ${res.status}`);

// 	const launch: Launch = await res.json();

// 	const crewDetails = await Promise.all(
// 		launch.crew.map(async (crewId) => {
// 			const crewRes = await fetch(`${SPACEX_API}/crew/${crewId}`);
// 			if (!crewRes.ok) throw new Error(`Failed to fetch crew ${crewId}: ${crewRes.status}`);
// 			return (await crewRes.json()) as CrewMember;
// 		})
// 	);

// 	return crewDetails;
// }

// async function fetchCompanyInfo(): Promise<SpaceACompanyInfo> {
// 	const res = await fetch(`${SPACEX_API}/company`);
// 	if (!res.ok) throw new Error(`HTTP error: ${res.status}`);
// 	return res.json() as Promise<SpaceACompanyInfo>;
// }

// async function fetchLaunches(): Promise<Launch[]> {
// 	const res = await fetch(`${SPACEX_API}/launches/past`);
// 	if (!res.ok) throw new Error(`HTTP error: ${res.status}`);
// 	return res.json() as Promise<Launch[]>;
// }

// neptune.Shell.attachInit(async function () {
// 	try {
// 		const [company, launches] = await Promise.all([
// 			fetchCompanyInfo(),
// 			fetchLaunches()
// 		]);

// 		const launchesWithCrew = launches.filter((launch) => launch.crew?.length > 0);

// 		for (const launch of launchesWithCrew) {
// 			launch.crewMembers = await fetchLaunchCrew(launch.id);
// 		}
// 		modelFormLaunch.setData(launchesWithCrew[0]);
// 		modelListCrew.setData(launchesWithCrew[0].crewMembers);

// 		modelSpaceA.setData({
//             ...company,
//             launches: launchesWithCrew,
//         });

// 	} catch (error) {
// 		console.error("One or more API calls failed:", error);
// 	}
// }, null);