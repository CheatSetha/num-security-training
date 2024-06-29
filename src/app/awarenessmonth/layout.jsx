import AwarenessNavBar from "@/components/AwarenessNavBar";

import HeaderTop from "../user/learningconsole/components/HeaderTop";

export default function Layout({ children }) {
  return (
    <div className="bg-white">
      <HeaderTop />

      <div className="w-10/12 mx-auto">
        <div className="-mt-[32px]">
          <div className="flex  bg-white shadow rounded-[24px] h-16 p-2">
            <AwarenessNavBar />
          </div>
        </div>
        {children}
      </div>
    </div>
  );
}
