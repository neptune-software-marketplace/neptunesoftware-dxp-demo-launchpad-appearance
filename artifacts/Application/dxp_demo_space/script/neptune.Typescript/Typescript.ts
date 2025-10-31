interface CrewMember {
  name: string;
  agency: string;
  image: string;
  wikipedia: string;
  status: string;
}

interface Launch {
  name: string;
  date_utc: string;
  success: boolean | null;
  details: string | null;
  crew: CrewMember[],
  links: {
    webcast: string | null;
    article: string | null;
    patch: {
      small: string | null;
      large: string | null;
    };
  };
}

const SPACEX_API = "https://api.spacexdata.com/v4/launches/past";

async function getLaunchCrew(launchId: string): Promise<CrewMember[]> {
    const BASE_URL = "https://api.spacexdata.com/v4";

    const launchResponse = await fetch(`${BASE_URL}/launches/${launchId}`);
    const launch: Launch = await launchResponse.json();

    const crewData = await Promise.all(
        launch.crew.map(async (id) => {
            const res = await fetch(`${BASE_URL}/crew/${id}`);
            const member: CrewMember = await res.json();
            return member;
        })
    );
    return crewData;
}

async function fetchPastLaunches(): Promise<Launch[] | null> {
  try {
    const response = await fetch(SPACEX_API);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Parse JSON response and cast it to our Launch type
    const data: Launch = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch SpaceX data:", error);
    return null;
  }
}

// Run the function (for standalone testing)
fetchPastLaunches().then((launches) => {
    if (!launches) return;
    const launchesWithCrew = launches.filter((obj) => obj.crew.length);
    console.table(launchesWithCrew);

    modelListLaunches.setData(launchesWithCrew);

    launchesWithCrew.forEach((obj) => {
        getLaunchCrew(obj.id).then((crew) => {
            console.log(`🚀 ${obj.name} (${crew.length} members):`);
                crew.forEach((member) => {
                console.log(`👨‍🚀 ${member.name} (${member.agency}) – ${member.status}`);
            });
        });
    })
});