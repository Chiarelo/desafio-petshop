import { apiConfig } from "./api-config.js";

export async function scheduleCancel({ id }) {
    try {
        await fetch(`${apiConfig.baseUrl}/schedules/${id}`, {
            method: "DELETE",
        })

        alert("Agendamento cancelado com sucesso!");
    }
    catch (error) {
        console.error("Erro ao cancelar agendamento:", error);
        alert("Ocorreu um erro ao cancelar o agendamento. Tente novamente mais tarde.");
    }
}