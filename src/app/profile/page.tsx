'use client';

import { useAuth } from '@/hooks/useAuth';
import { redirect } from 'next/navigation';
import { useEffect } from 'react';

// export default function ProfilePage() {
//   const { user, loading, logout } = useAuth();

//   useEffect(() => {
//     if (!loading && !user) {
//       redirect('/auth/login');
//     }
//   }, [loading, user]);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (!user) {
//     return null;
//   }

//   return (
//     <div className="min-h-screen bg-gray-50 py-12 px-4">
//       <div className="max-w-3xl mx-auto bg-white rounded-lg shadow p-8">
//         <div className="text-center">
//           <div className="relative w-32 h-32 mx-auto mb-4">
//             <img
//               src={user.avatarUrl || '/images/default-avatar.png'}
//               alt={user.name}
//               className="rounded-full w-full h-full object-cover"
//             />
//           </div>
//           <h1 className="text-2xl font-bold mb-2">{user.name}</h1>
//           <p className="text-gray-600 mb-6">{user.email}</p>
//           <button
//             onClick={logout}
//             className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
//           >
//             Logout
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }