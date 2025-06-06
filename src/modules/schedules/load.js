import { hoursLoad } from "../form/hours-load";
import { ScheduledFetchByDay } from "../../services/scheduleds-fetch-by-day.js";
import { SchedulesShow } from "./show.js";

const selectedDate = document.getElementById("date");
const scheduleDate = document.getElementById("date-scheduled");

export async function SchedulesDay() {
  const date = selectedDate.value; // #date (formulário)
  const dateScheduled = scheduleDate.value; // #date-scheduled (visualizar)

  // ALTERADO: campo correto 'date' ao invés de 'dateScheduled'
  const dailySchedules = await ScheduledFetchByDay({ dateScheduled });

  SchedulesShow({ dailySchedules });

  hoursLoad({
    date,
    dailySchedules,
  });
}
