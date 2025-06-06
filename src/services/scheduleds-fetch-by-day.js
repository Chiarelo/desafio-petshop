import dayjs from "dayjs";
import { apiConfig } from "./api-config.js";

export async function ScheduledFetchByDay({ dateScheduled }) {
 try {
   const response = await fetch(`${apiConfig.baseUrl}/schedules`);

   if (!response.ok) {
     throw new Error(`HTTP error! status: ${response.status}`);
   }

   const data = await response.json();

   const dailySchedules = data.filter((schedule) => {
     const scheduleDate = schedule.date;
     
     if (!scheduleDate) {
       return false;
     }

     return dayjs(dateScheduled).isSame(scheduleDate, "day");
   });

   return dailySchedules;
 } catch (error) {
   console.log("Error fetching schedules:", error);
   alert(
     "Não foi possível buscar os agendamentos para este dia. Tente novamente mais tarde."
   );
 }
}