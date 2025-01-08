// import Announcements from "@/components/Announcements";
// import AttendanceChart from "@/components/AttendanceChart";
// import CountChart from "@/components/CountChart";
// import EventCalendar from "@/components/EventCalendar";
// import FinanceChart from "@/components/FinanceChart";
// import UserCard from "@/components/UserCard";
// import Card from "../../components/Card";

const AdminPage = () => {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      {/* LEFT */}
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
        {/* USER CARDS */}
        <div className="flex gap-4 justify-between flex-wrap">
            Naguru Reddy Basha
          {/* <UserCard type="student" />
          <UserCard type="teacher" />
          <UserCard type="parent" />
          <UserCard type="staff" /> */}
          {/* <Card/> */}
        </div>
    </div>
    </div>
  );
};

export default AdminPage;
