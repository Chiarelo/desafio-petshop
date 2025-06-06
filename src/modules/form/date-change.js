import { SchedulesDay } from "../schedules/load";

const selectedDate = document.getElementById("date");
const scheduleDate = document.getElementById("date-scheduled");

selectedDate.onchange = () => SchedulesDay();

scheduleDate.onchange = () => SchedulesDay()
