// // pages/api/removeCartItem.js
// import db from '@/lib/db';
// import { getUserOnServer } from '@/lib/getServerSideToken';

// export default async function handler(req, res) {
//   if (req.method !== 'DELETE') {
//     return res.status(405).json({ message: 'Method not allowed' });
//   }

//   const user = await getUserOnServer();
//   const { type, id } = req.body;

//   try {
//     console.log(`Removing item: type=${type}, id=${id}`);
//     let update;
//     switch (type) {
//       case 'service':
//         update = {
//           where: { userId: user.id },
//           data: {
//             services: {
//               disconnect: { id: id },
//             },
//           },
//         };
//         break;
//       case 'registrationStartup':
//         update = {
//           where: { userId: user.id },
//           data: {
//             registrationStartup: {
//               disconnect: { id: id },
//             },
//           },
//         };
//         break;
//       case 'registrationService':
//         update = {
//           where: { userId: user.id },
//           data: {
//             registrationServices: {
//               disconnect: { id: id },
//             },
//           },
//         };
//         break;
//       default:
//         return res.status(400).json({ message: 'Invalid type' });
//     }

//     await db.cart.update(update);
//     res.status(200).json({ message: 'Item removed successfully' });
//   } catch (error) {
//     console.error('Error removing item:', error);
//     res.status(500).json({ message: 'Error removing item' });
//   }
// }
