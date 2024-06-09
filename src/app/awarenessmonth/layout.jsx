import AwarenessNavBar from "@/components/AwarenessNavBar";
import Image from "next/image";
import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div className="bg-secondary ">
      <div className="bg-primary h-44">
        <div className="w-10/12 mx-auto flex justify-between items-center h-full">
          {/* profile and name section in the left side */}
          <div className="flex gap-4 justify-center items-center">
            <Image
              className="w-16 rounded-full avatar-ring"
              src={"/assets/images/userconsole/pf.jpg"}
              width={1200}
              height={1200}
            />
            <h1 className="text-white text-2xl font-semibold">Setha Cheat</h1>
          </div>
        </div>
      </div>

      <div className="w-10/12 mx-auto">
        {/* nav bar for user console */}
        <div className="-mt-[32px]">
          <div className="flex  bg-white shadow rounded-[24px] h-16 p-2">
            <AwarenessNavBar />
          </div>
        </div>

        {/* box of 3 section */}
        {children}
      </div>
    </div>
  );
}
