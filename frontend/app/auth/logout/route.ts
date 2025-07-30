import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function POST() {  
    const cookieStore = await cookies();

    // Remove cookies
    cookieStore.set('access_token', '', { maxAge: 0 });
    cookieStore.set('state', '', { maxAge: 0 });
    cookieStore.set('code_verifier', '', { maxAge: 0 });

    return redirect('/');
}