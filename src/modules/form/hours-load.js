import dayjs from "dayjs";
import { openingHours } from "../../utils/opening-hours";

const select = document.querySelector("#time");

export function hoursLoad({ date, dailySchedules }) {
  // Limpa o select antes de exibir os novos horários
  select.innerHTML = "";
  const now = dayjs();

  // Obtem a lista de horários indisponíveis do dia
  const unavailableHours = dailySchedules.map((schedule) => schedule.time);

  const opening = openingHours.map((hour) => {
    const [scheduledHour] = hour.split(":");

    // Cria um horário no dia de hoje com a hora agendada
    const horaAlvo = dayjs(date)
      .hour(Number(scheduledHour))
      .minute(0)
      .second(0);

    // Verifica se a hora atual é depois da hora alvo
    const isHourPast = horaAlvo.isBefore(now);
    const available = !unavailableHours.includes(hour) && !isHourPast;

    
    return {
      hour,
      available,
    };
  });

  select.innerHTML = "";

  opening.forEach(({ hour, available }) => {
    const option = document.createElement("option");
    if (!available) {
      return;
    }

    option.value = hour;
    option.textContent = hour;

    select.appendChild(option);
  });
}
