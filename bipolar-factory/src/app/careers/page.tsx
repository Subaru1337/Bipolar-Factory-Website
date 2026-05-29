import { redirect } from 'next/navigation'
import { CAREERS_URL } from '@/lib/nav'

export default function CareersPage() {
  redirect(CAREERS_URL)
}
