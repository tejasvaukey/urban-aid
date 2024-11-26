// import React, { useState } from 'react';

// const Referrals = () => {
//   const [referralCode, setReferralCode] = useState('ABC123');
//   const [referrals, setReferrals] = useState({
//     total: 25,
//     successful: 15,
//     pending: 10,
//   });
//   const [reward, setReward] = useState({
//     total: 100,
//     goal: 150,
//     progress: 0.67,
//   });

//   return (
//     <div className="max-w-7xl mx-auto p-6">
//       {/* Header */}
//       <div className="flex justify-between items-center mb-6">
//         <h1 className="text-3xl font-bold text-gray-700">Referral Program</h1>
//       </div>

//       {/* Referral Code and Share Link */}
//       <div className="bg-white shadow-md rounded-lg p-6 mb-6">
//         <h2 className="text-xl font-semibold text-gray-800 mb-4">Your Referral Code</h2>
//         <div className="flex items-center space-x-4">
//           <p className="text-lg font-medium text-blue-600">{referralCode}</p>
//           <button
//             onClick={() => navigator.clipboard.writeText(referralCode)}
//             className="bg-blue-500 text-white px-4 py-2 rounded-lg"
//           >
//             Copy Code
//           </button>
//         </div>
//         <p className="text-gray-600 mt-4">
//           Share this code with your friends to earn rewards when they sign up and make their first booking.
//         </p>
//       </div>

//       {/* Referral Link */}
//       <div className="bg-white shadow-md rounded-lg p-6 mb-6">
//         <h2 className="text-xl font-semibold text-gray-800 mb-4">Your Referral Link</h2>
//         <div className="flex items-center space-x-4">
//           <p className="text-lg font-medium text-blue-600">www.example.com/referral?code={referralCode}</p>
//           <button
//             onClick={() => navigator.clipboard.writeText(`www.example.com/referral?code=${referralCode}`)}
//             className="bg-blue-500 text-white px-4 py-2 rounded-lg"
//           >
//             Copy Link
//           </button>
//         </div>
//         <p className="text-gray-600 mt-4">
//           Share this link with your friends via social media or messaging platforms to get credit for their sign-ups.
//         </p>
//       </div>

//       {/* Referral Stats */}
//       <div className="bg-white shadow-md rounded-lg p-6 mb-6">
//         <h2 className="text-xl font-semibold text-gray-800 mb-4">Referral Stats</h2>
//         <div className="grid grid-cols-3 gap-4">
//           <div className="text-center">
//             <h3 className="text-lg font-medium text-gray-800">Total Referrals</h3>
//             <p className="text-2xl font-semibold text-gray-800">{referrals.total}</p>
//           </div>
//           <div className="text-center">
//             <h3 className="text-lg font-medium text-gray-800">Successful Referrals</h3>
//             <p className="text-2xl font-semibold text-green-600">{referrals.successful}</p>
//           </div>
//           <div className="text-center">
//             <h3 className="text-lg font-medium text-gray-800">Pending Referrals</h3>
//             <p className="text-2xl font-semibold text-yellow-600">{referrals.pending}</p>
//           </div>
//         </div>
//       </div>

//       {/* Referral Reward Progress */}
//       <div className="bg-white shadow-md rounded-lg p-6 mb-6">
//         <h2 className="text-xl font-semibold text-gray-800 mb-4">Referral Rewards</h2>
//         <div className="flex justify-between items-center mb-4">
//           <p className="text-lg font-medium text-gray-800">Your Total Reward</p>
//           <p className="text-lg font-medium text-blue-600">${reward.total}</p>
//         </div>
//         <div className="relative mb-4">
//           <div className="w-full h-2 bg-gray-300 rounded-full">
//             <div
//               className="h-full bg-green-500 rounded-full"
//               style={{ width: `${reward.progress * 100}%` }}
//             ></div>
//           </div>
//           <div className="absolute top-0 left-0 right-0 text-center text-xs text-gray-600">
//             {Math.round(reward.progress * 100)}% to your next reward
//           </div>
//         </div>
//         <div className="flex justify-between items-center">
//           <p className="text-lg font-medium text-gray-800">Goal</p>
//           <p className="text-lg font-medium text-blue-600">${reward.goal}</p>
//         </div>
//       </div>

