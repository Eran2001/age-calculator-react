import { useState } from "react";

function AgeCalculator() {
  const [dob, setDob] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState("");

  const calculateAge = (event) => {
    event.preventDefault();
    setError("");
    const birthDate = new Date(dob);
    const today = new Date();
    if (birthDate > today) {
      setError("Date of birth cannot be in the future");
      setAge("");
      return;
    }

    if (dob === "") {
      setError("Please enter your date of birth");
      setAge("");
      return;
    }

    const ageInMilliseconds = today - birthDate;
    const ageDate = new Date(ageInMilliseconds);
    const years = ageDate.getUTCFullYear() - 1970;
    const months = ageDate.getUTCMonth();
    const days = ageDate.getUTCDate() - 1;

    setAge(`${years} years, ${months} months, and ${days} days`);
  };

  return (
    <div className="container mx-auto p-4 sm:p-6 main-div">
      <h1 className="text-3xl mb-4 text-center heading">Age Calculator</h1>
      <form
        onSubmit={calculateAge}
        className="flex flex-col items-center input-field"
      >
        <input
          type="date"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
          className="mb-4 p-2 border border-gray-300 rounded sm:w-full sm:max-w-xs"
        />
        <button
          type="submit"
          className="bg-[#A294F9] text-white py-2 px-4 rounded hover:bg-[#3f309f] btn sm:w-full sm:max-w-xs"
        >
          Calculate Age
        </button>
      </form>
      {error && <p className="text-red-500 text-center mt-4">{error}</p>}
      {age && (
        <p className="text-lg text-center mt-4 output">Your age: {age}</p>
      )}

      {/* try again */}
      {age && (
        <div className="flex justify-center">
          <button
            onClick={() => {
              setDob("");
              setAge("");
              setError("");
            }}
            className="bg-[#A294F9] text-white py-2 px-4 rounded hover:bg-[#3f309f] mt-4 try-again sm:w-full sm:max-w-xs"
          >
            Try Again
          </button>
        </div>
      )}
    </div>
  );
}

export default AgeCalculator;
