// app/api/auth/[...nextauth]/route.ts

import { auth } from '@/auth'; // Asegúrate de que la ruta esté correcta

export { auth as GET, auth as POST };
