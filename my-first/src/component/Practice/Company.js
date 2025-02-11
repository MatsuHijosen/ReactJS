import React, { useState } from "react";

const FormPractice = () => {
    const [Fname, setFName] = useState("");
    const [Mname, setMName] = useState("");
    const [Lname, setLName] = useState("");
    const [age, setAge] = useState("");
    const [bday, setBday] = useState("");
    const [address, setAddress] = useState("");
    const [login, setLogin] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (Fname && Mname && Lname && age && bday && address) {
            const newEntry = {
                firstName: Fname,
                middleName: Mname,
                lastName: Lname,
                age: age,
                birthday: bday,
                address: address
            };

            // Update the state with the new entry
            const updatedList = [...login, newEntry];
            setLogin(updatedList);

            // Log the entire list in JSON format
            console.log("Updated List of Entries:\n", JSON.stringify(updatedList, null, 2));

            alert(`Welcome ${Fname}! you have successfully log in`);

            handleClearInputs();
        }
    };

    const handleClearInputs = () => {
        setFName("");
        setMName("");
        setLName("");
        setAge("");
        setBday("");
        setAddress("");
    };

    const handleClearAll = () => {
        setLogin([]);
        console.clear();
        console.log("All entries cleared.");
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>LOG IN</h1>

                <div style={{ marginBottom: "5px" }}>
                    <label style={{ marginRight: "10px" }}>First Name:</label>
                    <input type="text" value={Fname} onChange={(e) => setFName(e.target.value)} required />
                </div>

                <div style={{ marginBottom: "5px" }}>
                    <label style={{ marginRight: "10px" }}>Middle Name:</label>
                    <input type="text" value={Mname} onChange={(e) => setMName(e.target.value)} required />
                </div>

                <div style={{ marginBottom: "5px" }}>
                    <label style={{ marginRight: "10px" }}>Last Name:</label>
                    <input type="text" value={Lname} onChange={(e) => setLName(e.target.value)} required />
                </div>

                <div style={{ marginBottom: "5px" }}>
                    <label style={{ marginRight: "10px" }}>Age:</label>
                    <input type="number" value={age} onChange={(e) => setAge(e.target.value)} required />
                </div>

                <div style={{ marginBottom: "5px" }}>
                    <label style={{ marginRight: "10px" }}>Birthday:</label>
                    <input type="date" value={bday} onChange={(e) => setBday(e.target.value)} required />
                </div>

                <div style={{ marginBottom: "5px" }}>
                    <label style={{ marginRight: "10px" }}>Address:</label>
                    <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} required />
                </div>

                <div style={{ marginTop: "10px" }}>
                    <button type="submit" style={{ marginRight: "10px" }}>Add</button>
                    <button type="button" onClick={handleClearInputs}>Clear</button>
                </div>
            </form>

            <h3>Recently Logged In</h3>
            {login.length > 0 ? (
                <>
                    <table border="1" cellPadding="5" style={{ borderCollapse: "collapse", width: "100%", textAlign: "left" }}>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Birthday</th>
                                <th>Address</th>
                            </tr>
                        </thead>
                        <tbody>
                            {login.map((entry, index) => (
                                <tr key={index}>
                                    <td>{entry.firstName} {entry.middleName} {entry.lastName}</td>
                                    <td>{entry.birthday}</td>
                                    <td>{entry.address}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <button onClick={handleClearAll} style={{ marginTop: "10px" }}>Clear All</button>
                </>
            ) : (
                <p>No entries added yet.</p>
            )}
        </div>
    );
};

export default FormPractice;
