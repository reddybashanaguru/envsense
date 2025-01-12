import Link from "next/link";

const Stepper = () => {
  return (
    <div className="flex justify-center items-center space-x-8 mb-8">
      <div className="flex flex-col items-center">
        <Link
          href="/step4"
          className="w-2 h-2 flex items-center justify-center rounded-full bg-blue-500 text-white"
        ></Link>
        <p className="mt-2 text-xs">Data</p>
      </div>

      <div className="flex-1 h-0.5 bg-gray-300"></div>

      <div className="flex flex-col items-center">
        <Link
          href="/step4"
          className="w-2 h-2 flex items-center justify-center rounded-full bg-blue-500 text-white"
        ></Link>
        <p className="mt-2 text-xs">Monitoring Points</p>
      </div>

      <div className="flex-1 h-0.5 bg-gray-300"></div>

      <div className="flex flex-col items-center">
        <Link
          href="/step4"
          className="w-2 h-2 flex items-center justify-center rounded-full bg-blue-500 text-white"
        ></Link>
        <p className="mt-2 text-xs">Setup</p>
      </div>

      <div className="flex-1 h-0.5 bg-gray-300"></div>

      <div className="flex flex-col items-center">
        <Link
          href="/step4"
          className="w-2 h-2 flex items-center justify-center rounded-full bg-blue-500 text-white"
        ></Link>
        <p className="mt-2 text-xs">Summary</p>
      </div>
    </div>
  );
};

export default Stepper;