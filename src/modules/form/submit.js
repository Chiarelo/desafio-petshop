import dayjs from "dayjs";
import {} from "./fields-validations.js";
import { closeModal } from "./showForm.js";
import { scheduleNew } from "../../services/schedules-new.js";
import { name } from "dayjs/locale/pt-br.js";
import { SchedulesDay } from "../schedules/load.js";

const form = document.querySelector("form");

const date = document.getElementById("date");
const time = document.getElementById("time");
const nameTutor = document.getElementById("tutor-name");
const namePet = document.getElementById("pet-name");
const phone = document.getElementById("phone");
const serviceDescription = document.getElementById("service-description");

form.onsubmit = async (event) => {
  event.preventDefault();

  if (
    !date.value ||
    !time.value ||
    !nameTutor.value ||
    !namePet.value ||
    !phone.value ||
    !serviceDescription.value
  ) {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  if (nameTutor.value.length < 3) {
    alert("O nome do tutor deve ter pelo menos 3 caracteres.");
    return;
  }

  if (namePet.value.length < 3) {
    alert("O nome do pet deve ter pelo menos 3 caracteres.");
    return;
  }

  if (phone.value.length < 11) {
    alert("O telefone deve conter pelo menos 11 dígitos.");
    return;
  }

  if (serviceDescription.value.trim().length < 10) {
    alert("A descrição do serviço deve ter pelo menos 10 caracteres.");
    return;
  }

  const name = nameTutor.value.trim();
  const petName = namePet.value.trim();
  const id = crypto.randomUUID();

  await scheduleNew({
    id,
    name,
    petName,
    phone: phone.value,
    service: serviceDescription.value,
    date: date.value,
    time: time.value,
  });

  await SchedulesDay();

  nameTutor.value = "";
  namePet.value = "";
  phone.value = "";
  serviceDescription.value = "";
  date.value = dayjs().locale("pt-br").format("YYYY-MM-DD");
  time.value = dayjs().locale("pt-br").format("HH:mm");
  closeModal();
};
