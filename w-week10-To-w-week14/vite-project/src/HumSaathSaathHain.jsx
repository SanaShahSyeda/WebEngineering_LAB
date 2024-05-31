import React, { useState } from "react";
import "./HumSaathSaathHain.css";

function HumSaathSaathHain() {
  const [users, setUsers] = useState([]);
  const [createButtonDisabled, setCreateButtonDisabled] = useState(false);

  // Function to create a new user and reset steps for all users
  const createUser = () => {
    const newUser = { id: users.length + 1, currentStep: 0 };
    const updatedUsers = users.map((user) => ({ ...user, currentStep: 0 }));
    setUsers([...updatedUsers, newUser]);
    updateButtonDisabledState([...updatedUsers, newUser]); // Update button disabled state
  };

  // Function to handle next step for a specific user
  const handleNextStep = (userId) => {
    const currentIdx = users.findIndex((user) => user.id === userId);
    const previousUsers = users.slice(0, currentIdx); // Get all previous users
    const allPreviousCompleted = previousUsers.every(
      (user) => user.currentStep === 3
    );

    if (allPreviousCompleted) {
      const updatedUsers = users.map((user) =>
        user.id === userId
          ? { ...user, currentStep: user.currentStep + 1 }
          : user
      );
      setUsers(updatedUsers);
      updateButtonDisabledState(updatedUsers); // Update button disabled state after advancing a user's step
    } else {
      alert("Complete all previous users' steps before proceeding.");
    }
  };

  // Function to handle previous step for a specific user
  const handlePreviousStep = (userId) => {
    const updatedUsers = users.map((user) =>
      user.id === userId
        ? { ...user, currentStep: Math.max(0, user.currentStep - 1) }
        : user
    );
    setUsers(updatedUsers);
    updateButtonDisabledState(updatedUsers); // Update button disabled state after reversing a user's step
  };

  // Update button disabled state based on user statuses
  const updateButtonDisabledState = (updatedUsers) => {
    const allUsersCompleted = updatedUsers.every(
      (user) => user.currentStep === 3
    );
    setCreateButtonDisabled(!allUsersCompleted);
  };

  return (
    <div className="App">
      <h1>User Steps Game</h1>
      <button onClick={createUser} disabled={createButtonDisabled}>
        Create User
      </button>
      <div className="users-container">
        {users.map((user) => (
          <div key={user.id} className="user">
            <h3>User {user.id}</h3>
            <div className="steps">
              {[...Array(4)].map((_, index) => (
                <div
                  key={index}
                  className={`step ${
                    user.currentStep === index ? "active" : ""
                  }`}
                >
                  Step {index + 1}
                </div>
              ))}
            </div>
            <div className="navigation">
              <button
                onClick={() => handlePreviousStep(user.id)}
                disabled={user.currentStep === 0}
              >
                Previous
              </button>
              {user.currentStep < 4 && (
                <button onClick={() => handleNextStep(user.id)}>Next</button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HumSaathSaathHain;
