import React from 'react'

const page = () => {
  return (
    <div>
      {/* change password  with corrent pw and new and confirm */}
      <div className="py-5">
        <h1 className="font-bold text-3xl mb-8 text-primary text-center">
          Change Password
        </h1>
        <div className="flex items-center justify-center gap-10">
          <div className="w-full lg:w-[400px] ">
            <form>
              <div className="mb-5">
                <label>Current Password</label>
                <input
                  type="password"
                  className="w-full bg-primary bg-opacity-10 mt-2 h-12 rounded-lg"
                />
              </div>
              <div className="mb-5">
                <label>New Password</label>
                <input
                  type="password"
                  className="w-full bg-primary bg-opacity-10 mt-2 h-12 rounded-lg"
                />
              </div>
              <div className="mb-7">
                <label>Confirm Password</label>
                <input
                  type="password"
                  className="w-full bg-primary bg-opacity-10 mt-2 h-12 rounded-lg"
                />
              </div>
              <div>
                <button className="bg-primary text-white btn rounded-lg h-12 w-full">
                  Save Change
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

    </div>
  )
}

export default page