//       {/* Referral Terms & Conditions */}
//       <div className="bg-white shadow-md rounded-lg p-6 mb-6">
//         <h2 className="text-xl font-semibold text-gray-800 mb-4">Referral Program Terms</h2>
//         <p className="text-gray-600">
//           1. Referred friends must sign up and make a successful booking to qualify as a successful referral.
//         </p>
//         <p className="text-gray-600">
//           2. Rewards are issued once the referred user completes their first booking.
//         </p>
//         <p className="text-gray-600">
//           3. Referral rewards may vary based on special promotions.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Referrals;




// import React, { useState } from 'react';

// const Referrals = () => {
//   const [referralCode, setReferralCode] = useState('ABC123');
//   const [referrals, setReferrals] = useState({
//     total: 25,
//     successful: 15,
//     pending: 10,
//   });
//   const [reward, setReward] = useState({
//     total: 100,
//     goal: 150,
//     progress: 0.67,
//   });

//   return (
//     <div className="max-w-7xl mx-auto p-6">
//       {/* Header */}
//       <div className="flex justify-between items-center mb-6">
//         <h1 className="text-3xl font-bold text-gray-700">Referral Program</h1>
//       </div>

//       {/* Referral Code and Share Link */}
//       <div className="bg-white shadow-md rounded-lg p-6 mb-6">
//         <h2 className="text-xl font-semibold text-gray-800 mb-4">Your Referral Code</h2>
//         <div className="flex items-center space-x-4">
//           <p className="text-lg font-medium text-blue-600">{referralCode}</p>
//           <button
//             onClick={() => navigator.clipboard.writeText(referralCode)}
//             className="bg-blue-500 text-white px-4 py-2 rounded-lg"
//           >
//             Copy Code
//           </button>
//         </div>
//         <p className="text-gray-600 mt-4">
//           Share this code with your friends to earn rewards when they sign up and make their first booking.
//         </p>
//       </div>

//       {/* Referral Link */}
//       <div className="bg-white shadow-md rounded-lg p-6 mb-6">
//         <h2 className="text-xl font-semibold text-gray-800 mb-4">Your Referral Link</h2>
//         <div className="flex items-center space-x-4">
//           <p className="text-lg font-medium text-blue-600">www.example.com/referral?code={referralCode}</p>
//           <button
//             onClick={() => navigator.clipboard.writeText(`www.example.com/referral?code=${referralCode}`)}
//             className="bg-blue-500 text-white px-4 py-2 rounded-lg"
//           >
//             Copy Link
//           </button>
//         </div>
//         <p className="text-gray-600 mt-4">
//           Share this link with your friends via social media or messaging platforms to get credit for their sign-ups.
//         </p>
//       </div>

//       {/* Referral Stats */}
//       <div className="bg-white shadow-md rounded-lg p-6 mb-6">
//         <h2 className="text-xl font-semibold text-gray-800 mb-4">Referral Stats</h2>
//         <div className="grid grid-cols-3 gap-4">
//           <div className="text-center">
//             <h3 className="text-lg font-medium text-gray-800">Total Referrals</h3>
//             <p className="text-2xl font-semibold text-gray-800">{referrals.total}</p>
//           </div>
//           <div className="text-center">
//             <h3 className="text-lg font-medium text-gray-800">Successful Referrals</h3>
//             <p className="text-2xl font-semibold text-green-600">{referrals.successful}</p>
//           </div>
//           <div className="text-center">
//             <h3 className="text-lg font-medium text-gray-800">Pending Referrals</h3>
//             <p className="text-2xl font-semibold text-yellow-600">{referrals.pending}</p>
//           </div>
//         </div>
//       </div>

