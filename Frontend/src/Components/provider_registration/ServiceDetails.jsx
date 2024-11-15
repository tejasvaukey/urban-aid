const ServiceDetails = ({ providerData, setProviderData, pageTitle, page }) => {
  const { availability = {} } = providerData;

  const handleDayChange = (e) => {
    const day = e.target.value;
    const updatedDays = availability.openDays?.includes(day)
      ? availability.openDays.filter((d) => d !== day)
      : [...(availability.openDays || []), day];

    setProviderData({
      ...providerData,
      availability: {
        ...availability,
        openDays: updatedDays,
      },
    });
  };

  const handleTimeChange = (day, field, value) => {
    const updatedTimes = {
      ...(availability.times || {}),
      [day]: {
        ...(availability.times?.[day] || {}),
        [field]: value,
      },
    };

    setProviderData({
      ...providerData,
      availability: {
        ...availability,
        times: updatedTimes,
      },
    });
  };

  const handleHalfDayChange = (e) => {
    setProviderData({
      ...providerData,
      availability: {
        ...availability,
        halfDay: e.target.value,
      },
    });
  };

  return (
    <div className="pr-10">
      <h2 className="text-blue-900 text-3xl italic font-bold mb-6">
        Shop Hours Setup
      </h2>

      {/* Days of the week */}
      <div className="mb-8">
        <h3 className="font-semibold mb-4 text-lg">Select Days Open</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {[
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ].map((day) => (
            <label key={day} className="flex items-center">
              <input
                type="checkbox"
                value={day}
                checked={availability.openDays?.includes(day) || false}
                onChange={handleDayChange}
                className="form-checkbox h-5 w-5 text-blue-600"
              />
              <span className="ml-2 text-gray-700">{day}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Time Picker for each day */}
      <div className="mb-8">
        <h3 className="font-semibold mb-4 text-lg">
          Set Opening and Closing Times
        </h3>
        {availability.openDays?.map((day) => (
          <div key={day} className="mb-4">
            <h4 className="font-medium text-gray-700 mb-2">{day}</h4>
            <div className="flex items-center space-x-4">
              <label className="flex items-center">
                <span className="mr-2 text-gray-600">Open:</span>
                <input
                  type="time"
                  value={availability.times?.[day]?.open || ""}
                  onChange={(e) =>
                    handleTimeChange(day, "open", e.target.value)
                  }
                  className="border rounded px-2 py-1 text-gray-700"
                />
              </label>
              <label className="flex items-center">
                <span className="mr-2 text-gray-600">Close:</span>
                <input
                  type="time"
                  value={availability.times?.[day]?.close || ""}
                  onChange={(e) =>
                    handleTimeChange(day, "close", e.target.value)
                  }
                  className="border rounded px-2 py-1 text-gray-700"
                />
              </label>
            </div>
          </div>
        ))}
      </div>

      {/* Half-Day Selection */}
      <div className="mb-8">
        <h3 className="font-semibold mb-4 text-lg">Select Half-Day</h3>
        <select
          value={availability.halfDay || ""}
          onChange={handleHalfDayChange}
          className="border rounded px-3 py-2 text-gray-700"
        >
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
        <button
          type="button"
          className={`mt-4 w-full px-4 py-2 text-white rounded bg-blue-600 hover:bg-blue-700`}
          onClick={() => console.log(providerData)}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default ServiceDetails;
