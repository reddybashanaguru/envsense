import { MdError, MdWarning } from "react-icons/md";

const ActiveCards = () => {
  return (
    <div className=" gap-6 grid lg:grid-cols-4 mx-auto">
      {/* <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

        <h5 className="flex items-center gap-2 mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
          Active Excursions
          <MdError size={30} />
        </h5>



        <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">

        </p>
      <div className="">gfgjhgjghjghj</div>
      </div> */}

      

      <div className=" bg-red border border-white rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <h5 className="flex flex-wrap text-2xl max-w-sm gap-10 font-semibold tracking-tight  text-center text-white border-b border-gray-200 rounded-t-lg bg-red-400 p-3 dark:border-red-500 dark:text-gray-400 dark:bg-gray-800" id="defaultTab" data-tabs-toggle="#defaultTabContent" role="tablist">
              Active Excursions
              <MdError size={30} />
          </h5>

          <div className="content-center h-52 font-semibold items-center text-center">
            <div className="relative items-center text-center text-6xl">20</div>
          </div>

      </div>

      <div className=" bg-red border border-white rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <h5 className="flex flex-wrap text-2xl max-w-sm gap-10 font-semibold tracking-tight  text-center text-white border-b border-gray-200 rounded-t-lg bg-orange-300 p-3 dark:border-orange-500 dark:text-gray-400 dark:bg-gray-800" id="defaultTab" data-tabs-toggle="#defaultTabContent" role="tablist">
              Active Warnings
              <MdWarning size={30} />
          </h5>

          <div className="content-center h-52 font-semibold items-center text-center">
            <div className="relative items-center text-center text-6xl">80</div>
          </div>

      </div>

        <div className="col-span-2 w-[107%] bg-red border border-white rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <h5 className="flex flex-wrap text-2xl   font-semibold tracking-tight  text-center text-white border-b border-gray-200 rounded-t-lg bg-red-700 p-3 dark:border-red-500 dark:text-gray-400 dark:bg-gray-800" id="defaultTab" data-tabs-toggle="#defaultTabContent" role="tablist">
                Active Excursions
                Recently Viewed Data Loggers
            </h5>

            <div className=" h-52">
            Active Warnings
            </div>

        </div>


    </div>
  );
};

export default ActiveCards;