//       {/* Referral Reward Progress */}
//       <div className="bg-white shadow-md rounded-lg p-6 mb-6">
//         <h2 className="text-xl font-semibold text-gray-800 mb-4">Referral Rewards</h2>
//         <div className="flex justify-between items-center mb-4">
//           <p className="text-lg font-medium text-gray-800">Your Total Reward</p>
//           <p className="text-lg font-medium text-blue-600">${reward.total}</p>
//         </div>
//         <div className="relative mb-4">
//           <div className="w-full h-2 bg-gray-300 rounded-full">
//             <div
//               className="h-full bg-green-500 rounded-full"
//               style={{ width: `${reward.progress * 100}%` }}
//             ></div>
//           </div>
//           <div className="absolute top-0 left-0 right-0 text-center text-xs text-gray-600">
//             {Math.round(reward.progress * 100)}% to your next reward
//           </div>
//         </div>
//         <div className="flex justify-between items-center">
//           <p className="text-lg font-medium text-gray-800">Goal</p>
//           <p className="text-lg font-medium text-blue-600">${reward.goal}</p>
//         </div>
//       </div>

//       {/* Referral Leaderboard (Optional) */}
//       <div className="bg-white shadow-md rounded-lg p-6 mb-6">
//         <h2 className="text-xl font-semibold text-gray-800 mb-4">Referral Leaderboard</h2>
//         <div className="space-y-2">
//           <div className="flex justify-between">
//             <span className="font-medium text-gray-800">1. John Doe</span>
//             <span className="font-medium text-gray-800">50 Referrals</span>
//           </div>
//           <div className="flex justify-between">
//             <span className="font-medium text-gray-800">2. Jane Smith</span>
//             <span className="font-medium text-gray-800">45 Referrals</span>
//           </div>
//           <div className="flex justify-between">
//             <span className="font-medium text-gray-800">3. Alice Brown</span>
//             <span className="font-medium text-gray-800">40 Referrals</span>
//           </div>
//         </div>
//       </div>

//       {/* Referral Terms & Conditions */}
//       <div className="bg-white shadow-md rounded-lg p-6 mb-6">
//         <h2 className="text-xl font-semibold text-gray-800 mb-4">Referral Program Terms</h2>
//         <p className="text-gray-600">
//           1. Referred friends must sign up and make a successful booking to qualify as a successful referral.
//         </p>
//         <p className="text-gray-600">
//           2. Rewards are issued once the referred user completes their first booking.
//         </p>
//         <p className="text-gray-600">
//           3. Referral rewards may vary based on special promotions.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Referrals;




// import React, { useState } from "react";

// const Referrals = () => {
//   const [referralCode] = useState("ABC123");
//   const [referrals] = useState({
//     total: 25,
//     successful: 15,
//     pending: 10,
//   });
//   const [reward] = useState({
//     total: 100,
//     goal: 150,
//     progress: 0.67,
//   });

//   return (
//     <div className="max-w-7xl mx-auto p-6 space-y-8">
//       {/* Page Title */}
//       <h1 className="text-3xl font-bold text-gray-700">Referral Program</h1>

//       {/* Referral Code Section */}
//       <div className="bg-gradient-to-r from-blue-500 to-teal-400 rounded-xl p-6 shadow-lg flex items-center justify-between">
//         <div className="space-y-2">
//           <h2 className="text-2xl text-white font-semibold">Your Referral Code</h2>
//           <p className="text-white text-lg">Use this code to invite your friends and earn rewards!</p>
//         </div>
//         <div className="flex items-center space-x-4">
//           <p className="text-white text-lg font-semibold">{referralCode}</p>
//           <button
//             onClick={() => navigator.clipboard.writeText(referralCode)}
//             className="bg-white text-blue-500 px-4 py-2 rounded-lg hover:bg-gray-200"
//           >
//             Copy Code
//           </button>
//         </div>
//       </div>

