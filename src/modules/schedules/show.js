import dayjs from "dayjs";
const periodMornig = document.getElementById("period-morning");
const periodAfternoon = document.getElementById("period-afternoon");
const periodNight = document.getElementById("period-night");

export function SchedulesShow({ dailySchedules }) {
  // Limpa os períodos antes de exibir os novos agendamentos
  periodMornig.innerHTML = "";
  periodAfternoon.innerHTML = "";
  periodNight.innerHTML = "";

  dailySchedules.forEach((schedule) => {
    const li = document.createElement("li");
    li.setAttribute("data-id", `${schedule.id}`);
    const div = document.createElement("div");
    const time = document.createElement("strong");
    time.textContent = schedule.time;

    const name = document.createElement("p");
    name.textContent = schedule.petName;

    const nameTutor = document.createElement("span");
    nameTutor.textContent = ` / ${schedule.name}`;

    name.appendChild(nameTutor);

    const service = document.createElement("span");
    service.textContent = schedule.service.name;
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remover agendamento";
    removeButton.classList.add("cancel");

    div.append(time, name);
    li.append(div, service, removeButton);

    // Obtem somente a hora do agendamento
    const hour = parseInt(schedule.time.split(":")[0]); // Extrai o primeiro elemento antes dos dois pontos

    if (hour <= 12) {
      periodMornig.appendChild(li);
    } else if (hour > 12 && hour <= 18) {
      periodAfternoon.appendChild(li);
    } else {
      periodNight.appendChild(li);
    }
  });
}
