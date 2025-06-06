import dayjs from "dayjs";
import { name } from "dayjs/locale/pt-br";

// Selecionando os elementos do DOM
const date = document.getElementById("date");
const time = document.getElementById("time");
let nameTutor = document.getElementById("tutor-name");
let namePet = document.getElementById("pet-name");
let phone = document.getElementById("phone");
let serviceDescription = document.getElementById("service-description");
const scheduleDate = document.getElementById("date-scheduled");

const inputToday = dayjs(new Date()).format("YYYY-MM-DD");
date.value = inputToday;
date.min = inputToday;

const inputTime = dayjs(new Date()).format("HH:mm");
time.value = inputTime;
time.min = inputTime;

nameTutor.addEventListener("input", () => {
  const regex = /[^A-Za-zÀ-ÖØ-öø-ÿ'\-\s]/g;

  nameTutor.value = nameTutor.value.replace(regex, "");
});

namePet.addEventListener("input", () => {
  const regex = /[^A-Za-zÀ-ÿ\s\-'\.]/g;

  namePet.value = namePet.value.replace(regex, "");
});

phone.addEventListener("input", () => {
  const regex = /[^\d\+]/g;
  phone.value = phone.value.replace(regex, "");

  if (phone.value.length === 10) {
    phone.value = phone.value.replace(/^(\d{2})(\d{4})(\d{4})/, "($1) $2-$3");
  } else if (phone.value.length > 11) {
    phone.value = phone.value.slice(0, 11);
    phone.value = phone.value.replace(/(\d{2})(\d)/, "($1) $2");
    phone.value = phone.value.replace(/(\d)(\d{4})$/, "$1-$2");
  }
});

scheduleDate.min = inputToday;
scheduleDate.value = inputToday;
