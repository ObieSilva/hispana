import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AiOutlineReload } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";
import moment from "moment";
import PropTypes from "prop-types";

// Components import
// import HispanaButton from "./reusable/HispanaButton";

const UpcomingEvent = ({
  eventLocation,
  eventPageUri,
  eventDate,
  eventTitle,
}) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const difference = new Date(eventDate) - now;

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });

      if (difference < 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [eventDate]);

  // Format the eventDate using moment.js
  const formattedDate = moment(eventDate).format("D"); // Day of the month as a number
  const formattedMonth = moment(eventDate).format("MMM"); // Month as a three-letter abbreviation

  return (
    <div className="lg:border-b border-border">
      <div className="flex flex-wrap lg:flex-nowrap container max-w-lg mx-auto p-4 lg:p-0 lg:items-center gap-4 lg:gap-0">
        <div className="flex flex-wrap-reverse lg:flex-nowrap w-full">
          <div className="bg-primary text-[#ffffff] px-2.5 flex flex-wrap content-center basis-24 justify-center flex-col items-center">
            <span className="font-bold text-4xl leading-none">
              {formattedDate}
            </span>
            <span className="text-sm">{formattedMonth.toUpperCase()}</span>
          </div>
          <div className="border lg:border-b-0 lg:border-r-0 grow py-4 px-6 border-border">
            <div className="flex flex-col mb-4">
              <span className="text-borderColor small">SIGUIENTE</span>
              <span className="text-sm">PRÓXIMO EVENTO</span>
            </div>
            <div>
              <div className="flex items-center gap-1 text-black text-lg font-medium">
                <Link to={eventPageUri}>{eventTitle}</Link>
                <AiOutlineReload />
              </div>
              <div className="flex items-center gap-1">
                <IoLocationOutline />
                <span className="text-[#9b9b9b] text-sm">{eventLocation}</span>
              </div>
            </div>
          </div>
          <div className="flex basis-full lg:basis-auto grow-[6] min-h-[100px]">
            <div className="border border-r-0 border-b-0 flex flex-grow flex-col items-center justify-center border-border">
              <span className="text-2xl font-extrabold leading-none text-lightText">
                {timeLeft.days}
              </span>
              <span className="small">DIAS</span>
            </div>
            <div className="border border-r-0 border-b-0 text-gray-500 border-border flex flex-grow flex-col items-center justify-center">
              <span className="text-2xl font-extrabold leading-none text-lightText">
                {timeLeft.hours}
              </span>
              <span className="small">HR</span>
            </div>
            <div className="border border-r-0 border-b-0 border-border flex flex-grow flex-col items-center justify-center">
              <span className="text-2xl font-extrabold leading-none text-lightText">
                {timeLeft.minutes}
              </span>
              <span className="small">MIN</span>
            </div>
            <div className="border border-b-0 border-border lg:border-r-0 flex flex-grow flex-col items-center justify-center">
              <span className="text-2xl font-extrabold leading-none text-lightText">
                {timeLeft.seconds}
              </span>
              <span className="small">SEG</span>
            </div>
          </div>
        </div>
        {/* <div className="w-full lg:w-[175px] hover:text-[#000]">
          <HispanaButton
            sx={{ width: "100%", padding: "8px" }}
            title="Ver Evento"
            backgroundColor="#c13636"
            variant="contained"
          />
        </div> */}
      </div>
    </div>
  );
};

UpcomingEvent.propTypes = {
  eventLocation: PropTypes.string.isRequired,
  eventPageUri: PropTypes.string.isRequired,
  eventDate: PropTypes.string.isRequired,
  eventTitle: PropTypes.string.isRequired,
};

export default UpcomingEvent;
