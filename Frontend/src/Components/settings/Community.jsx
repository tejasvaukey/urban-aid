// import React from "react";
// import { FaUsers, FaRegCalendarAlt, FaClipboardList, FaGift } from "react-icons/fa";

// const Community = () => {
//   const communitySections = [
//     {
//       id: 1,
//       title: "Discussion Forum",
//       description: "Engage in conversations with fellow users about services, experiences, and tips.",
//       icon: <FaClipboardList className="text-xl text-blue-500" />,
//       link: "/forums",
//     },
//     {
//       id: 2,
//       title: "Event Calendar",
//       description: "Stay updated with upcoming community events and webinars. RSVP and join the fun!",
//       icon: <FaRegCalendarAlt className="text-xl text-green-500" />,
//       link: "/events",
//     },
//     {
//       id: 3,
//       title: "User Profiles & Achievements",
//       description: "See who’s making an impact in the community and check out their achievements.",
//       icon: <FaUsers className="text-xl text-purple-500" />,
//       link: "/profiles",
//     },
//     {
//       id: 4,
//       title: "Rewards & Badges",
//       description: "Earn rewards for participating in the community and help others succeed.",
//       icon: <FaGift className="text-xl text-yellow-500" />,
//       link: "/rewards",
//     },
//   ];

//   return (
//     <div className="max-w-7xl mx-auto p-6 space-y-8">
//       {/* Page Title */}
//       <h1 className="text-4xl font-extrabold text-gray-700">Community</h1>

//       {/* Community Sections */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//         {communitySections.map((section) => (
//           <div
//             key={section.id}
//             className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300"
//           >
//             <div className="flex items-center space-x-4">
//               <div className="p-3 bg-blue-50 rounded-full">{section.icon}</div>
//               <div>
//                 <h2 className="text-xl font-semibold text-gray-800">{section.title}</h2>
//                 <p className="text-gray-600 mt-2">{section.description}</p>
//                 <a
//                   href={section.link}
//                   className="mt-4 inline-block text-blue-600 hover:text-blue-800"
//                 >
//                   Explore &rarr;
//                 </a>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Featured Members (Leaderboard) */}
//       <div className="bg-gray-50 p-6 rounded-lg shadow-md">
//         <h2 className="text-2xl font-semibold text-gray-800">Top Contributors</h2>
//         <div className="space-y-4 mt-4">
//           {/* Loop through top contributors */}
//           {[1, 2, 3].map((member) => (
//             <div key={member} className="flex items-center space-x-4">
//               <img
//                 src={`https://via.placeholder.com/40?text=U${member}`}
//                 alt={`User ${member}`}
//                 className="rounded-full w-12 h-12"
//               />
//               <div>
//                 <h3 className="text-lg font-semibold text-gray-700">User {member}</h3>
//                 <p className="text-sm text-gray-600">Contributions: 25 Posts</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Event Highlights */}
//       <div className="bg-white p-6 rounded-lg shadow-md">
//         <h2 className="text-2xl font-semibold text-gray-800">Upcoming Events</h2>
//         <div className="space-y-4 mt-4">
//           {/* Loop through events */}
//           {[1, 2].map((event) => (
//             <div key={event} className="flex justify-between items-center">
//               <div>
//                 <h3 className="text-lg font-semibold text-gray-700">Event {event}</h3>
//                 <p className="text-sm text-gray-600">Date: January 10, 2025</p>
//               </div>
//               <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200">
//                 RSVP
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Community;



import React from "react";
import { FaUsers, FaRegCalendarAlt, FaClipboardList, FaGift } from "react-icons/fa";

const Community = () => {
  const communitySections = [
    {
      id: 1,
      title: "Discussion Forum",
      description: "Engage in conversations with fellow users about services, experiences, and tips.",
      icon: <FaClipboardList className="text-xl text-blue-500" />,
      link: "/forums",
    },
    {
      id: 2,
      title: "Event Calendar",
      description: "Stay updated with upcoming community events and webinars. RSVP and join the fun!",
      icon: <FaRegCalendarAlt className="text-xl text-green-500" />,
      link: "/events",
    },
    {
      id: 3,
      title: "User Profiles & Achievements",
      description: "See who’s making an impact in the community and check out their achievements.",
      icon: <FaUsers className="text-xl text-purple-500" />,
      link: "/profiles",
    },
    {
      id: 4,
      title: "Rewards & Badges",
      description: "Earn rewards for participating in the community and help others succeed.",
      icon: <FaGift className="text-xl text-yellow-500" />,
      link: "/rewards",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-8">
      {/* Page Title */}
      <h1 className="text-4xl font-extrabold text-gray-700">Community</h1>

      {/* Community Sections */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {communitySections.map((section) => (
          <div
            key={section.id}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300"
          >
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-blue-50 rounded-full">{section.icon}</div>
              <div>
                <h2 className="text-xl font-semibold text-gray-800">{section.title}</h2>
                <p className="text-gray-600 mt-2">{section.description}</p>
                <a
                  href={section.link}
                  className="mt-4 inline-block text-blue-600 hover:text-blue-800"
                >
                  Explore &rarr;
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Featured Members (Leaderboard) */}
      <div className="bg-gray-50 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800">Top Contributors</h2>
        <div className="space-y-4 mt-4">
          {/* Loop through top contributors */}
          {[1, 2, 3].map((member) => (
            <div key={member} className="flex items-center space-x-4">
              <img
                src={`https://via.placeholder.com/40?text=U${member}`}
                alt={`User ${member}`}
                className="rounded-full w-12 h-12"
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-700">User {member}</h3>
                <p className="text-sm text-gray-600">Contributions: 25 Posts</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Event Highlights */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800">Upcoming Events</h2>
        <div className="space-y-4 mt-4">
          {/* Loop through events */}
          {[1, 2].map((event) => (
            <div key={event} className="flex justify-between items-center">
              <div>
                <h3 className="text-lg font-semibold text-gray-700">Event {event}</h3>
                <p className="text-sm text-gray-600">Date: January 10, 2025</p>
              </div>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200">
                RSVP
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-gray-50 p-6 rounded-lg shadow-md mt-8">
        <h2 className="text-2xl font-semibold text-gray-800">Frequently Asked Questions</h2>
        <div className="space-y-4 mt-4">
          {/* FAQ item */}
          {[1, 2, 3].map((faq) => (
            <div key={faq} className="border-b py-3">
              <h3 className="text-lg font-medium text-gray-700">How do I participate in community events?</h3>
              <p className="text-gray-600 mt-2">
                You can view and RSVP for upcoming events in the event calendar section. Join the conversation and learn
                new skills.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Community;