//       {/* Referral Link Section */}
//       <div className="bg-white rounded-xl p-6 shadow-md flex items-center justify-between">
//         <div className="space-y-2">
//           <h2 className="text-xl font-semibold text-gray-800">Your Referral Link</h2>
//           <p className="text-gray-600">
//             Share this link with your friends to get credit when they sign up and book their first service!
//           </p>
//         </div>
//         <div className="flex items-center space-x-4">
//           <p className="text-blue-600">www.example.com/referral?code={referralCode}</p>
//           <button
//             onClick={() => navigator.clipboard.writeText(`www.example.com/referral?code=${referralCode}`)}
//             className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
//           >
//             Copy Link
//           </button>
//         </div>
//       </div>

//       {/* Referral Stats */}
//       <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
//         <div className="bg-white p-6 rounded-lg shadow-md text-center space-y-4">
//           <div className="text-2xl text-blue-600">{referrals.total}</div>
//           <h3 className="text-lg text-gray-800">Total Referrals</h3>
//         </div>
//         <div className="bg-white p-6 rounded-lg shadow-md text-center space-y-4">
//           <div className="text-2xl text-green-600">{referrals.successful}</div>
//           <h3 className="text-lg text-gray-800">Successful Referrals</h3>
//         </div>
//         <div className="bg-white p-6 rounded-lg shadow-md text-center space-y-4">
//           <div className="text-2xl text-yellow-500">{referrals.pending}</div>
//           <h3 className="text-lg text-gray-800">Pending Referrals</h3>
//         </div>
//       </div>

//       {/* Referral Rewards Progress */}
//       <div className="bg-white rounded-xl p-6 shadow-md">
//         <h2 className="text-xl font-semibold text-gray-800 mb-4">Referral Rewards Progress</h2>
//         <div className="flex justify-between mb-4">
//           <p className="text-lg font-medium text-gray-800">Total Rewards</p>
//           <p className="text-lg font-medium text-blue-600">${reward.total}</p>
//         </div>

//         <div className="relative">
//           <div className="w-full h-2 bg-gray-300 rounded-full">
//             <div
//               className="h-full bg-green-500 rounded-full"
//               style={{ width: `${reward.progress * 100}%` }}
//             ></div>
//           </div>
//           <div className="absolute top-0 left-0 right-0 text-center text-xs text-gray-600">
//             {Math.round(reward.progress * 100)}% of ${reward.goal} goal
//           </div>
//         </div>

//         <div className="flex justify-between mt-4">
//           <p className="text-lg font-medium text-gray-800">Goal</p>
//           <p className="text-lg font-medium text-blue-600">${reward.goal}</p>
//         </div>
//       </div>

//       {/* Referral Terms and Conditions */}
//       <div className="bg-white rounded-xl p-6 shadow-md">
//         <h2 className="text-xl font-semibold text-gray-800 mb-4">Referral Terms & Conditions</h2>
//         <ul className="list-disc pl-6 text-gray-600 space-y-2">
//           <li>Referred users must complete their first booking for the referral to be successful.</li>
//           <li>You will receive rewards based on successful sign-ups and completed bookings.</li>
//           <li>Referral rewards may be subject to change based on promotions or other terms.</li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Referrals;



import React, { useState } from "react";
import { FaShareAlt, FaClipboard, FaGift, FaUserFriends, FaRegHandshake } from "react-icons/fa";

