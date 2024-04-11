import { employees } from "./list";

const ListShow = () => {
    const filterQuery = {
        designation: "python developer",
        minSalary: 5000,
        maxSalary: 15000
    };

    const filterArry = (query) => {
        console.log("Query:", query);
        const filtered = employees.filter(value => {
            let matchesDesignation = true;
            let matchesSalaryRange = true;

            if (query.designation) {
                matchesDesignation = value.designation === query.designation;
            }

            if (query.minSalary && query.maxSalary) {
                matchesSalaryRange = value.salary >= query.minSalary && value.salary <= query.maxSalary;
            }

            console.log("Employee:", value);
            console.log("Matches Designation:", matchesDesignation);
            console.log("Matches Salary Range:", matchesSalaryRange);

            return matchesDesignation && matchesSalaryRange;
        });

        console.log("Filtered Employees:", filtered);
        return filtered;
    };

    const filteredEmployees = filterArry(filterQuery);

    return (
        <>
            {filteredEmployees.length > 0 ? (
                filteredEmployees.map(value => (
                    <div key={value.name}>
                        <h4>Name: {value.name}</h4>
                        <h4>Designation: {value.designation}</h4>
                        <h4>Salary: {value.salary}</h4>
                    </div>
                ))
            ) : (
                <div>No employees found</div>
            )}
        </>
    );
};

export default ListShow;

