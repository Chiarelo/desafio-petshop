import { scheduleCancel } from "../../services/schedule-cancel.js";
import { SchedulesDay } from "../schedules/load.js";
const main = document.querySelector("main");

main.addEventListener("click", async (event) => {
  console.log("Evento de clique detectado:", event);
  if (event.target.classList.contains("cancel")) {
    // Verifica se o elemento clicado é um botão de cancelamento
    console.log("Cancelando agendamento...");
    const item = event.target.closest("li");

    const id = item.getAttribute("data-id");

    if (id) {
      const isConfirm = confirm(
        "Você tem certeza que deseja cancelar este agendamento?"
      );

      if (isConfirm) {
        await scheduleCancel({ id });
        SchedulesDay();
      }
    }
  }
});
