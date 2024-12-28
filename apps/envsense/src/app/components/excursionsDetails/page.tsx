

const ExcursionDetails = () => {
    return (
        <div>
            <div className="grid gap-6 lg:grid-cols-2 flex-grow flex-shrink">

                <div className="w-[205%] col-span-1 bg-red border border-white rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <h5 className="flex flex-wrap text-2xl max-w-3.5xl gap-10 font-semibold tracking-tight items-center justify-center text-center text-white border-b border-gray-200 rounded-t-lg bg-red-400 p-3 dark:border-red-500 dark:text-gray-400 dark:bg-gray-800" id="defaultTab" data-tabs-toggle="#defaultTabContent" role="tablist">
                            Sensors due for Calibartion
                    </h5>

                    <div className="content-center h-52 font-semibold items-center text-center">
                        <div className="relative items-center text-center text-6xl">20</div>
                        </div>

                    </div>
                <div className="w-[205%] col-span-1 bg-red border border-white rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <h5 className="flex flex-wrap text-2xl max-w-3.5xl gap-10 font-semibold tracking-tight items-center justify-center text-center text-white border-b border-gray-200 rounded-t-lg bg-red-400 p-3 dark:border-red-500 dark:text-gray-400 dark:bg-gray-800" id="defaultTab" data-tabs-toggle="#defaultTabContent" role="tablist">
                            Sensors due for Calibartion
                    </h5>

                    <div className="content-center h-52 font-semibold items-center text-center">
                        <div className="relative items-center text-center text-6xl">20</div>
                        </div>

                    </div>
                </div>
            </div>
    )
}

export default ExcursionDetails;