import EmployeeCard from "./EmployeeCard";

const riders = [
    {
        id: "1",
        name: "Rahul Sharma",
        role: "Delivery Rider",
        image: "/images/profile.png",
        status: "Active",
    },
    {
        id: "2",
        name: "Aman Singh",
        role: "Delivery Rider",
        image: "/images/profile.png",
        status: "Offline",
    },
];

const staff = [
    {
        id: "3",
        name: "Priya Verma",
        role: "Manager",
        image: "/images/profile.png",
        status: "Active",
    },
    {
        id: "4",
        name: "Mohit Kumar",
        role: "Chef",
        image: "/images/profile.png",
        status: "Active",
    },
    {
        id: "5",
        name: "Rohit Gupta",
        role: "Cashier",
        image: "/images/profile.png",
        status: "Leave",
    },
];

export default function EmployeeGrid() {
    return (
        <section className="space-y-10">
            <div>
                <h2 className="mb-5 text-2xl font-bold text-white">Delivery Riders</h2>

                <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                    {riders.map((employee) => (
                        <EmployeeCard key={employee.id} employee={employee} />
                    ))}
                </div>
            </div>

            <div>
                <h2 className="mb-5 text-2xl font-bold text-white">Restaurant Staff</h2>

                <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                    {staff.map((employee) => (
                        <EmployeeCard key={employee.id} employee={employee} />
                    ))}
                </div>
            </div>
        </section>
    );
}