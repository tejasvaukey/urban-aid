import { useState } from "react";

const ServiceProviderForm = () => {
  const [openDays, setOpenDays] = useState([]);
  const [halfDay, setHalfDay] = useState("");
  const [times, setTimes] = useState({});

  // Handle day selection (checkboxes)
  const handleDayChange = (e) => {
    const day = e.target.value;
    setOpenDays((prevDays) =>
      prevDays.includes(day)
        ? prevDays.filter((d) => d !== day)
        : [...prevDays, day]
    );
  };

  // Handle time selection for each day
  const handleTimeChange = (day, field, value) => {
    setTimes({
      ...times,
      [day]: {
        ...times[day],
        [field]: value,
      },
    });
  };

  // Handle half-day selection
  const handleHalfDayChange = (e) => {
    setHalfDay(e.target.value);
  };

  return (
    <form>
      <h2>Shop Hours Setup</h2>

      {/* Days of the week */}
      <div>
        <h3>Select Days Open</h3>
        {[
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ].map((day) => (
          <label key={day}>
            <input
              type="checkbox"
              value={day}
              checked={openDays.includes(day)}
              onChange={handleDayChange}
            />
            {day}
          </label>
        ))}
      </div>

      {/* Time Picker for each day */}
      <div>
        <h3>Set Opening and Closing Times</h3>
        {openDays.map((day) => (
          <div key={day}>
            <h4>{day}</h4>
            <label>
              Open:
              <input
                type="time"
                value={times[day]?.open || ""}
                onChange={(e) => handleTimeChange(day, "open", e.target.value)}
              />
            </label>
            <label>
              Close:
              <input
                type="time"
                value={times[day]?.close || ""}
                onChange={(e) => handleTimeChange(day, "close", e.target.value)}
              />
            </label>
          </div>
        ))}
      </div>

      {/* Half-Day Selection */}
      <div>
        <h3>Select Half-Day</h3>
        <select value={halfDay} onChange={handleHalfDayChange}>
          <option value="">-- Select a day --</option>
          {[
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ].map((day) => (
            <option key={day} value={day}>
              {day}
            </option>
          ))}
        </select>
      </div>

      {/* Submit Button */}
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default ServiceProviderForm;
