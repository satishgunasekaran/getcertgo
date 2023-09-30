import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import MainNavbar from "@/components/shared/MainNavBar";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function Index() {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div className="flex flex-col min-h-screen">
      <div className="w-full">
        <nav className="p-4 main-nav">
          <div className="container mx-auto flex justify-between items-center">
            <div className="text-white text-2xl font-semibold">GetCertGo</div>
            <ul className="flex space-x-4">
              <li>
                <Link href="/">
                  <span className="text-white">Home</span>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <span className="text-white">About</span>
                </Link>
              </li>
              <li>
                <Link href="/search-courses">
                  <span className="text-white">Search Courses</span>
                </Link>
              </li>
            </ul>
            <div className="flex items-center space-x-2">
              <Link href="/profile">
                <div className="flex items-center">
                  <span>My Profile</span>
                  <span className="ml-2 text-yellow-500">120 pts</span>
                </div>
              </Link>
            </div>
          </div>
        </nav>
      </div>

      <div className="flex-grow">
        <div className="text-center py-8">
          <p className="text-white text-2xl w-4/5 mx-auto">
            Unlock your{" "}
            <span className="text-violet-500">learning potential</span> and{" "}
            <span className="text-violet-500">Validate</span> your knowledge
            with certificates from{" "}
            <span className="text-violet-500">GetCertGo</span>. We go beyond
            just learning from YouTube and provide you with the recognition you
            deserve.
          </p>
          <button className="mt-4 px-4 py-2 rounded bg-white text-violet-500">
            Get Certified Now!
          </button>
        </div>
      </div>

      <footer className="text-center py-4 text-white">
        &copy; 2023 Made by Satish G
      </footer>
    </div>
  );
}
