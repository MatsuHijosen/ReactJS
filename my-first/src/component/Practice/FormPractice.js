import React, { useState, useEffect } from "react";
import userJson from "./user.json"; // Import JSON file
import "./styles.css"; // Import styles

const FormPractice = () => {
    // Initialize state dynamically from JSON (excluding ID)
    const initialFormData = Object.keys(userJson).reduce((acc, key) => {
        if (key !== "id") acc[userJson[key].technical_name] = "";
        return acc;
    }, {});

    const [formData, setFormData] = useState(initialFormData);
    const [login, setLogin] = useState([]);
    const [isFormValid, setIsFormValid] = useState(false);
    const nameRegex = /^[A-Za-z ]*$/;

    const handleChange = (e) => {
        const { name, value, type } = e.target;

        if (name === "age" && (value.length > 3 || !/^\d*$/.test(value))) return;

        if (type === "text" && value.length > 30) return;
        

        if ((name === "first_name" || name === "middle_name" || name === "last_name") && !nameRegex.test(value) || value.length > 30) {
            return;
        }

        if (name === "address" && value !== "" && !/^[a-zA-Z0-9\s]+$/.test(value)) return;




        setFormData({
            ...formData,
            [name]: value,
        });
    };

    useEffect(() => {
        setIsFormValid(Object.values(formData).every((field) => field.trim() !== ""));
    }, [formData]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isFormValid) {
            setLogin([...login, formData]);
            console.log("Updated Entries:\n", JSON.stringify([...login, formData], null, 2));
            alert(`Welcome ${formData.first_name}!`);
            handleClearInputs();
        }
    };

    const handleClearInputs = () => setFormData(initialFormData);
    const handleClearAll = () => {
        setLogin([]);
        console.clear();
        console.log("All entries cleared.");
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <h1 className="form-title">INFORMATION</h1>

                {/* Firstname, Middlename, Lastname Row */}
                <div className="row">
                    {["first_name", "middle_name", "last_name"].map((key) => (
                        <div key={key} className="input-group">
                            <label>{userJson[key].label}</label>
                            <input
                                type={userJson[key].widget}
                                name={userJson[key].technical_name}
                                value={formData[userJson[key].technical_name]}
                                onChange={handleChange}
                                placeholder={`Enter ${userJson[key].label.toLowerCase()}`}
                                required={userJson[key].required}
                            />
                        </div>
                    ))}
                </div>

                {/* Age and Birthday Row */}
                <div className="row">
                    {["age", "birthday"].map((key) => (
                        <div key={key} className="input-group">
                            <label>{userJson[key].label}</label>
                            <input
                                type={userJson[key].widget}
                                name={userJson[key].technical_name}
                                value={formData[userJson[key].technical_name]}
                                onChange={handleChange}
                                placeholder={`Enter ${userJson[key].label.toLowerCase()}`}
                                required={userJson[key].required}
                            />
                        </div>
                    ))}
                </div>

                {/* Address Row */}
                <div className="row">
                    <div className="input-group full-width">
                        <label>{userJson["address"].label}</label>
                        <input
                            type={userJson["address"].widget}
                            name={userJson["address"].technical_name}
                            value={formData[userJson["address"].technical_name]}
                            onChange={handleChange}
                            placeholder={`Enter ${userJson["address"].label.toLowerCase()}`}
                            required={userJson["address"].required}
                        />
                    </div>
                </div>

                <div className="button-group">
                    <button type="submit" disabled={!isFormValid}>Add</button>
                    <button type="button" onClick={handleClearInputs}>Clear</button>
                </div>
            </form>

            {/* Recently Logged In Section */}
            <h3 className="recent-title">Recently Logged In</h3>
            {login.length > 0 ? (
                <>
                    <table className="log-table">
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
                                    <td>{entry.first_name} {entry.middle_name} {entry.last_name}</td>
                                    <td>{entry.birthday}</td>
                                    <td>{entry.address}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <button onClick={handleClearAll} className="clear-all-btn">Clear All</button>
                </>
            ) : (
                <p className="no-entries">No entries added yet.</p>
            )}
        </div>
    );
};

export default FormPractice;
