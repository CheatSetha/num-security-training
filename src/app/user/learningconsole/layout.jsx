import CourseNavBar from "@/components/course/CourseNavBar";
import { useGetMeQuery } from "@/store/features/auth/authApiSlice";
import Image from "next/image";
import Link from "next/link";
import HeaderTop from "./components/HeaderTop";

export default function Layout({ children }) {
 
  return (
    <div className="bg-secondary h-screen">
      <HeaderTop />

      <div className="w-10/12 mx-auto">
        {/* nav bar for user console */}
        <div className="-mt-[32px]">
          <div className="flex  bg-white shadow rounded-[24px] h-16 p-2">
            <CourseNavBar />
          </div>
        </div>

        {/* box of 3 section */}
        {children}
      </div>
    </div>
  );
}
