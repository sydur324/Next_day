import { NavLink } from "react-router-dom";

const LinguisticsNav = () => {
    const journalsNav = [
        { id: 1, name: "Ijlc Home", to: "/ijlc" },
        { id: 2, name: "Current Issue", to: "/ijlc/current-ijlc" },
        { id: 3, name: "Aims & Scope", to: "/ijlc/scope-ijlc" },
        { id: 4, name: "Editorial Boad", to: "/ijlc/editorial-board" },
        { id: 6, name: "Submission", to: "/ijlc/submission" },
        { id: 7, name: "Resources", to: "/ijlc/resources" },
        { id: 9, name: "Journal Policies", to: "/ijlc/policies" },
        { id: 10, name: "Useful Links", to: "/ijlc/usefull_link" },
        { id: 11, name: "Latest Activities", to: "/ijlc/latest_activities" },
        { id: 12, name: "Subscription", to: "/ijlc/subcription" },
        { id: 13, name: "Information", to: "/ijlc/information" },
        { id: 14, name: "Index", to: "/ijlc/index" },
        { id: 15, name: "Archive", to: "/ijlc/archive-ijlc" },
        { id: 8, name: "Browse Journals", to: "/subjects" },
    ]
    return (
        <div className="border lg:w-1/4">
            <div className="bg-[#072159] border-b text-[#fff] text-center font-bold text-lg py-6">
                <h2 >Journal Menu</h2>
            </div>
            {
                journalsNav.map(nav => <li className="list-none" key={nav.id}>
                    <NavLink to={nav.to}>
                    <p className="JournalLink">{nav.name}</p>
                    </NavLink>
                </li>)
            }
        </div>
    );
};

export default LinguisticsNav;