import {apiConfig} from "./api-config.js";
export async function scheduleNew({id, name, petName, phone, service, date, time,}) {
  try {
    const response = await fetch(`${apiConfig.baseUrl}/schedules`, {
        headers: {
            "content-type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({ id, name, petName, phone, service, date, time,}),
    });

    alert("Agendamento realizado com sucesso!");
    
  } catch (error) {
    console.log("Error scheduling new appointment:", error);
    alert("Não foi possível realizar o agendamento. Tente novamente mais tarde.");
}
}