const Referrals = () => {
  const [referralCode] = useState("XYZ456");
  const [referrals] = useState({
    total: 20,
    successful: 12,
    pending: 8,
  });
  const [reward] = useState({
    total: 120,
    goal: 200,
    progress: 0.6,
  });

  return (
    <div className="max-w-7xl mx-auto p-8 space-y-8">
      {/* Page Title */}
      <h1 className="text-4xl font-extrabold text-gray-700">Referral Program</h1>

      {/* Referral Code Section */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-500 rounded-lg p-6 shadow-xl hover:shadow-2xl transition-all duration-300">
        <div className="flex items-center justify-between text-white">
          <div>
            <h2 className="text-2xl font-semibold">Your Referral Code</h2>
            <p className="mt-2 text-lg">
              Share this code to earn rewards when your friends sign up and book services!
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <p className="text-lg font-bold">{referralCode}</p>
            <button
              onClick={() => navigator.clipboard.writeText(referralCode)}
              className="p-2 bg-white text-purple-600 rounded-lg hover:bg-purple-100 transition duration-200"
            >
              <FaClipboard />
            </button>
          </div>
        </div>
      </div>

      {/* Referral Link Section */}
      <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-2xl transition-all duration-300">
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-gray-900">Your Referral Link</h2>
            <p className="text-gray-600">
              Use this link to invite your friends and track your referrals directly.
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <p className="text-blue-600 text-lg">
              www.example.com/referral?code={referralCode}
            </p>
            <button
              onClick={() =>
                navigator.clipboard.writeText(`www.example.com/referral?code=${referralCode}`)
              }
              className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200"
            >
              <FaClipboard />
            </button>
          </div>
        </div>
      </div>

      {/* Referral Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-gray-50 p-6 rounded-xl shadow-md text-center space-y-4 hover:bg-purple-50 transition-all duration-300">
          <FaUserFriends className="mx-auto text-4xl text-purple-600" />
          <p className="text-2xl text-purple-600">{referrals.total}</p>
          <p className="text-gray-800">Total Referrals</p>
        </div>
        <div className="bg-gray-50 p-6 rounded-xl shadow-md text-center space-y-4 hover:bg-green-50 transition-all duration-300">
          <FaRegHandshake className="mx-auto text-4xl text-green-600" />
          <p className="text-2xl text-green-600">{referrals.successful}</p>
          <p className="text-gray-800">Successful Referrals</p>
        </div>
        <div className="bg-gray-50 p-6 rounded-xl shadow-md text-center space-y-4 hover:bg-yellow-50 transition-all duration-300">
          <FaGift className="mx-auto text-4xl text-yellow-500" />
          <p className="text-2xl text-yellow-500">{referrals.pending}</p>
          <p className="text-gray-800">Pending Referrals</p>
        </div>
      </div>

      {/* Referral Rewards Progress */}
      <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-2xl transition-all duration-300">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Referral Rewards Progress</h2>
        <div className="flex justify-between mb-4">
          <p className="text-lg font-medium text-gray-900">Total Rewards</p>
          <p className="text-lg font-medium text-purple-600">${reward.total}</p>
        </div>
        <div className="relative">
          <div className="w-full h-2 bg-gray-300 rounded-full">
            <div
              className="h-full bg-green-600 rounded-full"
              style={{ width: `${reward.progress * 100}%` }}
            ></div>
          </div>
          <div className="absolute top-0 left-0 right-0 text-center text-xs text-gray-600">
            {Math.round(reward.progress * 100)}% of ${reward.goal} goal
          </div>
        </div>
        <div className="flex justify-between mt-4">
          <p className="text-lg font-medium text-gray-900">Goal</p>
          <p className="text-lg font-medium text-purple-600">${reward.goal}</p>
        </div>
      </div>

      {/* Terms & Conditions */}
      <div className="bg-gray-50 p-6 rounded-lg shadow-md text-gray-800">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Referral Terms & Conditions</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Referred users must make a completed booking for the referral to be valid.</li>
          <li>Referral rewards are only applicable for successful referrals that meet the terms.</li>
          <li>Referral bonuses may be updated or changed periodically, so stay tuned for new promotions.</li>
        </ul>
      </div>
    </div>
  );
};

export default Referrals;
