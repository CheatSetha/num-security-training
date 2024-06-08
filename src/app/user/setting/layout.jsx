import UserNavBar from "@/components/setting/UserNavBar";
import Image from "next/image";
import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div>
      <div>
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

            {/* list of neccessary items */}
            <div className="flex gap-4">
              <div className="rounded-[20px] bg-white bg-opacity-15  h-12 px-5 text-white flex justify-center items-center">
                <p className="font-semibold text-xl">
                  1 <span className="text-lg font-light">TODO</span>
                </p>
              </div>
              <div className="rounded-[20px] bg-white bg-opacity-15  h-12 px-5 text-white flex justify-center items-center">
                <p className="font-semibold text-xl">
                  0 <span className="text-lg font-light">OVERDUE</span>
                </p>
              </div>
              <div className="rounded-[20px] bg-white bg-opacity-15  h-12  px-5 text-white flex justify-center items-center">
                <p className="font-semibold text-xl">
                  0 <span className="text-lg font-light">COMPLETED</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-10/12 mx-auto">
          <div className="-mt-[32px]">
            <div className="flex  bg-white shadow rounded-[24px] h-16 p-2">
              <UserNavBar />
            </div>
          </div>
          {/* change profile content */}
          {children}
        </div>
      </div>
    </div>
  );
}
