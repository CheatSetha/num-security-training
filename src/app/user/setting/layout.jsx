import UserNavBar from "@/components/setting/UserNavBar";
import HeaderTop from "../learningconsole/components/HeaderTop";

export default function Layout({ children }) {
  return (
    <div>
      <div>
        <HeaderTop />
        <div className="w-10/12 mx-auto">
          <div className="-mt-[32px]">
            <div className="flex  bg-white shadow rounded-[24px] h-16 p-2">
              <UserNavBar />
            </div>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}
