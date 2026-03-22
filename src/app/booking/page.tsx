import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/authOptions';
import getUserProfile from '@/libs/getUserProfile';
import BookingForm from '@/components/BookingForm';

export default async function BookingPage() {
  const session = await getServerSession(authOptions);
  const profile = session?.user?.token ? await getUserProfile(session.user.token) : null;

  return <BookingForm profile={profile?.data || null} />;
}
