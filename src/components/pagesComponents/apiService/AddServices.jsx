// 'use client';

// import api from '@/lib/userNextAxios';
// import { useState } from 'react';
// import { toast } from 'react-toastify';

// function AddServices({ user }) {
//   const [loading, setLoading] = useState(false);

//   async function handleAddServices() {
//     try {
//       setLoading(true);
//       const response = await api.post('/api/api-service');
//       if (response.data.status) {
//         toast.success('Service added successfully');
//       }
//     } catch (error) {
//       console.log(error);
//       toast.error('Failed to add services');
//     } finally {
//       setLoading(false);
//     }
//   }

//   if (!user || user.email !== 'jishankhannew@gmail.com') return <></>;
//   return (
//     <div className="text-right max-w-[87rem] my-4">
//       <button onClick={handleAddServices} className="btn-primary">
//         {loading ? (
//           <span className="inline-block w-4 h-4 border-white border-b-zinc-400 border-r-zinc-400 border-2 border-solid rounded-full animate-spin"></span>
//         ) : (
//           'Upload Services'
//         )}
//       </button>
//     </div>
//   );
// }

// export default AddServices;
