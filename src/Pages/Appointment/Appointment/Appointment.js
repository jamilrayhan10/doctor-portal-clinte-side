import React from "react";
import Menubar from "../../Shared/Menubar/Menubar";
import AppointmentHeader from "../AppointmentHeader/AppointmentHeader";
import AvailableAppointment from "../AvailableAppointment/AvailableAppointment";

const Appointment = () => {
  const [date, setDate] = React.useState(new Date());

  return (
    <div>
      <Menubar />
      <AppointmentHeader date={date} setDate={setDate} />
      <AvailableAppointment date={date} />
    </div>
  );
};

export default Appointment;
